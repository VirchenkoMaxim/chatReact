import React, { Component } from 'react'
import Post from './Post/Post'
import './MyPosts.scss'
import { addPostActionCreator, changeNewPostActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// export class MyPostsContainer extends Component {
//     render() {
//     }
// }
let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        changePost: (text) => {
            dispatch(changeNewPostActionCreator(text))

        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
