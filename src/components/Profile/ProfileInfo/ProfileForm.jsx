import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../common/FormsControle'
import styles from '../styles/ProfileInfo.module.scss'
import ProfileStatus from './Status'
import { Component } from 'react'

export const ProfileForm = () => {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <button className={styles.submitBtn} >Add Changes</button>
                <Field
                    component={Input}
                    name="fullName"
                    typefield={"input"} />
                <ProfileStatus className={styles.profile__info_status}
                    status={this.props.status}
                    updateProfileStatus={this.props.updateProfileStatus}
                />
                <div className={styles.info} >
                    <div>Loooking for a job: </div>
                    <Field
                        component={Input}
                        typefield={"input"}
                        name="lookingForAJob"
                        type={"checkbox"} />
                    <div>About me:</div>
                    <div className={styles.aboutMe}>
                        <Field
                            component={Input}
                            name="aboutMe" />
                    </div>
                    <div>My skils:</div>
                    <div className={styles.mySkils}>
                        <Field
                            className={styles.mySkils}
                            component={Input}
                            name="lookingForAJobDescription" />
                    </div>
                </div>
                <div>
                    <b>Contacts:</b> {Object.entries(this.props.profile.contacts).map(([key, value], index) => {
                        return <div key={index}>{key} : <Field
                            component={Input}
                            typefield={"input"}
                            name={`contacts.${key}`} />
                        </div>
                    })}
                </div>
                {this.props.error && <div>
                    <span >{this.props.error}</span>
                </div>}
            </form>
        )
    }


