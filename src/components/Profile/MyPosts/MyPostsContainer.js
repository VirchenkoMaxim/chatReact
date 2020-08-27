import React from 'react'
// import './MyPosts.scss'
import { addPost } from '../../../redux/profile/actions'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import { profileSelectors } from '../../../redux/profile';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        posts: profileSelectors.posts(state)
    }
}

const MyPostsContainer = connect(mapStateToProps,
    { addPost })(MyPosts)

export default MyPostsContainer
