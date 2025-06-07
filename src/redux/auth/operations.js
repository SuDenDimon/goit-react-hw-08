import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (values) => {
  axios.defaults.headers.common.Authorization = values;
}


export const registerUser = createAsyncThunk("auth/register", async (values, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", values);

      setAuthHeader(`Bearer ${response.data.token}`);
  return response.data;
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const logInUser = createAsyncThunk("auth/login", async (logInUser, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", logInUser);

      setAuthHeader(`Bearer ${response.data.token}`);
  return response.data;
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const logOutUser = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
    try {
      await axios.post("/users/logout");
      
      axios.defaults.headers.common.Authorization = '';
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);



export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const userToken = state.auth.token;
  

  setAuthHeader(userToken);

    try {
       const response = await axios.get("/users/current");
  return response.data;
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.message);
  }
  },
  {
    condition: (_, thunkAPI) => {

      const state = thunkAPI.getState();

        return state.auth.token !== null;
    }
    }
);