import React from "react";
import SideBar from "../utils/SideBar";

function AddVendor() {
  const { _id } = JSON.parse(localStorage.getItem("superAdminvendorid"));

  return (
    <div className="page-content">
      <SideBar
        title="Vendors"
        AddProductlink="/AddCompany"
        URL={`/enquiry/superAdminCompanyList`}
        ProductDetailLink="/companyDetailPage"
      />
    </div>
  );
}

export default AddVendor;
