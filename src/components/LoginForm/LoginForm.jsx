import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operation";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import css from "./LoginForm.module.css";

const StyledForm = styled(Form)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "80px",
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1),
  width: "400px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const FormTitle = styled("h1")({
  marginBottom: "20px",
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const logData = { email: values.email, password: values.password };
    dispatch(logIn(logData))
      .unwrap()
      .then(() => {
        toast.success("Successfully login!");
      })
      .catch(() => {
        toast.error("Error!");
      });
    actions.resetForm();
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Writing a correct email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "The password must be at least 8 characters long")
      .required("Password is required"),
  });

  return (
    <>
      <Toaster />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <FormTitle className={css.heading}>Login</FormTitle>
            <Field
              as={StyledTextField}
              type="email"
              label="Email"
              name="email"
              placeholder="Email"
              error={errors.email && touched.email}
              helperText={touched.email && errors.email}
              InputProps={{
                endAdornment: <EmailIcon />,
              }}
            />
            <Field
              as={StyledTextField}
              type="password"
              label="Password"
              name="password"
              placeholder="Password"
              error={errors.password && touched.password}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: <LockIcon />,
              }}
            />
            <StyledButton type="submit" variant="contained" color="primary">
              Log In
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </>
  );
};
