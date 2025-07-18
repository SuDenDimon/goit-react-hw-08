import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://connections-api.goit.global/";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
      const response = await axios.get("contacts");
  return response.data;
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const addContact = createAsyncThunk("contacts/addContact", async (newContact, thunkAPI) => {
    try {
      const response = await axios.post("contacts", newContact);
  return response.data;
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${contactId}`);
  return response.data;
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);