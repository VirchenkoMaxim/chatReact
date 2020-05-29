import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, minLength10, email } from '../../utils/validators/validators'
import { Input } from '../common/FormsControle/FormsControle'

export class LoginForm extends Component {
    render() {

        return (
            <form onSubmit={this.props.handleSubmit} >
                <div>
                    <Field
                        validate={[required, email]}
                        component={Input}
                        name="email"
                        typeField="input"
                        placeholder={"Login"} />
                </div>
                <div>
                    <Field
                        component={Input}
                        validate={[required]}
                        name="password"
                        typeField="input"
                        placeholder={"password"}
                        type={"password"} />
                </div>
                <div>
                    <Field component="input" name={"rememberMe"} type={"checkbox"} /> rember me
                </div>
                {this.props.error && <div>
                    <span className="summaryError">{this.props.error}</span>
                </div>}
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}


export default reduxForm({ form: 'login' })(LoginForm)

