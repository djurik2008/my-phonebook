import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../../../api/contacts-api';
import { Notify, Report } from 'notiflix';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsApi.getContacts();
      return data;
    } catch (error) {
      Report.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.addContact(body);
      Notify.success('Contact added');
      return data;
    } catch (error) {
      Report.failure(error.message);
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name, number }, { getState }) => {
      const { contacts } = getState();
      const normalizedName = name.toLowerCase();

      const dublicate = contacts.items.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        const currentPhone = item.number;
        return (
          normalizedCurrentName === normalizedName || currentPhone === number
        );
      });

      if (dublicate) {
        Report.warning(
          'Ooops',
          `Contact with name ${name} and number ${number} already in list`
        );
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.removeContact(id);
      Notify.success('Contact deleted');
      return id;
    } catch (error) {
      Report.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export const editeContact = createAsyncThunk(
  'contacts/update',
  async (data, { rejectWithValue }) => {
    try {
      const response = await contactsApi.editeContact(data.id, data.body);
      Notify.success('Contact edited');
      return response;
    } catch (error) {
      Report.failure(error.message);
      return rejectWithValue(error.message);
    }
  }
);
