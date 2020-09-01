import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class EditUserForm extends Component {
    state = {
        user: {
            id: this.props.user.id, 
            name: this.props.user.name, 
            email: this.props.user.email, 
            password: this.props.user.password  
        }
    }

    handleSubmit = (e) => {
        this.props.updateUser(this.state.user) 
    }

    handleChange = (e) => {
        e.persist(); 

        this.setState(prevState => ({
            user: {...prevState.user, [e.target.name]: e.target.value}
        }))
    }

    render() {
        const {name, email, password} = this.state.user 
        return(
        <Form onSubmit={this.handleSubmit}>  
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
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
        )
    }
}

export default EditUserForm