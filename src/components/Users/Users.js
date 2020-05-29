import React, { Component } from 'react'
import './Users.scss'
import userPhoto from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator/Paginator';



class Users extends Component {
    state = {
        portionNumber: 1
    }

    render() {
        let onPortionNext = () => {
            this.setState({ portionNumber: this.state.portionNumber + 1 })
        }
        let onPortionPrev = () => {
            this.setState({ portionNumber: this.state.portionNumber - 1 })
        }
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <Paginator
                    portionNumber={this.state.portionNumber}
                    onPortionNext={onPortionNext}
                    onPortionPrev={onPortionPrev}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.props.onPageChanged}
                    currentPage={this.props.currentPage}
                />
                {this.props.users.map(item =>
                    <div key={item.id} className="user-container">
                        <NavLink to={'/profile/' + item.id}>
                            <img className="user-container__img" src={
                                item.photos.small != null ? item.photos.small : userPhoto
                            } alt="" />
                        </NavLink>
                        {item.followed
                            ? <button disabled={this.props.followingInProgress.some(id => id === item.id)}
                                onClick={() => { this.props.unfollow(item.id) }}>Unfollow</button>
                            : <button disabled={this.props.followingInProgress.some(id => id === item.id)}
                                onClick={() => { this.props.follow(item.id) }}>Follow</button>}
                        <div className="user-container__info">
                            <div>{item.name}</div>
                            <div>{item.status}</div>
                            {/* <div>{item.location.country}</div> */}
                            {/* <div>{item.location.city}</div> */}
                        </div>
                    </div>
                )
                }
                <Paginator
                    portionNumber={this.state.portionNumber}
                    onPortionNext={onPortionNext}
                    onPortionPrev={onPortionPrev}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.props.onPageChanged}
                    currentPage={this.props.currentPage}
                />
            </div>
        )
    }
}

export default Users
