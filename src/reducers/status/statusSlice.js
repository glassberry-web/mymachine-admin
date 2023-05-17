import { createSlice } from "@reduxjs/toolkit";
const initialState = { status: "" };
const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    enquiryStatus: (state, action) => {
      console.log("state====>",state)
      console.log("action====>",action)
      state.status = action?.payload || initialState.status;
    },
  },
});
export const statusActions = statusSlice.actions;
export default statusSlice;