import React, {Component} from "react" 
import Card from 'react-bootstrap/Card' 
import CardDeck from 'react-bootstrap/CardDeck' 
import Button from 'react-bootstrap/Button' 
import EditWorkExperienceForm from './EditWorkExperienceForm' 

class WorkExperience extends Component {
    state = {
        displayExperience: false 
    }

    handleDisplayExperience = () => {
        const val = this.state.displayExperience 
        this.setState({
            displayExperience: !val 
        })
    }

    handleDelete = (e) => {
        this.props.deleteExperience(this.props.work_experience.id) 
    }

    render() {
        return (
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title> {this.props.work_experience.title}, {this.props.work_experience.current_workplace} - ({this.props.work_experience.start_date} - {this.props.work_experience.end_date})</Card.Title> 
                        <Card.Text>Years of experience: {this.props.work_experience.experience}</Card.Text> 
                        <Card.Text>Employer Name: {this.props.work_experience.employer_name}</Card.Text> 
                        <Card.Text>Location: {this.props.work_experience.city}, {this.props.work_experience.state}, {this.props.work_experience.country}</Card.Text> 
                        <Card.Text>Description: {this.props.work_experience.description}</Card.Text>
                        {this.state.displayExperience ? <EditWorkExperienceForm updateExperience={this.props.updateExperience} key={this.props.work_experience.id} work_experience={this.props.work_experience} />: null} 
                        <Card.Text><Button onClick={this.handleDisplayExperience} variant="info">Edit Work Experience</Button></Card.Text>
                        <Card.Text><Button onClick={this.handleDelete} variant="danger">Delete Work Experience</Button></Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    }
}

export default WorkExperience