import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ADD_COMPANY_DETAILS } from '../../api/apiEndpoints';
import axios from '../../api/axios';
import ProductDetailPage from '../product/ProductDetail'
import Addproduct_SuperAdmin from './EditCompany';

function CompanyDetail(props) {
  const [response, setResponse] = useState({});
  const location = useLocation();
  const id = location.state;
  console.log("id===>", id);
  const enquiryDetail = async () =>
    await axios
      .get(`/enquiry/companyDetail?id=${id}`)
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
    <Addproduct_SuperAdmin companyDetails={response} ADD_COMPANY_DETAILS={ADD_COMPANY_DETAILS} navigateTo="/Companylist" />
  )
}

export default CompanyDetail