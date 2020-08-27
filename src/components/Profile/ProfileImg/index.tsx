import React, { useState, ChangeEvent, } from 'react'
import defaultUser from '../../../assets/img/defaultUser.png'
import styles from '../styles/ProfileImg.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { profileActions, profileSelectors } from '../../../redux/profile'
import { RootState } from '../../../redux'

type Props = {
    isOwner: boolean
    profilePhoto: string
}

export const ProfileImg = (props: Props) => {
    const dispatch = useDispatch();
    let [editMode, setEditMode] = useState(false);
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            dispatch(profileActions.savePhoto(e.target.files[0]))
        }
        setEditMode(false)
    }
    let toogleEditmode = () => {
        setEditMode(!editMode)
    }

    return (
        <div className={styles.photo}>
            <img className={styles.photo__img}
                onDoubleClick={toogleEditmode}
                src={props.profilePhoto ? props.profilePhoto : defaultUser}
                alt="profile" />
            {props.isOwner && editMode && <input className={styles.photo__addPhoto} type="file" onChange={onMainPhotoSelected} id="file" />}
        </div>
    )
}




