import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import { ADD_COMPANY_DETAILS } from '../../api/apiEndpoints';
import { ADD_COMPANY_DETAILS , ADD_COMPANY_Vendor_DETAILS} from '../../../api/apiEndpoints';
// import axios from '../../api/axios';
import axios from '../../../api/axios';
// import ProductDetailPage from '../product/ProductDetail'
// import Addproduct_SuperAdmin from './EditCompany';
import Addproduct_SuperAdmin from '../EditCompany';
import Addproduct_Vendor from '../EditVenorForm';

function Edit_Vendor_Company(props) {
  const [response, setResponse] = useState({});
//   const location = useLocation();
//   const id = location.state;
  const vendor = localStorage.getItem("vendor")||"";
  const jsonObject = JSON.parse(vendor);
  const vendorID = jsonObject._id
  console.log("vendorID", vendorID);
//   console.log("id===>", id);
  const enquiryDetail = async () =>
    await axios
      .get(`/enquiry/companyDetail?id=${vendorID}`)
      .then((res) => {
        console.log(res?.data?.result);
        setResponse(res?.data?.result[0]);
      })
      .catch((error) => {
        console.log(error.message);
      });

  useEffect(() => {
    enquiryDetail();
  }, []);
  console.log("productDetail===>", response);


  return (
    <Addproduct_Vendor companyDetails={response} ADD_COMPANY_DETAILS={ADD_COMPANY_Vendor_DETAILS} navigateTo="/Companylist" />
  )
}

export default Edit_Vendor_Company