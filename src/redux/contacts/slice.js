import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { logOut } from '../auth/operations';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    hasFetched: false,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.hasFetched = true;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.hasFetched = true;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, state => {
        state.isLoading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
        state.hasFetched = false;
      });
  },
});

export default slice.reducer;
