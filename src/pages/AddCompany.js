import React from "react";
import SideBar from "../utils/SideBar";

function AddVendor() {
  const { _id } = JSON.parse(localStorage.getItem("superAdminvendorid")) || "";

  return (
    <div className="page-content">
      <SideBar
       _id={_id}
        title="Vendors"
        AddProductlink="/AddCompany"
        // Filter="Filter"
        addProduct="Addcompany"
        URL={`/enquiry/superAdminCompanyList`}
        ProductDetailLink="/companyEditPage"
      />
    </div>
  );
}

export default AddVendor;
