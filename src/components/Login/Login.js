import React, { Component } from 'react'
import LoginForm from './LoginForm'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'

export class Login extends Component {
    onSubmit = (formData) => {
        console.log(formData.password)
        this.props.login(formData.email, formData.password, formData.rememberMe)
    }
    render() {

        return (
            <div>
                <h1>Login</h1>
                <LoginForm onSubmit={this.onSubmit} />
            </div>

        )
    }
}

export default connect(null, { login })(Login)
