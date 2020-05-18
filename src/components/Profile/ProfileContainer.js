import React, { Component } from 'react'
import './Profile.scss'
import { connect } from 'react-redux'
import Profile from './Profile'
import * as axios from 'axios'
import { setUsersProfile } from './../../redux/profile-reducer'
import { withRouter } from 'react-router'

export class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {

            this.props.setUsersProfile(response.data)

        })
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, { setUsersProfile })(withRouter(ProfileContainer))

