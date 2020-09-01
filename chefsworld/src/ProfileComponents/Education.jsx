import React, {Component} from "react" 
import Card from 'react-bootstrap/Card' 
import CardDeck from 'react-bootstrap/CardDeck' 
import Button from 'react-bootstrap/Button' 
import EditEducationForm from "./EditEducationForm"

class Education extends Component {
    state = {
        displayEducation: false 
    }

    handleDisplayEducation = () => {
        const val = this.state.displayEducation 
        this.setState({
            displayEducation: !val 
        })
    }

    handleDelete = () => {
        this.props.deleteEducation(this.props.education.id) 
    }

    render() {
        return (
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.education.enrollment_status} - ({this.props.education.entry_date} - {this.props.education.end_date} </Card.Title>
                        <Card.Text>{this.props.education.description}</Card.Text>
                        {this.state.displayEducation ? <EditEducationForm updateEducation={this.props.updateEducation} education={this.props.education} key={this.props.education.id} /> : null} 
                        <Card.Text><Button onClick={this.handleDisplayEducation} variant="info">Edit Education</Button></Card.Text> 
                        <Card.Text><Button onClick={this.handleDelete} variant="danger">Delete Education</Button></Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    }
}

export default Education 