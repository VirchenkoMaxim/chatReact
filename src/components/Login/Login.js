import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import styles from './LoginForm.module.scss'
import { Redirect, withRouter } from 'react-router-dom'
import { compose } from 'redux'




export class Login extends Component {

    render() {
        let onSubmit = (formData) => {
            this.props.login(formData.email, formData.password, formData.rememberMe)
        }
        if (this.props.isAuth) {
            return <Redirect to="/profile" />
        }
        let Click = (e) => {
            if (e.target.id === "redirectFromLogin") {
                this.props.history.push("/users")
            }

        }
        return (
            <div onClick={Click} id="redirectFromLogin" className={styles.body}>
                <LoginForm onSubmit={onSubmit} />
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth

    }
}

export default compose(
    connect(mapStateToProps, { login }),
    withRouter,
)(Login)
