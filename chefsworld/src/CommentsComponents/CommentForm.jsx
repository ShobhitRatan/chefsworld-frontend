import React, {Component} from 'react' 
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 

class CommentForm extends Component {
    state = {
        content: "",
        likes: 0 
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        this.props.addComment({
            user_id: this.props.userId,
            recipe_id: this.props.recipeId, 
            content: e.target.content.value, 
            likes: e.target.likes.value 
        }) 
        this.setState({
            content: "",
            likes: 0 
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        const {content, likes} = this.state 
        return (
            <Form onSubmit={(e) => this.handleSubmit(e)}>
                <Form.Group controlId="formGroupContent">
                    <Form.Label>Content</Form.Label>
                    <Form.Control onChange={this.handleChange} as="textarea" type="text" placeholder="Please enter your comment" rows={10} value={content} name="content" /> 
                </Form.Group>
                <Form.Group controlId="formGroupLikes">
                    <Form.Label>Likes</Form.Label>
                    <Form.Control onChange={this.handleChange} type="number" value={likes} name="likes" /> 
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        )
    }
}

export default CommentForm 