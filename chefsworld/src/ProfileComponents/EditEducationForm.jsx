import React, {Component} from 'react' 
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button'

class EditEducationForm extends Component {
    state = {
        education: {
            id: this.props.education.id, 
            description: this.props.education.description, 
            entry_date: this.props.education.entry_date, 
            end_date: this.props.education.end_date, 
            enrollment_status: this.props.education.enrollment_status 
        }
    }

    handleSubmit = (e) => {
        e.preventDefault() 

        this.props.updateEducation(this.state.education) 
    }

    handleChange = (e) => {
        e.persist() 

        this.setState(prevState => ({
            education: {...prevState.education, [e.target.name]: e.target.value} 
        }))
    }

    render() {
        const {description, entry_date, end_date, enrollment_status} = this.state.education  
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group controlId="formGroupDescription">
                    <Form.Label>Description</Form.Label> 
                    <Form.Control onChange={this.handleChange} as="textarea" rows={10} placeholder="Please enter your college name and degree" name="description" value={description} /> 
                </Form.Group>
                <Form.Group controlId="formGroupEntryDate">
                    <Form.Label>Entry Date</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the entry date" name="entry_date" value={entry_date} /> 
                </Form.Group>
                <Form.Group controlId="formGroupEndDate">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the end date" name="end_date" value={end_date} /> 
                </Form.Group>
                <Form.Group controlId="formGroupEnrollmentStatus">
                    <Form.Label>Enrollment Status</Form.Label> 
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your enrollment status" name="enrollment_status" value={enrollment_status} /> 
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
        )
    }
}

export default EditEducationForm