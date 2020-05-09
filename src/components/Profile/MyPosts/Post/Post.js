import React, { Component } from 'react'
import './Post.scss'
export class Post extends Component {
    render() {
        return (
            <div className="post">
                <img className="post__img" src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="" />
                <div className="post__message"> {this.props.message}</div>
                <span className="post__like">Like: {this.props.like}</span>
            </div >
        )
    }
}

export default Post
