import React, { Component } from 'react'
import './Dialogs.scss'
import Message from './Message/Message'
import DialogsItem from './DialogsItem/DialogsItem'
import DialogsForm from './DialogForm'

export class Dialogs extends Component {
    render() {
        let addMessage = (value) => {
            this.props.addMessage(value.newMessageBody)
        }
        return (
            <div className="dialogs">
                <DialogsItem dialogs={this.props.dialogsPage.dialogs} />
                <div>
                    <Message messages={this.props.dialogsPage.messages} />
                    <DialogsForm onSubmit={addMessage} />
                </div>

            </div>
        )
    }
}

export default Dialogs
