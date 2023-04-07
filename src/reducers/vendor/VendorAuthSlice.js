import { createSlice } from "@reduxjs/toolkit";
import { vendorAction } from "../vendor/VendorAuthAction";
const initialState = {
  // for user object
  // userToken: localStorage.getItem("vendor") || null, // for storing the JWT
  userName: "",
  logo:null,
  error: null,
  success: false, // for monitoring the registration process.
  loading: false,
  userInfo: null,
};
const vendorAuthSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {
    logIn:(state ,action)=>{
      state.userName = action?.payload?.userName || initialState.userName;
      state.logo = action?.payload?.logo || initialState.logo;
      // state.photo = action?.payload?.photo || initialState.photo;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(vendorAction.pending, (state, action) => {
      // return { ...state, loginStatus: "pending" };
      state.loading = true;
      state.error = null;
    });
    builder.addCase(vendorAction.fulfilled, (state, action) => {
      console.log("action.payload=====>", action.payload);
      if (action.payload) {
        // localStorage.setItem("vendor", action.payload._id );
        {
          // ...state,
          // userToken: action.payload._id,
          // loginStatus: "fulfilled",
          // success: true,
          // userName: action.payload.userName,
          state.loading = false;
          state.userInfo = action.payload;
          state.userToken = action.payload.id;
          // state.userName = action.payload.userName;
        }
      } else return state;
    });
    builder.addCase(vendorAction.rejected, (state, action) => {
      {
        // ...state,
        // loginStatus: "rejected",
        // error: action.payload,
        state.loading = false;
        state.error = action.payload;
      }
    });
  },
});
export const logInActions = vendorAuthSlice.actions;

export default vendorAuthSlice;
