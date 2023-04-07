import { createAsyncThunk } from "@reduxjs/toolkit";
import { VENDOR_AUTH } from "../../api/apiEndpoints";

import axios from "../../api/axios";

export const vendorAction = createAsyncThunk(
  "auth/logIn",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const detail = await axios.post(VENDOR_AUTH, {
        email: email,
        password: password,
      });
      console.log("detail===>", detail);
      if (detail.status === 200) {
        console.log("detail====>",detail)
        // localStorage.setItem("vendor", detail.data.result.id);
        // toast.success("Success Notification !", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        // navigate("/vendorAdminPanel");
        // localStorage.setItem("vendor", JSON.stringify(detail.data.result));
        return detail.data.result;
      }
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);
