import React from 'react'
import {Posts} from './Posts'
import styles from './MyPosts.module.scss'
import {Form} from './Form'
import addEmoji from '../../../assets/img/addEmoji.png'
import addFile from '../../../assets/img/addFile.png'
import addPhoto from '../../../assets/img/addPhoto.png'
import { useDispatch, useSelector } from 'react-redux'
import {RootState} from '../../../redux'
import { profileSelectors, profileActions } from '../../../redux/profile'

export const MyPosts = ( ) => {
   
   
    return (
        < div className={styles.myPosts} >
            <h3 className={styles.myPosts__title}>Posts</h3>
            {/* <Form onSubmit={addPost} /> */}
            <div className={styles.myPosts__helpers}>
                <img src={addFile} alt="" />
                < img src={addPhoto} alt="" />
                < img src={addEmoji} alt="" />
            </div>
            <Posts/>
        </div >
    )
}

