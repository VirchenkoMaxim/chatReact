import React, { Component } from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { requestUsers, unfollow, follow, pageChange } from '../../redux/users-reducer'
import { getPageSize, getUsers, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'
import Preloader from '../common/Preloader';
import { compose } from 'redux';

class UsersContainerAPI extends Component {

    componentDidMount() {
        this.props.requestUsers(this.props.curentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.pageChange(pageNumber, this.props.pageSize)
    }

    render() {
        console.log("render")
        if (this.props.isFetching) {
            return <Preloader />
        }
        return (<>
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            /></>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect(mapStateToProps, { follow, unfollow, requestUsers, pageChange }),
)(UsersContainerAPI)


