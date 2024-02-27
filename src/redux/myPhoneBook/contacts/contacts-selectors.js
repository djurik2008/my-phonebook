import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filter/filter.selectors';

const selectAllContacts = store => store.contacts.items;
export const selectContactsState = store => store.contacts;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (items, filter) => {
    // const { items } = contacts;
    if (!filter) {
      return { items: items };
    }
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = items.filter(({ name, number }) => {
      const normalizedName = name.toLowerCase();
      return (
        normalizedName.includes(normalizedFilter) ||
        number.includes(normalizedFilter)
      );
    });
    return { items: filteredContacts };
  }
);
