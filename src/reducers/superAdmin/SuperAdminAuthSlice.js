import { createSlice } from "@reduxjs/toolkit";
import { adminAction } from "../superAdmin/SuperAdminAuthAction";
const initialState = {
  // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
  loginStatus: null,
};
const superAdminAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminAction.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(adminAction.fulfilled, (state, action) => {
      console.log("action.payload=====>", action.payload);
      if (action.payload) {
      //  console.log("id---->",localStorage.setItem("superAdminID", action.payload))

        return {
          ...state,
          userToken: action.payload,
          loginStatus: "fulfilled",
          success: true,
        };
      } else return state;
    });
    builder.addCase(adminAction.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        error: action.payload,
      };
    });
  },
});

export default superAdminAuthSlice;
