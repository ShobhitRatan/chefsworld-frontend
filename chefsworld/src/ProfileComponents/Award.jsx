import React, {Component} from "react" 
import Card from 'react-bootstrap/Card' 
import CardDeck from 'react-bootstrap/CardDeck' 
import Button from 'react-bootstrap/Button' 
import EditAwardForm from "./EditAwardForm"

class Award extends Component {
    state = {
        displayAward: false 
    }

    handleDisplayAward = () => {
        const val = this.state.displayAward 
        this.setState({
            displayAward: !val 
        })
    } 

    handleDelete = (e) => {
        this.props.deleteAward(this.props.award.id)
    }

    render() {
        return (
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>Award earned - {this.props.award.received_date}</Card.Title>
                        <Card.Text>Description: {this.props.award.description}</Card.Text>
                        {this.state.displayAward ? <EditAwardForm updateAward={this.props.updateAward} award={this.props.award} key={this.props.award.id} /> : null}
                        <Card.Text><Button onClick={this.handleDisplayAward} variant="info">Edit Award</Button></Card.Text>
                        <Card.Text><Button onClick={this.handleDelete} variant="danger">Delete Award</Button></Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    }
}

export default Award 