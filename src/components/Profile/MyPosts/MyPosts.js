import React from 'react'
import Post from './Post/Post'
import styles from './MyPosts.module.scss'
import MyPostForm from './MyPostForm'
import addEmoji from '../../../assets/img/addEmoji.png'
import addFile from '../../../assets/img/addFile.png'
import addPhoto from '../../../assets/img/addPhoto.png'

const MyPosts = (props) => {
    let copy = [...props.posts];
    let post = copy.reverse().map((item, index) => {
        return <Post key={item.id} message={item.message} like={item.like} />
    })
    let addPost = (value) => {
        props.addPost(value.newPost)

    }

    return (
        < div className={styles.myPosts} >
            <h3 className={styles.myPosts__title}>Posts</h3>
            <MyPostForm onSubmit={addPost} />
            <div className={styles.myPosts__helpers}>
                <img src={addFile} alt="" />
                < img src={addPhoto} alt="" />
                < img src={addEmoji} alt="" />
            </div>
            <div className={styles.myPosts__list}>
                {post}
            </div>
        </div >
    )
}

export default MyPosts
