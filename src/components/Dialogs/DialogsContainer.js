import React, { Component } from 'react'
import './Dialogs.scss'
import { addMessageActionCreator, changeNewMessageActionCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { withAuthRedirect } from '../../hok/withAuthRedirect'


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer

