import React, { Component } from 'react'
import './Profile.scss'
import { connect } from 'react-redux'
import Profile from './Profile'

import { getProfileUser, getProfileStatus, updateProfileStatus } from './../../redux/profile-reducer'
import { withRouter, Redirect } from 'react-router'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hok/withAuthRedirect'


export class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId
        } if (!userId) {
            this.props.history.push("/users")
            // return <Redirect />
        }
        this.props.getProfileUser(userId)
        this.props.getProfileStatus(userId)

    }

    render() {
        console.log(this.props)
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateProfileStatus={this.props.updateProfileStatus}

            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth

    }
}

export default compose(
    connect(mapStateToProps, { getProfileUser, getProfileStatus, updateProfileStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)