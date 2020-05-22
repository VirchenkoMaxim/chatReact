import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as axios from 'axios'
import Users from './Users';
import { getUsers, unfollow, follow, setCurentPage, pageChange, toggleFollowingInProgress } from '../../redux/users-reducer'
import Preloader from '../common/Preloader';

import { usersAPI } from '../../api/api'



class UsersContainerAPI extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.curentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.pageChange(pageNumber, this.props.pageSize)
    }

    render() {


        return (<>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                curentPage={this.props.curentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            /></>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        curentPage: state.usersPage.curentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow,
    getUsers, pageChange
})(UsersContainerAPI)

