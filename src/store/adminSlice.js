import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {Signin} from "../api/admin/auth"

const initialState = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  auth: false,
  isAdmin: null,
};

// Create an async thunk for the login action
export const loginAdmin = createAsyncThunk("admin/login", async (data) => {
    try{
      const response = await Signin(data); // Call your login API with the provided data
      if(response.status === 200){
        console.log(response)
        return response.data; // Assuming your API response contains the user data
      }else{
        return response
      }
    }catch(error){
      return { payload: error.response?.data, error: true };
    }
});

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      const { _id, email, firstName, lastName,auth,isAdmin } = action.payload;

      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.auth = auth;
      state.isAdmin = isAdmin;
    },
    resetAdmin: (state) => {
      state._id = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.auth = false;
      state.isAdmin = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAdmin.fulfilled, (state, action) => {
      const { _id, email, firstName, lastName, auth, isAdmin } = action.payload;

      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.auth = auth;
      state.isAdmin = isAdmin;
    });
  },
});

export const { setAdmin, resetAdmin } = adminSlice.actions;

export default adminSlice.reducer;