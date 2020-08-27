import React, {Component} from 'react';
import SignupForm from './components/SignupForm'
import Home from './components/Home'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import {Switch, Route} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token){
      fetch("http://localhost:4000/users/stay_logged_in",{
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }
  }

  handleLoginSubmit = (userInfo) => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }


  handleRegisterSubmit = (userInfo) => {
    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    if(resp.user){
      localStorage.setItem("token", resp.token)
      this.setState(resp, () => {
        this.props.history.push("/profile")
      })
    } else {
      // alert(resp.error)
    }
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <LoginForm 
        handleSubmit={this.handleLoginSubmit}
      />
    } else if (routerProps.location.pathname === "/register") {
      return <SignupForm
        handleSubmit={this.handleRegisterSubmit}
      />
    }
  }

  renderProfile = (routerProps) => {
    if (this.state.token) {
      return <ProfileContainer user={this.state.user} token={this.state.token} /> 
    }
    else {
      this.props.history.push("/login") 
    }
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    this.props.history.push("/login") 
    this.setState({user: null})
  } 

  render(){
    return (
      <div className="App">
            <Jumbotron > 
              <Container>
                <h1 className="header">Welcome to ChefsWorld</h1>
                <NavBar user={this.state.user} clickHandler={this.logOutHandler}/> 
                  <Switch>
                    <Route path="/login" render={this.renderForm} /> 
                    <Route path="/logout" exact component={Home} /> 
                    <Route path="/register" render={this.renderForm} /> 
                    <Route path="/profile" render={this.renderProfile} />
                    <Route path="/" exact component={Home} />
                    <Route render={() => <p>Page not Found</p>} /> 
                  </Switch>
              </Container>
            </Jumbotron>
      </div>
    );
  }
}

export default withRouter(App);
