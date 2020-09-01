import React, {Component} from 'react' 
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button'

class AwardForm extends Component {
    state = {
        description: '', 
        received_date: ''
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.addAward({
            description: e.target.description.value,
            received_date: e.target.received_date.value 
        })
        this.setState({
            description: '',
            received_date: '' 
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        const {description, received_date} = this.state 
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group controlId="formGroupDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" rows={10} placeholder="Please enter the Award's description" name="description" value={description} /> 
                </Form.Group>
                <Form.Group controlId="formGroupReceivedDate">
                    <Form.Label>Received Date</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the date you received the award on" name="received_date" value={received_date} /> 
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
        )
    }
}

export default AwardForm 