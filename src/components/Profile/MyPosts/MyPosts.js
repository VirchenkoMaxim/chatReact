import React, { Component } from 'react'
import Post from './Post/Post'
import './MyPosts.scss'
import { addPostActionCreator, changeNewPostActionCreator } from '../../../redux/profile-reducer'

export class MyPosts extends Component {
    render() {
        let post = this.props.profilePage.posts.map((item, index) => {
            return <Post key={item.id} message={item.message} like={item.like} />
        })

        let addPost = () => {
            this.props.addPost()
        }
        let changePost = (e) => {
            let text = e.target.value;
            this.props.changePost(text)

        }
        return (
            <div className="my-posts">
                <h3 className="my-posts__title">My Posts</h3>
                <textarea
                    className="my-posts__area"
                    onChange={changePost}
                    value={this.props.profilePage.newPost}
                />
                <button onClick={addPost} className="my-posts__btn">Add Post</button>
                <div className="my-posts__list">
                    {post}
                </div>
            </div>
        )
    }
}

export default MyPosts
