import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editeContact,
} from '../../../redux/myPhoneBook/contacts/contacs-operations';

const initialState = {
  items: [],
  fetchLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.fetchLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.fetchLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.fetchLoading = false;
        state.error = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(editeContact.fulfilled, (state, { payload }) => {
        state.error = null;
        const idx = state.items.findIndex(contact => contact.id === payload.id);
        state.items.splice(idx, 1, payload);
      })
      .addCase(editeContact.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export default contactsSlice.reducer;
