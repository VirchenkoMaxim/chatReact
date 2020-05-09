import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './DialogsItem.scss'
export class DialogsItem extends Component {
    render() {

        let dialogsItem = this.props.dialogs.map((item, index) => {
            return <NavLink className="dialogs-items__item" key={index} to="/dialogs/"
            //  + (index + 1)}
            >{item.name}</NavLink>
        })
        return (
            <div className="dialogs-items">
                {dialogsItem}
            </div>
        )
    }
}

export default DialogsItem
