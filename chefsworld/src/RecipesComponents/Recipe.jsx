import React, {Component} from "react"
import Card from 'react-bootstrap/Card' 
import CardDeck from 'react-bootstrap/CardDeck' 
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Comment from '../CommentsComponents/Comment'
import CommentForm from '../CommentsComponents/CommentForm' 
import EditRecipeForm from './EditRecipeForm'
class Recipe extends Component {
    state = {
        showSource: true, 
        display: false, 
        commentDisplay: false,   
    } 


    handleClick = (e) => {
        const val = this.state.showSource 
        this.setState({
            showSource: !val 
        })
    }

    handleDisplay = () => {
        const val = this.state.display 
        this.setState({
            display: !val 
        })
    } 

    handleCommentDisplay = () => {
        const val = this.state.commentDisplay 
        this.setState({
            commentDisplay: !val 
        })
    }
    handleDelete = (e) => {
        this.props.deleteRecipe(this.props.recipe.id) 
    }

    render() {
        
        return (
            <div>
                <CardDeck>
                    <Card key={this.props.recipe.id}> 
                        <Card.Img variant="top" onClick={(e) => this.handleClick(e)} src={this.props.recipe.image_url} /> 
                        <Card.Body>
                            <Card.Title>{this.props.recipe.label} - {this.props.recipe.user.name}</Card.Title> 
                            <Card.Text>{this.props.recipe.cuisine}</Card.Text>
                            <Card.Text>{this.props.recipe.meal}</Card.Text>
                            <Card.Text>{this.props.recipe.dish}</Card.Text>
                            {this.state.showSource ? <Card.Text>Source: {this.props.recipe.source}</Card.Text> : <Card.Link href={this.props.recipe.source_url}>Recipe Link</Card.Link>} 
                            <Card.Text>Ingredients: {this.props.recipe.ingredients.split(",").map(ingredient => 
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{ingredient}</ListGroup.Item>
                                </ListGroup>)}</Card.Text>
                            <Card.Text>Diet Labels: {this.props.recipe.diet_labels.split(",").map(diet_label => 
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{diet_label}</ListGroup.Item>
                                </ListGroup>)}</Card.Text>
                            <Card.Text>Cautions: {this.props.recipe.cautions.split(",").map(caution => 
                                <ListGroup variant="flush">
                                    <ListGroup.Item>{caution}</ListGroup.Item>
                                </ListGroup> )}</Card.Text>
                            {this.state.display ? <EditRecipeForm updateRecipe={this.props.updateRecipe} key={this.props.recipe.id} recipe={this.props.recipe}/> : null} 
                            <Card.Text><Button onClick={this.handleDisplay} variant="info">Edit Recipe</Button></Card.Text>
                            <Card.Text><Button variant="danger" onClick={(e) => this.handleDelete(e)} key={this.props.recipe.id}>Delete Recipe</Button></Card.Text> 
                            <Card.Title>Comments</Card.Title>
                            {this.props.recipe.comments.map(comment => <Comment key={comment.id} comment={comment} increaseLikes={this.props.increaseLikes} deleteComment={this.props.deleteComment} />)} 
                            {this.state.commentDisplay ? <CommentForm recipeId={this.props.recipe.id} addComment={this.props.addComment} /> : null} 
                            <Button onClick={this.handleCommentDisplay}>Add a Comment</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default Recipe 