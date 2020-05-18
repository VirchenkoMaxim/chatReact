import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

export class Nav extends Component {
    render() {
        return (
            < div className="nav" >
                <nav className="nav-list">
                    <NavLink to="/profile" className="nav-list__item" activeClassName="nav-list__item_active">Profile</NavLink>
                    <NavLink to="/dialogs" className="nav-list__item" activeClassName="nav-list__item_active">Dialogs</NavLink>
                    <NavLink to="/users" className="nav-list__item" activeClassName="nav-list__item_active">Users</NavLink>
                </nav>
            </div >
        )
    }
}

export default Nav
