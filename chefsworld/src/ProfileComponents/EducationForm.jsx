import React, {Component} from 'react' 
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button'

class EducationForm extends Component {
    state = {
        description: '',
        entry_date: '',
        end_date: '', 
        enrollment_status: ''
    }

    handleSubmit = (e) => {
        e.preventDefault() 

        this.props.addEducation({
            description: e.target.description.value, 
            entry_date: e.target.entry_date.value, 
            end_date: e.target.end_date.value, 
            enrollment_status: e.target.enrollment_status.value 
        })
        this.setState({
            description: '',
            entry_date: '',
            end_date: '', 
            enrollment_status: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        const {description, entry_date, end_date, enrollment_status} = this.state 
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

export default EducationForm 