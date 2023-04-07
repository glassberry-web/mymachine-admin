import { useState, useEffect } from "react";
import axios from "../api/axios";
import CompanyProfile from "../components/CompanyProfile";
import EditProfile from "../components/EditProfile";
import {useSearchParams} from "react-router-dom"

function Profile() {
  const [response, setResponse] = useState([]);
  const [searchParam]=useSearchParams();

  const enquiryDetail = async () => {
    const { _id } = JSON.parse(localStorage.getItem("vendor"));
    // console.log("profile_id===>", _id);
    await axios
      .get(`/enquiry/vendorProfile?id=${_id}`)
      .then((res) => {
        // console.log(res?.data?.result);
        setResponse(res?.data?.result);
        localStorage.setItem("data",JSON.stringify( res?.data?.result))
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    enquiryDetail();
  }, []);
  console.log("response===>", response);
  return (
    <>
      <CompanyProfile response={response} />
    </>
  );
}

export default Profile;
