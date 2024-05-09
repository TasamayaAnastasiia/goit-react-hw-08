import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const token = useSelector(selectToken);
            const response = await axios.get(`https://connections-api.herokuapp.com/contacts`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
            return response.data;
        }
        catch(e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contactData, thunkApi) => {
        try {
            const response = await axios.post(`https://connections-api.herokuapp.com/contacts`, contactData);
            return response.data;
        }
        catch(e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkApi) => {
        try {
            const response = await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`);
            return response.data;
        }
        catch(e) {
            return thunkApi.rejectWithValue(e.message);
        }
    }
);
