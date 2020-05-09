import React, { Component } from 'react'
import './Dialogs.scss'
import { addMessageActionCreator, changeNewMessageActionCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        changeNewMessage: (body) => {
            dispatch(changeNewMessageActionCreator(body))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
