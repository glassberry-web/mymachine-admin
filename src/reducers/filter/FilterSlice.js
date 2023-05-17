import { createSlice } from "@reduxjs/toolkit";
const initialState = {  data: [] ,brand:[] };
const responseDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    responseData: (state, action) => {

      state.data = action?.payload || initialState.data;
    },
    brand:(state, action)=>{
      console.log("state====>",state)
      console.log("action====>",action)
      state.brand = action?.payload || initialState.brand;

    }
  },
});
export const responseDataActions = responseDataSlice.actions;
export default responseDataSlice;