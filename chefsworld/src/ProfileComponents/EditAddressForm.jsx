import React, {Component} from 'react' 
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 

class EditAddressForm extends Component {
    state = {
        address: {
            id: this.props.address.id,
            address_type: this.props.address.address_type,
            address: this.props.address.address,
            city: this.props.address.city,
            state: this.props.address.state,
            country: this.props.address.country,
            zipcode: this.props.address.zipcode
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateAddress(this.state.address) 

    }

    handleChange = (e) => {
        e.persist(); 

        this.setState(prevState => ({
            address: {...prevState.address, [e.target.name]: e.target.value}
        }))
    } 

    render() {
        const {address_type, address, city, state, country, zipcode} = this.state.address 
        return (
            <Form onSubmit={e => this.handleSubmit(e)}>
                <Form.Group controlId="formGroupAddressType">
                    <Form.Label>Address Type</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the address type" name="address_type" value={address_type} /> 
                </Form.Group> 
                <Form.Group controlId="formGroupAddress">
                    <Form.Label>Address</Form.Label> 
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your address" name="address" value={address} /> 
                </Form.Group>
                <Form.Group controlId="formGroupCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your city" name="city" value={city} /> 
                </Form.Group>
                <Form.Group controlId="formGroupState">
                    <Form.Label>State</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your state" name="state" value={state} />
                </Form.Group>
                <Form.Group controlId="formGroupCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your country" name="country" value={country} /> 
                </Form.Group>
                <Form.Group controlId="formGroupZipcode">
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your zipcode" name="zipcode" value={zipcode} /> 
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        )
    }
}

export default EditAddressForm 