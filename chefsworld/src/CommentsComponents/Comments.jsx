import React, {Component} from 'react'
import axios from 'axios' 
import CommentsContainer from './CommentsContainer'
import CommentForm from './CommentForm' 
const comments_url = "http://localhost:4000/comments" 

class Comments extends Component {
    state = {
        comments: [] 
    }

    componentDidMount() {
        this.receivedData() 
    }

    receivedData = () => {
        axios.get(comments_url)
        .then(res => {
            const data = res.data; 
            this.setState({
                comments: data 
            })
        })
    } 

    addComment = (comment) => {
        fetch(comments_url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json', 

            },
            body: JSON.stringify(comment) 
        })
        .then(res => res.json()) 
        .then(json => {
            const newComments = [...this.state.comments, json] 
            this.setState({
                comments: newComments 
            })
        })
    }

    increaseLikes = (comment) => {
        fetch(`${comments_url}/${comment.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json' 
            },
            body: JSON.stringify({
                likes: comments.likes + 1
            })
        })
        .then(res => {
            const newComments = this.state.comments.map(checkComment => {
                const newComment = {...checkComment} 
                if (checkComment === comment) {
                    newComment.likes += 1 
                }
                return newComment 
            })
            this.setState({
                comments: newComments 
            })
        })
    }

    

    deleteComment = (id) => {
        fetch(`${comments_url}/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            const newComments = this.state.comments.filter(comment => comment.id !== id) 
            this.setState({
                comments: newComments 
            })
        })
    }
    
    render() {
        return (
            <div>
                <CommentsContainer increaseLikes={this.increaseLikes}  deleteComment={this.deleteComment} comments={this.state.comments} /> 
                <CommentForm addComment={this.addComment} /> 
            </div>
        )
    }
}

export default Comments 