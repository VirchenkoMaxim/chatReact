import React, { useState } from 'react'
import defaultUser from '../../../assets/img/defaultUser.png'
import styles from './ProfileImg.module.scss'



const ProfileImg = (props) => {
    let [editMode, setEditMode] = useState(false);
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
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
                src={props.profile.photos.large ? props.profile.photos.large : defaultUser}
                alt="" />
            {props.isOwner && editMode && <input className={styles.photo__addPhoto} type="file" onChange={onMainPhotoSelected} id="file" />}
        </div>
    )
}


export default ProfileImg

