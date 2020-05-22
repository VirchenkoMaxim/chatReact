import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
export class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="header">
                <div className="header__login-block">
                    {this.props.isAuth ?
                        this.props.login
                        : <NavLink to="/login">Login</NavLink>
                    }
                </div>
            </div>
        )
    }
}

export default Header
