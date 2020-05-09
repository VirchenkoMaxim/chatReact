import React, { Component } from 'react'

export class Message extends Component {
    render() {

        let messages = this.props.messages.map((item, index) => {
            return <div> {item.message} </div>
        })
        return (
            <div>
                {messages}
            </div>
        )
    }
}

export default Message
