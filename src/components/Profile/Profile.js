import React, { Component } from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import './Profile.scss'
export class Profile extends Component {
    render() {

        return (
            <div className="profile">
                <img className="profile__img" src="https://s2.best-wallpaper.net/wallpaper/1920x1080/1209/Sea-sky-clouds-beach-water-flow-waterfall-beautiful-scenery_1920x1080.jpg" alt="" />
                <MyPostsContainer
                    store={this.props.store}

                />
            </div>
        )
    }
}

export default Profile
