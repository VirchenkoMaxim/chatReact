import React, { Component } from 'react'
import './Users.scss'
import userPhoto from '../../assets/img/user.png'
import { NavLink } from 'react-router-dom';
import * as Axios from 'axios';

class Users extends Component {

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>
                    {pages.map(item => {
                        return (<span onClick={() => this.props.onPageChanged(item)} className={this.props.curentPage === item && "page-count"}>{item}</span>)

                    })}
                </div>
                {
                    this.props.users.map(item =>
                        <div key={item.id} className="user-container">
                            <NavLink to={'/profile/' + item.id}>
                                <img className="user-container__img" src={
                                    item.photos.small != null ? item.photos.small : userPhoto
                                } alt="" />
                            </NavLink>
                            {item.followed
                                ? <button onClick={() => {
                                    Axios.post(`https://social-network.samuraijs.com/api/1.0/users/follow/${item.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "b288811b-4786-4bd7-97a1-4a02f16c6d07"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                this.props.follow(item.id)
                                            }
                                        })
                                }}>Follow</button>
                                : <button onClick={() => {
                                    Axios.post(`https://social-network.samuraijs.com/api/1.0/users/follow/${item.id}`, null, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "b288811b-4786-4bd7-97a1-4a02f16c6d07"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                this.props.unfollow(item.id)
                                            }
                                        })
                                }}>Unfollow</button>}
                            <div className="user-container__info">
                                <div>{item.name}</div>
                                <div>{item.status}</div>
                                {/* <div>{item.location.country}</div> */}
                                {/* <div>{item.location.city}</div> */}
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

export default Users
