import React from 'react'
import './MyPosts.scss'
import { addPost } from '../../../redux/profile-reducer'
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

const MyPostsContainer = connect(mapStateToProps,
    { addPost })(MyPosts)

export default MyPostsContainer
