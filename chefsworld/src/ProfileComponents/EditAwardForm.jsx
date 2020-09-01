import React, {Component} from 'react' 
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 

class EditAwardForm extends Component {
    state = {
        award: {
            id: this.props.award.id, 
            description: this.props.award.description, 
            received_date: this.props.award.received_date
        }
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.updateAward(this.state.award) 
    }

    handleChange = (e) => {
        e.persist(); 

        this.setState(prevState => ({
            award: {...prevState.award, [e.target.name]: e.target.value}
        }))
    } 

    render() {
        const {description, received_date} = this.state.award  
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

export default EditAwardForm