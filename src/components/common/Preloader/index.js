import preloader from './../../../assets/img/preloader.gif'
import React from 'react'
import styles from './preloader.module.scss'

let Preloader = (props) => {
    return <div className={styles.preloader}><img src={preloader} alt="" /></div>
}
export default Preloader