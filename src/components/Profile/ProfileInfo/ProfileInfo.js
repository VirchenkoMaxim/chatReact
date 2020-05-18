import React, { Component } from 'react'
import Preloader from './../../common/Preloader'

export default class ProfileInfo extends Component {
    render() {
        if (!this.props.profile) {
            return <Preloader />
        }

        return (
            <div>
                <img className="profile__img" src={this.props.profile.photos.large} alt="" />
            </div>
        )
    }
}


