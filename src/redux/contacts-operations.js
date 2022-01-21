// Imports of actions
import { createAsyncThunk } from '@reduxjs/toolkit';
  // Imports of libraries
  import axios from 'axios';
  axios.defaults.baseURL = 'https://61eb18a77ec58900177cdbb5.mockapi.io';
  
  export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
      const { data } = await axios.get('/contacts');
      return data;
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async contactId => {
      const {
        data: { id },
      } = await axios.delete(`/contacts/${contactId}`);
      return id;
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number: phone }) => {
      const contact = { name, phone };
  
      const { data } = await axios.post('/contacts', contact);
      return data;
    }
  );