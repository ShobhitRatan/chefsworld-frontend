import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button' 
class SignupForm extends Component {

  state = {
    name: "",
    email: "",
    password: "", 
    image_1: "", 
    image_2: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {name, email, password, image_1, image_2} = this.state

    return (
      <Form onSubmit={this.handleSubmit}> 
        <h1>Registration Form</h1> 
        <Form.Group controlId="formGroupName">
            <Form.Label>Name</Form.Label> 
            <Form.Control onChange={this.handleChange} type="text"  name="name" value={name} /> 
        </Form.Group>
        <Form.Group controlId="formGroupUsername">
          <Form.Label>Username(email): </Form.Label> 
          <Form.Control onChange={this.handleChange} type="text"  name="email" value={email} /> 
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label> 
          <Form.Control onChange={this.handleChange} type="password" name="password" value={password} />
        </Form.Group>
        <Form.Group controlId="formGroupImage1">
          <Form.Label>Image 1</Form.Label> 
          <Form.Control onChange={this.handleChange} type="text" name="image_1" value={image_1} />
        </Form.Group>
        <Form.Group controlId="formGroupImage1">
          <Form.Label>Image 2</Form.Label> 
          <Form.Control onChange={this.handleChange} type="text" name="image_2" value={image_2} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }

}

export default SignupForm;
