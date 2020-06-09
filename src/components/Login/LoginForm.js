import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, email } from '../../utils/validators/validators'
import { Input } from '../common/FormsControle/FormsControle'
import styles from './LoginForm.module.scss'
import cn from "classnames"

export class LoginForm extends Component {
    render() {
        return (
            <div className={styles.overlay}>
                <form className={styles.form} onSubmit={this.props.handleSubmit} >
                    <div className={styles.con}>
                        <header className={cn(styles.header, styles.headForm)}>
                            <h2>Log In</h2>
                            <p>login here using your username and password</p>
                        </header>
                        <br></br>
                        <div className={styles.fieldSet}>
                            <Field
                                id="txt-input"
                                className={styles.formInput}
                                type="text"
                                validate={[required, email]}
                                component={Input}
                                name="email"
                                typefield="input"
                                placeholder={"Login"}
                                required />
                            <br></br>
                            <Field
                                id="pwd"
                                className={styles.formInput}
                                component={Input}
                                validate={[required]}
                                name="password"
                                typefield="input"
                                placeholder={"password"}
                                type={"password"}
                                required />
                            <br></br>
                            {
                                this.props.error && <div>
                                    <span className={styles.summaryError}>{this.props.error}</span>
                                </div>
                            }
                            <br></br>
                            <button className={cn(styles.btn, styles.logIn)} > Log In </button >
                        </div >
                        <div className={styles.other} >
                            <button className={cn(styles.btn, styles.submits, styles.frgtPass)}> Forgot Password</button >
                            <button className={cn(styles.btn, styles.submits, styles.signUp)}> Sign Up</button >
                        </div >
                    </div >
                </form >
            </div >
        )
    }
}


export default reduxForm({ form: 'login' })(LoginForm)
