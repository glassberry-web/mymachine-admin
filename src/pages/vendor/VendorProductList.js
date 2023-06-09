import { useState, useEffect } from "react";


import axios from "../../api/axios";
import SideBar from "../../utils/SideBar";
import { vendorProductList } from "../../api/apiEndpoints";

const VendorProductList = () => {
  const vendor = localStorage.getItem("vendor")||"";
  const jsonObject = JSON.parse(vendor);
  const vendorID = jsonObject._id
  console.log("vendorID", vendorID);
 
  return (
    <>
      <div className="page-content">
        <SideBar title="Product List" URL={vendorProductList}  AddProductlink="/VendorAddProduct" addProduct="Add Product"  _id={ vendorID}  ProductDetailLink="/vendor-product-detail"/>
      </div>

     
    </>
  );
};

export default VendorProductList;
