import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";


export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;


export const selectFilteredContacts = createSelector([selectContacts, selectFilter],
    (contacts, queryFilter) => {
       return contacts.filter((contact) => contact.name.toLowerCase().includes(queryFilter.toLowerCase())
          || contact.number.includes(queryFilter));
    });