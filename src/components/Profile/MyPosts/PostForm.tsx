import React from 'react'
import styles from '../styles/MyPosts.module.scss'
import { Formik, Form, Field } from 'formik'
import { profileActions } from '../../../redux/profile'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import '../styles/MyPosts.module.scss'

type InitialValues = {
    post: string
}
export const PostForm = () => {
    const dispatch = useDispatch()
    const initialValues: InitialValues = {
        post: "",
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values)
                dispatch(profileActions.addPost(values.post));
            }}
        >
            <Form>
                <Field
                    className={styles.form__area}
                    name="post"
                    type="text"
                    component="textarea"
                />
                <button type="submit" className={styles.form__btn} >Add</button>
            </Form>
        </Formik>
    )
}

