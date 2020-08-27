import React, { FormEvent, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Menu, MenuItem, FormGroup, FormControlLabel, Switch, Avatar } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authActions } from '../../redux/auth'
import styles from './Header.module.scss'
import { RootState } from '../../redux';
import { Link, Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        minHeight: 60,

    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {

    const login = useSelector((state: RootState) => authSelectors.getLogin(state));
    const isAuth = useSelector((state: RootState) => authSelectors.getIsAuth(state));
    const dispatch = useDispatch();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const setLogout = () => {
        dispatch(authActions.logout());

    }
    return (
        <header>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {isAuth ? <div ><Link to="/profile" className={styles.inherit}>{login}</Link></div> : "MyChat"}
                    </Typography>
                    {isAuth ?
                        <div>
                            <MenuItem onClick={setLogout}>Logout</MenuItem>
                        </div>
                        : <div>
                            <MenuItem ><Link to="/login" className={styles.inherit}>Login</Link></MenuItem>
                        </div>
                    }
                    {/* <Avatar alt="Remy Sharp" src={avatar} /> */}
                    <IconButton color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </header>
    )

}

export default Header
