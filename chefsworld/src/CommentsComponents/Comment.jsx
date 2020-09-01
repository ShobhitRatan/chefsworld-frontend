import React, {Component} from "react" 
import Card from 'react-bootstrap/Card' 
import CardDeck from 'react-bootstrap/CardDeck' 
import Button from 'react-bootstrap/Button' 

class Comment extends Component {
    state = {
        display: false 
    }

    handleDisplay = () => {
        const val = this.state.display 
        this.setState({
            display: !val 
        })
    }
    handleLike = (e) => {
        this.props.increaseLikes(this.props.comment) 
    }

    handleDelete = (e) => {
        this.props.deleteComment(this.props.comment.id) 
    }

    render() {
        return (
            <CardDeck>
                <Card>
                    <Card.Body>
                        <Card.Title>{this.props.comment.user.name}</Card.Title>
                        <Card.Text>{this.props.comment.recipe.label}</Card.Text>
                        <Card.Text>{this.props.comment.content}</Card.Text>
                        <Card.Text><Button onClick={(e) => this.handleLike(e)}>Like{'♥'}</Button>{this.props.comment.likes}</Card.Text> 
                        <Card.Text><Button onClick={this.handleDelete} variant="danger">Delete Comment</Button></Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        )
    }
}

export default Comment 