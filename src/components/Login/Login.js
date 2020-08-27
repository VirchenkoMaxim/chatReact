import React, { Component } from 'react'
import { LoginForm } from './LoginForm'
import { useSelector, useDispatch } from 'react-redux'
import styles from './LoginForm.module.scss'
import { Redirect, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { authActions } from '../../redux/auth'




const Login = props => {
    const isAuth = useSelector(state => state.auth.isAuth)
    const dispatch = useDispatch()

    let onSubmit = (formData) => {
        dispatch(authActions.login(formData.email, formData.password, formData.rememberMe))
    }
    if (isAuth) {
        return <Redirect to="/profile" />
    }

    return (
        <div className={styles.login}>
            <LoginForm />
        </div>

    )
}

export default compose(
    withRouter,
)(Login)
