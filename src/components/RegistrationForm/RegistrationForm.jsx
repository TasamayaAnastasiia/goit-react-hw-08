import React from "react";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import css from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Name is required")
    .min(3, "Too Short!")
    .max(40, "Too Long!"),
  email: Yup.string()
    .required("Email is required")
    .email("Writing a correct adres email")
    .min(6, "Too Short!")
    .max(40, "Too Long!"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "The password must be at least 8 characters long"),
});

const StyledForm = styled(Form)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "80px",
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1),
  width: "400px",
  padding: "0",
  gap: "5px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const FormTitle = styled("h1")({
  marginBottom: "20px",
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();

  const handleSubmit = (values, { setSubmitting }) => {
    const regData = {
      name: values.username,
      email: values.email,
      password: values.password,
    };
    dispatch(register(regData));

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ username: "", password: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <StyledForm>
          <FormTitle className={css.heading}>Registration</FormTitle>
          <Field
            as={StyledTextField}
            name="username"
            label="Username"
            type="text"
            id={nameFieldId}
            variant="outlined"
            margin="normal"
            error={errors.username && touched.username}
            helperText={touched.username && errors.username}
            InputProps={{
              endAdornment: <PersonIcon />,
            }}
          />

          <Field
            as={StyledTextField}
            name="email"
            label="Email"
            type="email"
            id={emailFieldId}
            variant="outlined"
            margin="normal"
            error={errors.email && touched.email}
            helperText={touched.email && errors.email}
            InputProps={{
              endAdornment: <EmailIcon />,
            }}
          />

          <Field
            as={StyledTextField}
            name="password"
            type="password"
            label="Password"
            id={passwordFieldId}
            variant="outlined"
            margin="normal"
            error={errors.password && touched.password}
            helperText={touched.password && errors.password}
            InputProps={{
              endAdornment: <LockIcon />,
            }}
          />

          <StyledButton
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
          >
            Register
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};
