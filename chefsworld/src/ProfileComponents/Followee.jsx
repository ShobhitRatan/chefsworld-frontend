import React, {Component} from 'react' 
import Card from 'react-bootstrap/Card' 
import CardDeck from 'react-bootstrap/CardDeck' 

class Followee extends Component {
    render() {
        return (
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Text>{this.props.followee.name}</Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    }
}

export default Followee 