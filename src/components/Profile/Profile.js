import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import styles from './Profile.module.scss'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileImg from './ProfileInfo/ProfileImg'
import Preloader from '../common/Preloader'
import headImg from "../../assets/img/profile-img.jpg"
const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={styles.profile}>
            <img className={styles.profile__headImg} src={headImg} alt="" />
            <ProfileImg {...props} />
            <ProfileInfo  {...props} />
            <div></div>
            <div className={styles.profile__myPosts}><MyPostsContainer /></div>
        </div>
    )

}

export default Profile
