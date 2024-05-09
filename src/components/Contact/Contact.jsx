import DeleteIcon from '@mui/icons-material/DeleteForever';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/PhoneIphone';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

const CustomListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(1),
  boxShadow: `0 2px 4px rgba(0, 0, 0, 0.1)`,
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: `0 4px 8px rgba(0, 0, 0, 0.2)`,
  },
}));

const IconWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '50%',
});

export const Contact = ({ list }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDelete = (id) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(list.id));
    setOpen(false);
  };

  return (
    <>
      <CustomListItem>
        <IconWrapper>
          <PersonIcon />
          <ListItemText primary={list.name} />
        </IconWrapper>
        <IconWrapper>
          <PhoneIcon />
          <ListItemText primary={list.number} />
        </IconWrapper>
        <Button variant="contained" color="secondary" onClick={() => handleDelete(list.id)}>
          <DeleteIcon />
        </Button>
      </CustomListItem>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this contact?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Contact;
