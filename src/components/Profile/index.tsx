import { RootState } from '../../redux'
import React, { useEffect } from 'react'
import styles from './styles/Profile.module.scss'
import { useSelector, useDispatch } from 'react-redux'

import { profileActions } from '../../redux/profile'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { profileSelectors } from '../../redux/profile'

import {MyPosts} from './MyPosts'

import { ProfileImg } from './ProfileImg'
import headImg from "../../assets/img/profile-img.jpg"
import Preloader from '../common/Preloader'
import { ProfileInfo } from './ProfileInfo';


type ownProps = RouteComponentProps<{ userId?: string | undefined }>
type Props = ownProps

export const Profile = (props: Props) => {
    const dispatch = useDispatch();
    let profile = useSelector((state: RootState) => profileSelectors.profile(state))
    let status = useSelector((state: RootState) => profileSelectors.status(state))
    let autorizedUserId = useSelector((state: RootState) => profileSelectors.autorizedUserId(state))
    let isAuth = useSelector((state: RootState) => profileSelectors.isAuth(state))
    let isError = useSelector((state: RootState) => profileSelectors.isError(state))
    let userId = props.match.params.userId;
    if (!userId) {
        userId = autorizedUserId
    }
    if (!autorizedUserId) {
        props.history.push("/login")
    }
    useEffect(() => {
        dispatch(profileActions.getProfileUser(userId))
        dispatch(profileActions.getProfileStatus(userId))
    }, [])
    if (!profile) {
        return <Preloader />
    }
    return (
        <div className={styles.profile}>
            <img className={styles.profile__headImg} src={headImg} alt="" />
            <ProfileImg
                isOwner={!props.match.params.userId}
                profilePhoto={profile.photos.large} />
            <ProfileInfo
                isOwner={!props.match.params.userId}
                profile={profile}
                status={status}
                isError={isError} />
            <div></div>
            {/* <div className={styles.profile__myPosts}><MyPosts
                isOwner={!props.match.params.userId}
                profile={profile}
                status={status}
                isError={isError}
            /></div> */}
        </div>
    )
}

export default withRouter(Profile)