import { createSlice } from "@reduxjs/toolkit";
import { selectNameFilter, selectContacts } from "./selectors";
import { createSelector } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filter',
    initialState: { 
        name: '',
    },
    reducers: {
        changeFilter(state, action) {
                state.name = action.payload;
            }
    },
    
})

export const filtersReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameSearch) => {
    let filtrList = [];
        if (contacts && nameSearch) {
            return filtrList = contacts.filter((contact) =>
            contact.name.toLowerCase().includes(nameSearch.trim().toLowerCase()));
        }
        else {
            return contacts;
        }
    }
);