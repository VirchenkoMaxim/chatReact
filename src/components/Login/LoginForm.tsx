import React from 'react';
import { Formik, Field, Form, FormikProps, FieldProps } from 'formik';
import { useDispatch } from 'react-redux';
import { TextField, makeStyles, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { authActions } from '../../redux/auth';
import { RootState } from '../../redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import styles from './LoginForm.module.scss'

const useStyles = makeStyles((theme) => ({
    input: {
        '& .MuiFormControl-root': {
            marginBottom: "36px"
        },
        '& .MuiFormLabel-root': {
            fontSize: "16px",
        },
        '& .MuiTypography-body1': {
            lineHeight: "16px"
        }
    },
}));

interface InitialValues {
    email: string
    password: string
    rememberMe: boolean
}
type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

interface MyFieldProps extends FieldProps {
    name: string
    value: boolean
}

export const LoginForm: React.SFC<FormikProps<InitialValues>> = (props) => {
    const dispatch: AppDispatch = useDispatch();
    const classes = useStyles();
    const initialValues: InitialValues = {
        email: "",
        password: "",
        rememberMe: false
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values)
                dispatch(authActions.login(values.email, values.password, false));
            }}
        >

            <Form

                className={`${classes.input} + ${styles.form}`}>
                <Field
                    className={styles.input}
                    name="email"
                    as={TextField}
                    label="Email..."
                    variant="outlined"
                />
                <Field
                    className={styles.input}
                    name="password"
                    type="password"
                    as={TextField}
                    label="Password..."
                    variant="outlined"
                />
                <div className={styles.remember}>
                    <Field
                        name="rememberMe"
                        render={({ field }: MyFieldProps) => (
                            <FormControlLabel
                                control={<Checkbox  {...field} size="small" />}
                                label="Remember Me"
                            />
                        )} />
                    <a href="google">Forgot Password?</a>
                </div>

                <Button type="submit" variant="contained" color="primary">Login</Button>
            </Form>

        </Formik>
    );
};




