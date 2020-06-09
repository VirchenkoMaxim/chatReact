import React, { PureComponent } from 'react'
// import styles from './MyPosts.module.scss'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfileUser, getProfileStatus, updateProfileStatus, savePhoto, getProfileData } from './../../redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux'


export class ProfileContainer extends PureComponent {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId || this.props.history.push("/login")
        }
        this.props.getProfileUser(userId)
        this.props.getProfileStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId)
            this.refreshProfile()
    }

    render() {
        return (
            <Profile
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateProfileStatus={this.props.updateProfileStatus}
                savePhoto={this.props.savePhoto}
                getProfileData={this.props.getProfileData}
                isError={this.props.isError}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        autorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
        isError: state.profilePage.isError

    }
}

export default compose(
    connect(mapStateToProps, { getProfileUser, getProfileStatus, updateProfileStatus, savePhoto, getProfileData }),
    withRouter,
)(ProfileContainer)