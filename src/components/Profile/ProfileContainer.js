import React, { Component } from 'react'
import './Profile.scss'
import { connect } from 'react-redux'
import Profile from './Profile'

import { getProfileUser } from './../../redux/profile-reducer'
import { withRouter, Redirect } from 'react-router'
import { withAuthRedirect } from '../../hok/withAuthRedirect'


export class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getProfileUser(userId)
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
            />
        )
    }
}
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}


export default connect(mapStateToProps, { getProfileUser })(withRouter(AuthRedirectComponent))

