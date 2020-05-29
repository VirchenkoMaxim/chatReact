import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormsControle/FormsControle'
import { required, maxLength100 } from '../../utils/validators/validators'
class DialogsForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field
                    component={Input}
                    validate={[required, maxLength100]}
                    name="newMessageBody"
                    placeholder="Enter your message" />
                <button>Send</button>
            </form>
        )
    }
}

export default reduxForm({ form: 'addMessageForm' })(DialogsForm)
