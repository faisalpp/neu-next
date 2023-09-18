import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {Signin} from "../api/user/auth"

const initialState = {
  _id: "",
  email: "",
  firstName: "",
  lastName: "",
  auth: false,
  isAdmin: null,
};

// Create an async thunk for the login action
export const loginUser = createAsyncThunk("user/login", async (data) => {
    try{
      const response = await Signin(data); // Call your login API with the provided data
      if(response.status === 200){
        return response.data; // Assuming your API response contains the user data
      }else{
        return response
      }
    }catch(error){
      return { payload: error.response?.data, error: true };
    }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { _id, email, firstName, lastName,auth,isAdmin } = action.payload;

      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.auth = auth;
      state.isAdmin = isAdmin;
    },
    resetUser: (state) => {
      state._id = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.auth = false;
      state.isAdmin = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
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

export const { setUser, resetUser,setUserAuth } = userSlice.actions;

export default userSlice.reducer;