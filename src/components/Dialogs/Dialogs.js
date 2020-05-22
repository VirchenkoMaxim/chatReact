import React, { Component } from 'react'
import './Dialogs.scss'

import Message from './Message/Message'
import DialogsItem from './DialogsItem/DialogsItem'
import { Redirect } from 'react-router'

export class Dialogs extends Component {
    render() {
        let addMessage = () => {
            this.props.addMessage()
        }

        let changeNewMessage = (e) => {
            let text = e.target.value
            this.props.changeNewMessage(text)
        }
        return (
            <div className="dialogs">
                <DialogsItem dialogs={this.props.dialogsPage.dialogs} />
                <div>
                    <Message messages={this.props.dialogsPage.messages} />
                    <div>
                        <textarea
                            value={this.props.dialogsPage.newMessage}
                            onChange={changeNewMessage}
                            placeholder="Enter your message"></textarea>
                        <button onClick={addMessage} >Send</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default Dialogs
