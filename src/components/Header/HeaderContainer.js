import React, { Component } from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { getUserData } from '../../redux/auth-reducer'


export class HeaderContainer extends Component {
    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}
let mapStateToProps = (props) => ({
    login: props.auth.login,
    isAuth: props.auth.isAuth
})

export default connect(mapStateToProps, { getUserData })(HeaderContainer)