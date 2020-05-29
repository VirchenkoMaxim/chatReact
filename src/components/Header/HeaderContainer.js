import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer'


export class HeaderContainer extends Component {


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

export default connect(mapStateToProps, { logout })(HeaderContainer)