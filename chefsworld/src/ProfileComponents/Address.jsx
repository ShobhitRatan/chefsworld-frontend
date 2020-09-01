import React, {Component} from "react" 
import Card from 'react-bootstrap/Card' 
import CardDeck from 'react-bootstrap/CardDeck' 
import Button from 'react-bootstrap/Button' 
import EditAddressForm from "./EditAddressForm"

class Address extends Component {
    state = {
        displayAddress: false 
    }

    handleDisplayAddress = () => {
        const val = this.state.displayAddress 
        this.setState({
            displayAddress: !val 
        })
    }

    handleDelete = (e) => {
        this.props.deleteAddress(this.props.address.id) 
    }

    render() {
        return (
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.address.address_type}</Card.Title>
                        <Card.Text>{this.props.address.address}, {this.props.address.city}, {this.props.address.state},
                        {this.props.address.country}, {this.props.address.zipcode}</Card.Text> 
                        {this.state.displayAddress ? <EditAddressForm updateAddress={this.props.updateAddress} key={this.props.address.id} address={this.props.address} /> : null} 
                        <Card.Text><Button onClick={this.handleDisplayAddress} variant="info">Edit Address</Button></Card.Text>
                        <Card.Text><Button onClick={this.handleDelete} variant="danger">Delete Address</Button></Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    }
}

export default Address 