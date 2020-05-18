import React, { Component } from 'react'
import Header from './Header'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserData } from '../../redux/auth-reducer'


export class HeaderContainer extends Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let { id, email, login } = response.data.data
                this.props.setUserData({ id, email, login })
            }
        })
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



export default connect(mapStateToProps, { setUserData })(HeaderContainer)