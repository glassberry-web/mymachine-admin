import { Navigate } from "react-router-dom";
import Main from "../components/Main";
import Admin from "../vendor/Admin";
import {useSearchParams} from "react-router-dom"

const ProtectedRoute = () => {
  const [searchParam]=useSearchParams();

  // const authentication = {
  //   token: localStorage.getItem("superAdminID"),
  // };
  // return authentication?.token ? <Main /> : <Navigate to="/" />;

  // const superAdminID = searchParam.get("superAdminId");
  const superAdminID = localStorage.getItem("superAdminID");
    // const  vendorId  = JSON.parse(localStorage.getItem("vendor"));
  // const vendorId = searchParam.get("vendorId");
    // const adminID = localStorage.setItem("superAdminID", superAdminID);

  // console.log("adminID===>",adminID)
  let token;
  if (superAdminID) {
    token = superAdminID;
    return token ? <Main  /> : <Navigate to="/" />;
  }
  // } else {

  //   token = vendorId;
  //   return token ? <Admin /> : <Navigate to="/" />;

  // }

  // const token = superAdminID||_id
};

export default ProtectedRoute;
