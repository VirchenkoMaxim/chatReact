import React, { useState, useEffect } from 'react'
import ProfileInfoForm from './ProfileInfoForm'
import ProfileStatus from './ProfileStatus'
import styles from './ProfileInfo.module.scss'
function ProfileInfo(props) {

    let [editMode, setEditMode] = useState(false);

    let onSubmit = (data) => {
        props.getProfileData(data)
        !props.isError && setEditMode(false)
    }
    const activateEditMode = () => {
        setEditMode(!editMode)
    }

    return (
        <div>
            {!editMode
                ? <div>
                    <button onClick={activateEditMode} className={styles.submitBtn}>Edit</button>
                    <div className={styles.fullName}>{props.profile.fullName}</div>
                    <ProfileStatus className={styles.status}
                        status={props.status}
                        updateProfileStatus={props.updateProfileStatus}
                    />
                    <div className={styles.info} >
                        <div>Looking for job:</div>
                        <div >{props.profile.lookingForAJob ? "Yes" : "No"}</div>
                        <div>About me:</div>
                        <div >{props.profile.aboutMe}</div>
                        <div> My skils:</div>
                        <div >{props.profile.lookingForAJobDescription}</div>
                        <div className={styles.contacts}>Contacts:</div>
                        <div className={styles.contacts__items}>
                            {Object.entries(props.profile.contacts).map(([key, value], index) => {
                                return value && <div key={index}><a href={value}>{value}</a></div>
                            })}
                        </div>
                    </div>
                </div>
                : <ProfileInfoForm
                    initialValues={props.profile}
                    onSubmit={onSubmit}
                    status={props.status}
                    updateProfileStatus={props.updateProfileStatus}
                    profile={props.profile}
                />}
        </div>
    )
}

export default ProfileInfo
