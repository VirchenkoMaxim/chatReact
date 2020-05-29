import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../../common/FormsControle/FormsControle'
import { required, maxLength15 } from '../../../utils/validators/validators'

export class MyPostForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field
                    validate={[required, maxLength15]}
                    className="my-posts__area"
                    component={Input}
                    name="newPost"
                    placeholder="Enter your post"
                />
                <button className="my-posts__btn">Add Post</button>
            </form>
        )
    }
}

export default reduxForm({ form: 'newPostForm' })(MyPostForm)
