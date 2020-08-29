import React from 'react'
import styles from '../styles/MyPosts.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux'
import { profileActions, profileSelectors } from '../../../redux/profile'
export const Posts = (props: any) => {
    let posts = useSelector((state: RootState) => [...profileSelectors.posts(state)])
    const dispatch = useDispatch();
    let addPost = (value: string) => {
        dispatch(profileActions.addPost("j"))
    }
    let post = posts.reverse().map((item, index) => {
        return (
            <div key={index} className={styles.posts}>
                <img className={styles.posts__img} src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="" />
                <div className={styles.posts__message}> {item.message}</div>
                <span className={styles.posts__like}>Like: {item.like}</span>
            </div >
        )
    })
    return (
        <>
            {post}
        </>
    )
}
