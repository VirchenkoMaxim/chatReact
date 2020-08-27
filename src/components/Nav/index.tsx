import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import { green } from '@material-ui/core/colors';
const useStyles = makeStyles({
    root: {
        display: 'block',

    },
    item: {
        width: "100%",
    },
    '@global': {
        '.MuiBottomNavigationAction-wrapper': {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            minHeight: '26px'

        },
        '.MuiBottomNavigationAction-label': {
            paddingLeft: "8px",
            fontSize: "large"

        },
        '.MuiBottomNavigationAction-label.Mui-selected': {
            fontSize: "22px"
        }
    }
});

export const Nav = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <nav>
            <NavLink to="/profile" className="nav-list__item" activeClassName="nav-list__item_active"><HomeIcon />Profile</NavLink>
            <NavLink to="/dialogs" className="nav-list__item" activeClassName="nav-list__item_active"><ChatIcon />Dialogs</NavLink>
            <NavLink to="/users" className="nav-list__item" activeClassName="nav-list__item_active"><PeopleIcon />Users</NavLink>
            <NavLink to="/settings" className="nav-list__item" activeClassName="nav-list__item_active"><SettingsIcon />Settings</NavLink>
        </nav>
    )
}

export default Nav
