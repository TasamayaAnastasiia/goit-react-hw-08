import React from 'react';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filters/slice.js';
import Contact from '../Contact/Contact.jsx';

const CustomList = styled(List)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

const EmptyListMessage = styled('p')(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'center',
}));

export const ContactList = () => {
  const filteredList = useSelector(selectFilteredContacts);

  return (
    <CustomList>
      {filteredList.length !== 0 ? (
        <>
          {filteredList.map(contact => (
            <Contact key={contact.id} list={contact} />
          ))}
          <EmptyListMessage>Total contacts: {filteredList.length}</EmptyListMessage>
        </>
      ) : (
        <EmptyListMessage>No contacts found</EmptyListMessage>
      )}
    </CustomList>
  );
}
