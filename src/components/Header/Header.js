import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
export class Header extends Component {
    logout = () => this.props.logout()
    render() {
        return (
            <div className="header">
                <div className="header__login-block">
                    {this.props.isAuth ?
                        <div>
                            <div>{this.props.login}</div>
                            <button onClick={this.logout}>Logout</button>
                        </div>
                        : <NavLink to="/login">Login</NavLink>
                    }
                </div>
            </div>
        )
    }
}

export default Header
