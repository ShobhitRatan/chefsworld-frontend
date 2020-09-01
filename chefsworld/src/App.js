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
import RecipesContainer from './RecipesComponents/RecipesContainer' 
class App extends Component {
  state = {
    user: {
      id: 0,
      email: "",
      name: "",
      addresses: [], 
      work_experiences: [], 
      educations: [], 
      awards: []
    },
    token: ""
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
    else if (routerProps.location.pathname === "/logout") {
      return <LoginForm handleSubmit = {this.handleLoginSubmit} /> 
    }
  }

  addOneAddress = (address) => {
    let newAddresses = [...this.state.user.addresses, address] 
    let newUser = {
      ...this.state.user,
      addresses: newAddresses 
    }
    this.setState({
      user: newUser 
    })
  }

  addOneExperience = (work_experience) => {
    let newWorkExperiences = [...this.state.user.work_experiences, work_experience] 
    let newUser = {
      ...this.state.user,
      work_experiences: newWorkExperiences 
    }
    this.setState({
      user: newUser 
    })
  }

  addOneEducation = (education) => {
    let newEducations = [...this.state.user.educations, education] 
    let newUser = {
      ...this.state.user,
      educations: newEducations 
    }
    this.setState({
      user: newUser 
    })
  }

  addOneAward = (award) => {
    let newAwards = [...this.state.user.awards, award] 
    let newUser = {
      ...this.state.user, 
      awards: newAwards 
    }
    this.setState({
      user: newUser 
    })
  }

  updateOneAddress = (updatedAddressInstance) => {
    let newAddresses = this.state.user.addresses.map((address) => {
      if (address.id === updatedAddressInstance.id) {
        return updatedAddressInstance
      }
      else {
        return address 
      }
    })
    let newUser = {
      ...this.state.user,
      addresses: newAddresses 
    } 
    this.setState({
      user: newUser 
    })
  } 

  updateOneExperience = (updatedWorkExperienceInstance) => {
    let newWorkExperiences = this.state.user.work_experiences.map((work_experience) => {
      if (work_experience.id === updatedWorkExperienceInstance.id) {
        return updatedWorkExperienceInstance 
      }
      else {
        return work_experience
      }
    })
    let newUser = {
      ...this.state.user,
      work_experiences: newWorkExperiences 
    }
    this.setState({
      user: newUser 
    })
  }

  updateOneEducation = (updatedEducationInstance) => {
    let newEducations = this.state.user.educations.map(education => {
      if (education.id === updatedEducationInstance.id) {
        return updatedEducationInstance
      }
      else {
        return education 
      }
    })
    let newUser = {
      ...this.state.user, 
      educations: newEducations 
    }
    this.setState({
      user: newUser
    })
  }

  updateOneAward = (updatedAwardInstance) => {
    let newAwards = this.state.user.awards.map(award => {
      if (award.id === updatedAwardInstance.id) {
        return updatedAwardInstance 
      }
      else {
        return award 
      }
    })
    let newUser = {
      ...this.state.user, 
      awards: newAwards 
    }
    this.setState({
      user: newUser 
    })
  }

  deleteAddressFromUser = (idFromChild) => {
    let newAddresses = this.state.user.addresses.filter((address) => {
      return address.id !== idFromChild
    })
    let newUser = {
      ...this.state.user, 
      addresses: newAddresses
    }
    this.setState({
      user: newUser 
    })
  }

  deleteWorkExperienceFromUser = (idFromChild) => {
    let newWorkExperiences = this.state.user.work_experiences.filter((work_experience) => {
      return work_experience.id !== idFromChild 
    })
    let newUser = {
      ...this.state.user,
      work_experiences: newWorkExperiences 
    }
    this.setState({
      user: newUser 
    })
  }

  deleteEducationFromUser = (idFromChild) => {
    let newEducations = this.state.user.educations.filter(education => {
      return education.id !== idFromChild 
    })
    let newUser = {
      ...this.state.user,
      educations: newEducations 
    }
    this.setState({
      user: newUser 
    })
  }

  deleteAwardFromUser = (idFromChild) => {
    let newAwards = this.state.user.awards.filter(award => {
      return award.id !== idFromChild 
    })
    let newUser = {
      ...this.state.user,
      awards: newAwards 
    }
    this.setState({
      user: newUser  
    })
  }
  
  renderProfile = (routerProps) => {
    if (this.state.token) {
      return <ProfileContainer user={this.state.user} token={this.state.token} addOneAddress={this.addOneAddress} addOneExperience={this.addOneExperience} addOneEducation={this.addOneEducation} addOneAward={this.addOneAward} updateOneAddress={this.updateOneAddress} updateOneExperience={this.updateOneExperience} updateOneEducation={this.updateOneEducation} updateOneAward={this.updateOneAward} deleteAddressFromUser={this.deleteAddressFromUser} deleteWorkExperienceFromUser={this.deleteWorkExperienceFromUser} deleteEducationFromUser={this.deleteEducationFromUser} deleteAwardFromUser={this.deleteAwardFromUser} />  
    }
    else {
      this.props.history.push("/login") 
    }
  }

  logOutHandler = () => {
    localStorage.removeItem("token")
    this.props.history.push("/login") 
    this.setState({
      user: null,
      token: ''
    })
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
                    <Route path="/logout" render={this.renderForm} />  
                    <Route path="/register" render={this.renderForm} /> 
                    <Route path="/profile" render={this.renderProfile} />
                    <Route path="/" exact component={Home} />
                    <Route path="/recipes" render={() => <RecipesContainer user={this.state.user} userId={this.state.user.id} />} />
                    <Route render={() => <p>Page not Found</p>} /> 
                  </Switch>
              </Container>
            </Jumbotron>
      </div>
    );
  }
}

export default withRouter(App);
