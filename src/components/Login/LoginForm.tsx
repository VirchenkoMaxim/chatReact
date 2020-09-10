import React from "react";
import { Formik, Field, Form, FormikProps, FieldProps } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import {
  makeStyles,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@material-ui/core";
import { authActions } from "../../redux/auth";
import { RootState } from "../../redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import styles from "./LoginForm.module.scss";

const useStyles = makeStyles((theme) => ({
  input: {
    "& .MuiFormControl-root": {
      height: "86px",
    },
    "& .MuiFormLabel-root": {
      fontSize: "16px",
    },
    "& .MuiTypography-body1": {
      lineHeight: "16px",
    },
  },
  field_error: {
    "& .MuiFormHelperText-root": {
      color: "red",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
  },
}));

interface InitialValues {
  email: string;
  password: string;
  rememberMe: boolean;
}
type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

interface MyFieldProps extends FieldProps {
  name: string;
  value: boolean;
}

export const LoginForm: React.SFC<FormikProps<InitialValues>> = (props) => {
  const dispatch: AppDispatch = useDispatch();
  const classes = useStyles();
  const initialValues: InitialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        dispatch(authActions.login(values.email, values.password, false));
      }}
    >
      {({ errors, touched }) => (
        <Form className={`${classes.input} + ${styles.form}`}>
          <Field
            name="email"
            as={TextField}
            label="Email..."
            variant="outlined"
            className={errors.email && touched.email && classes.field_error}
            helperText={errors.email && touched.email && errors.email}
          />
          <Field
            name="password"
            type="password"
            as={TextField}
            label="Password..."
            variant="outlined"
            className={
              errors.password && touched.password && classes.field_error
            }
            helperText={errors.password && touched.password && errors.password}
          />
          <div className={styles.remember}>
            <Field
              name="rememberMe"
              render={({ field }: MyFieldProps) => (
                <FormControlLabel
                  control={<Checkbox {...field} size="small" />}
                  label="Remember Me"
                />
              )}
            />
            <a href="google">Forgot Password?</a>
          </div>

          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
