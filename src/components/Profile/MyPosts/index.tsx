import React from 'react'
import { Posts } from './Posts'
import styles from '../styles/MyPosts.module.scss'
import { PostForm } from './PostForm'
import addEmoji from '../../../assets/img/addEmoji.png'
import addFile from '../../../assets/img/addFile.png'
import addPhoto from '../../../assets/img/addPhoto.png'


export const MyPosts = () => {

    return (
        < div className={styles.myPosts} >
            <h3 className={styles.myPosts__title}>Posts</h3>
            <PostForm />
            <div className={styles.myPosts__helpers}>
                <img src={addFile} alt="" />
                <img src={addPhoto} alt="" />
                <img src={addEmoji} alt="" />
            </div>
            <Posts />
        </div >
    )
}