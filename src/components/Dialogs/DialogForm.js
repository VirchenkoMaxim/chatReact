import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
class DialogsForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                {/* <Field
                    component={Input}
                    name="newMessageBody"
                    placeholder="Enter your message" />
                <button>Send</button> */}
            </form>
        )
    }
}

export default DialogsForm