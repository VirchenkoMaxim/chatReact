import React from 'react'
import { Posts } from './Posts'
import styles from '../styles/MyPosts.module.scss'
import { PostForm } from './PostForm'
import { Helpers } from './Helpers'


export const MyPosts = () => {

    return (
        < div className={styles.myPosts} >
            <h3 className={styles.myPosts__title}>Posts</h3>
            <PostForm />
            <Helpers />
            <Posts />
        </div >
    )
}