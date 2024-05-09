import { createSlice} from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from '../auth/operations';

const handlePending = (state) => {
    state.loading = true;
}

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const handleFulfilled = (state, action) => {
    state.loading = false;
    state.error = null;
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    extraReducers: builder => {
        builder
          .addCase(fetchContacts.pending, handlePending)
          .addCase(addContact.pending, handlePending)
          .addCase(deleteContact.pending, handlePending)
          .addCase(fetchContacts.fulfilled, (state, action) => {
            handleFulfilled(state, action);
            state.items = action.payload;
          })
          .addCase(addContact.fulfilled, (state, action) => {
            handleFulfilled(state, action);
            state.items = state.items.concat(action.payload);
          })
          .addCase(deleteContact.fulfilled, (state, action) => {
            handleFulfilled(state, action);
            state.items = state.items.filter(contact => contact.id !== action.payload.id);
          })
          .addCase(fetchContacts.rejected, handleRejected)
          .addCase(addContact.rejected, handleRejected)
          .addCase(deleteContact.rejected, handleRejected)
          .addCase(logOut.fulfilled, (state) => {state.items = []})
      },
});

export const contactReducer = contactSlice.reducer;

