import { createSlice } from "@reduxjs/toolkit"

import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOutUser } from "../auth/operations";


const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: null
  },
    extraReducers: builder => {
    builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.rejected, handleRejected)
        .addCase(addContact.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items.push(action.payload);
         })
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.rejected, handleRejected)
        .addCase(deleteContact.fulfilled, (state, action) => { 
            state.loading = false;
            state.error = null;
            state.items = state.items.filter(item => item.id !== action.payload.id);
        })
        .addCase(logOutUser.pending, handlePending)
        .addCase(logOutUser.fulfilled, (state) => { 
          state.items = [];
          state.error = null;
        })
  },
});


export default contactsSlice.reducer;