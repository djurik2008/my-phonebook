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
  addLoading: false,
  editeLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.fetchLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.fetchLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.fetchLoading = false;
        state.error = payload;
      })
      .addCase(addContact.pending, state => {
        state.addLoading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.addLoading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.addLoading = false;
        state.error = payload;
      })
      .addCase(deleteContact.pending, state => {
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(editeContact.pending, state => {
        state.editeLoading = true;
        state.error = null;
      })
      .addCase(editeContact.fulfilled, (state, { payload }) => {
        state.editeLoading = false;
        const idx = state.items.findIndex(contact => contact.id === payload.id);
        state.items.splice(idx, 1, payload);
      })
      .addCase(editeContact.rejected, (state, { payload }) => {
        state.editeLoading = false;
        state.error = payload;
      });
  },
});

export default contactsSlice.reducer;
