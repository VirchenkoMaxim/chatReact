import React, { Component } from 'react'
import { LoginForm } from './LoginForm'
import { useSelector, useDispatch } from 'react-redux'
import styles from './LoginForm.module.scss'
import { Redirect, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { authActions } from '../../redux/auth'
import { RootState } from '../../redux'




const Login = (props) => {
    const isAuth = useSelector((state) => state.auth.isAuth)
    if (isAuth) {
        return <Redirect to="/profile" />
    }
    return (
        <div className={styles.login} >
            <LoginForm />
        </div>
    )
}

export default compose(
    withRouter,
)(Login)