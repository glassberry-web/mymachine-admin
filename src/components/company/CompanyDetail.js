import React from 'react'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from '../../api/axios';
import ProductDetailPage from '../product/ProductDetail'

function CompanyDetail(props) {
  const [response, setResponse] = useState([]);
  const location = useLocation();
  const id = location.state;
  console.log("id===>", id);
  const enquiryDetail = async () =>
    await axios
      .get(`/enquiry/companyDetail?id=${id}`)
      .then((res) => {
        console.log(res?.data?.result);
        setResponse(res?.data?.result);
      })
      .catch((error) => {
        console.log(error.message);
      });

  useEffect(() => {
    enquiryDetail();
  }, []);
  console.log("productDetail===>", response);


  return (
    <ProductDetailPage  response={response} />
  )
}

export default CompanyDetail