import { createAsyncThunk } from "@reduxjs/toolkit";
import { SUPER_ADMIN } from "../../api/apiEndpoints";

import axios from "../../api/axios";

export const adminAction = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const auth = await axios.post(SUPER_ADMIN, {
        email: email,
        password: password,
      });
      console.log("auth===>", auth);
      if (auth.status === 200) {
        // localStorage.setItem("superAdminID", auth.data.result.id);

        return auth.data.result.id;
      }
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
