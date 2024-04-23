import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filter.selectors';

const selectAllContacts = store => store.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (items, filter) => {
    if (!filter) {
      return { items: items };
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = items.filter(({ name, phone }) => {
      const normalizedName = name.toLowerCase();
      return (
        normalizedName.includes(normalizedFilter) ||
        phone.includes(normalizedFilter)
      );
    });
    return { items: filteredContacts };
  }
);

export const selectContactsState = store => store.contacts;
