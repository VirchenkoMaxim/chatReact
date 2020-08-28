import React, { FC, HTMLAttributes } from 'react'
import styles from '../styles/ProfileInfo.module.scss'
import { Status } from './Status'
import { Formik, Form, Field } from 'formik'
import { Checkbox, FormControlLabel, TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    fullName: {
        width: '80%',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

type InitialValues = {
    fullName: string
    lookingForAJob: boolean
    aboutMe: string
    lookingForAJobDescription: string
}
type MyProps = {
    status: string
    updateProfileStatus: boolean
}
type Props = MyProps
export const ProfileForm: FC<Props> = ({ status, updateProfileStatus }) => {
    const classes = useStyles();
    const initialValues: InitialValues = {
        fullName: "",
        lookingForAJob: false,
        aboutMe: "",
        lookingForAJobDescription: ""
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));

            }}
        >
            <Form >
                <button className={styles.profileForm__btn} >Add Changes</button>
                <Field
                    className={classes.fullName}
                    name="fullName"
                    as={TextField}
                    autoComplete="off"
                    autocorrect="off"
                    autocapitalize="none"
                    fullWidth
                />
                <Status
                    status={status}
                    updateProfileStatus={updateProfileStatus}
                />
                <Field
                    name="lookingForAJob"
                    render={({ field }: any) => (
                        <FormControlLabel
                            control={<Checkbox  {...field} size="small" />}
                            label="lookingForAJob"
                        />
                    )} />
                <label htmlFor="firstName">About Me</label>
                <Field
                    type="text"
                    name="aboutMe"
                    component="textarea"

                />
                <label htmlFor="firstName">My Skills</label>
                <Field
                    type="text"
                    name="lookingForAJobDescription"
                    component="textarea"
                />
            </Form>
        </Formik>
    );
};

{/* <form onSubmit={this.props.handleSubmit}>
    <button className={styles.submitBtn} >Add Changes</button>
    <Field
        component={Input}
        name="fullName"
        typefield={"input"} />
   
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
} */}


