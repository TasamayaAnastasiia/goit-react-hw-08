import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operation';
import { nanoid } from '@reduxjs/toolkit';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';

const CustomForm = styled(Form)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const CustomButtonAddContact = styled(Button)(() => ({
    margin: '20px 0',
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const CustomButton = styled(Button)(({ theme }) => ({
  margin: '0',
}));

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), name: values.username, number: values.phone };
    dispatch(addContact(newContact));
    actions.resetForm();
    setOpen(false); 
  };

  const FeedbackMessage = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(40, "Too Long!").required("Required"),
    phone: Yup.string().min(3, "Too Short!").max(13, "Too Long!").required("Required")
  });

  return (
    <>
      <CustomButtonAddContact onClick={handleOpen} variant="contained" color="primary">Add Contact</CustomButtonAddContact>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Contact</DialogTitle>
        <DialogContent>
          <Formik initialValues={{ username: "", phone: ""}} onSubmit={handleSubmit} validationSchema={FeedbackMessage}>
            <CustomForm>
                <Field
                  as={CustomTextField}
                  type="text"
                  name="username"
                  label="Name"
                  variant="outlined"
                  placeholder="Name"
                  fullWidth
                />
                <Field
                  as={CustomTextField}
                  type="text"
                  name="phone"
                  label="Number"
                  variant="outlined"
                  placeholder="Number"
                  fullWidth
                />
              <DialogActions>
                <CustomButton type="submit" variant="contained" color="primary">Add Contact</CustomButton>
                <Button onClick={handleClose} variant="outlined" color="secondary">Cancel</Button>
              </DialogActions>
            </CustomForm>
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
}
