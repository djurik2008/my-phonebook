import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReduser from '../redux/myPhoneBook/contacts/contactsSlice';
import filterReduser from '../redux/myPhoneBook/filter/filterslice';
import authReduser from '../redux/auth/auth-slice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistAuthReduser = persistReducer(persistConfig, authReduser);

const rootReducer = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
  auth: persistAuthReduser,
});

export default rootReducer;
