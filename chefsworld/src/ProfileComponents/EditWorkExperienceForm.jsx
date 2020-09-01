import React, {Component} from 'react' 
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 

class EditWorkExperienceForm extends Component {
    state = {
        work_experience: {
            id: this.props.work_experience.id,
            chef_type: this.props.work_experience.chef_type,
            experience: this.props.work_experience.experience,
            employer_name: this.props.work_experience.employer_name,
            start_date: this.props.work_experience.start_date,
            end_date: this.props.work_experience.end_date,
            current_workplace: this.props.work_experience.current_workplace,
            title: this.props.work_experience.title,
            description: this.props.work_experience.description,
            city: this.props.work_experience.city, 
            state: this.props.work_experience.state,
            country: this.props.work_experience.country 
        }
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.updateExperience(this.state.work_experience)
    }

    handleChange = (e) => {
        e.persist() 

        this.setState(prevState => ({
            work_experience: {...prevState.work_experience, [e.target.name]: e.target.value} 
        }))
    }

    render() {
        const {chef_type, experience, employer_name, start_date, end_date, current_workplace, title, description, city, state, country} = this.state.work_experience 
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group controlId="formGroupChefType">
                    <Form.Label>Chef Type</Form.Label> 
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter what type of chef you are" name="chef_type" value={chef_type} /> 
                </Form.Group>
                <Form.Group controlId="formGroupExperience">
                    <Form.Label>Years of Experience</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your years of experience" name="experience" value={experience} />  
                </Form.Group>
                <Form.Group controlId="formGroupEmployerName"> 
                    <Form.Label>Emplyoer Name</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your Employer's name" name="employer_name" value={employer_name} /> 
                </Form.Group>
                <Form.Group controlId="formGroupStartDate">
                    <Form.Label>Start Date</Form.Label> 
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your Start Date" name="start_date" value={start_date} /> 
                </Form.Group>
                <Form.Group controlId="formGroupEndDate">
                    <Form.Label>End Date</Form.Label> 
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your End Date" name="end_date" value={end_date} /> 
                </Form.Group>
                <Form.Group controlId="formGroupCurrentWorkplace"> 
                    <Form.Label>Current Workplace</Form.Label> 
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your Current Workplace" name="current_workplace" value={current_workplace} /> 
                </Form.Group>
                <Form.Group controlId="formGroupTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your Title" name="title" value={title} /> 
                </Form.Group>
                <Form.Group controlId="formGroupDescription">
                    <Form.Label>Description</Form.Label> 
                    <Form.Control onChange={this.handleChange} as="textarea" rows={10} placeholder="Please enter your Description" name="description" value={description} /> 
                </Form.Group>
                <Form.Group controlId="formGroupCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the city" name="city" value={city} /> 
                </Form.Group>
                <Form.Group controlId="formGroupState">
                    <Form.Label>State</Form.Label>
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter your state" name="state" value={state} /> 
                </Form.Group>
                <Form.Group controlId="formGroupCountry">
                    <Form.Label>Country</Form.Label> 
                    <Form.Control onChange={this.handleChange} type="text" placeholder="Please enter the Country" name="country" value={country} />  
                </Form.Group>
                <Button variant="success" type="submit">Submit</Button>
            </Form>
        )
    }

}

export default EditWorkExperienceForm