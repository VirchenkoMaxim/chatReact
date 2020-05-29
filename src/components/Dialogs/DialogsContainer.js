import React from 'react'
import './Dialogs.scss'
import { addMessage } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

import { withAuthRedirect } from '../../hok/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}


export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Dialogs)


