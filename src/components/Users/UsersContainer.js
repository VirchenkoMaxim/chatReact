import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as axios from 'axios'
import Users from './Users';
import { unfollow, follow, setUsers, curentPage, totalCount, toogleIsFetching } from '../../redux/users-reducer'
import Preloader from '../common/Preloader';




class UsersContainerAPI extends Component {

    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.curentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.totalCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching(true)
        this.props.curentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, curentPage, totalCount, toogleIsFetching })(UsersContainerAPI)

