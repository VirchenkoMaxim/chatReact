import React from 'react'
import styles from '../styles/MyPosts.module.scss'
import addEmoji from '../../../assets/img/addEmoji.png'
import addFile from '../../../assets/img/addFile.png'
import addPhoto from '../../../assets/img/addPhoto.png'
interface Props { }

export const Helpers = (props: Props) => {
    const { } = props
    return (
        <div className={styles.helpers}>
            <img src={addFile} alt="" />
            <img src={addPhoto} alt="" />
            <img src={addEmoji} alt="" />
        </div>
    )
}



