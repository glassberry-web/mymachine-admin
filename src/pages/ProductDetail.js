import { useEffect, useState } from "react";
import axios from "../api/axios";
import ProductDetailPage from "../components/product/ProductDetail";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function ProductDetail(props) {
  const [searchParam] = useSearchParams();
  const location = useLocation();
  const id = location.state;
  console.log("id===>", id);
  const [response, setResponse] = useState([]);
  // const { _id } = JSON.parse(localStorage.getItem("vendor"));
  const enquiryDetail = async () =>
    await axios
      .get(`/enquiry/productDetail?id=${id}`)
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

  return <ProductDetailPage response={response} />;
}

export default ProductDetail;
