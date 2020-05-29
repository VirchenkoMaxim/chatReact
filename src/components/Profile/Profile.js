import React, { Component } from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import './Profile.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'

export class Profile extends Component {
    render() {

        return (
            <div className="profile">
                <ProfileInfo {...this.props} />
                <MyPostsContainer />

            </div>
        )
    }
}

export default Profile
