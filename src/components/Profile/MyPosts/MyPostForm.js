import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControle/FormsControle'
import styles from './MyPosts.module.scss'
export class MyPostForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field
                    className={styles.myPosts__area}
                    component={Input}
                    name="newPost"
                    placeholder="Enter your post"
                />
                <button className={styles.myPosts__btn}>Add Post</button>
            </form>
        )
    }
}

export default reduxForm({ form: 'newPostForm' })(MyPostForm)
