import React, { Component } from 'react'
import Post from './Post/Post'
import './MyPosts.scss'
import MyPostForm from './MyPostForm'

export class MyPosts extends Component {
    render() {
        let post = this.props.profilePage.posts.map((item, index) => {
            return <Post key={item.id} message={item.message} like={item.like} />
        })

        let addPost = (value) => {
            this.props.addPost(value.newPost)
        }

        return (
            <div className="my-posts">
                <h3 className="my-posts__title">My Posts</h3>
                <MyPostForm onSubmit={addPost} />
                <div className="my-posts__list">
                    {post}
                </div>
            </div>
        )
    }
}

export default MyPosts
