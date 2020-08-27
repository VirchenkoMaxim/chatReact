import React from 'react'
import './Dialogs.scss'
import { addMessage } from '../../redux/dialog/actions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { dialogSelectors } from '../../redux/dialog'
import Dialogs from './Dialogs'


let mapStateToProps = (state) => {
    return {
        dialogs: dialogSelectors.dialogs(state),
        messages: dialogSelectors.mesages(state)
    }
}


export default compose(
    connect(mapStateToProps, { addMessage }),
)(Dialogs)


