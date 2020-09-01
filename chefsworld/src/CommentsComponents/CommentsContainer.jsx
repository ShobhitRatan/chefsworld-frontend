import React from 'react' 
import Comment from './Comment' 

const CommentsContainer = (props) => {
    return (
        <>
            {props.comments.map(comment => <Comment comment={comment} key={comment.id} increaseLikes={props.increaseLikes}  deleteComment={props.deleteComment} />)} 
        </>
    )
}

export default CommentsContainer