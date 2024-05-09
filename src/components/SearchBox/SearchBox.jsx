import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    fontSize: '16px',
  },
  '& .MuiOutlinedInput-root': {
    borderRadius: '5px',
  },
}));

export const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <CustomTextField
      type="text"
      name="search"
      value={value}
      onChange={handleChange}
      placeholder="Search by name..."
      variant="outlined"
      fullWidth
    />
  );
}
