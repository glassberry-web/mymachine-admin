import React from "react";
import SideBar from "../utils/SideBar";

function ApplicationList() {
  const { _id } = JSON.parse(localStorage.getItem("superAdminvendorid")) || "";

  return (
    <div className="page-content">
      <SideBar
       _id={_id}
        title="Application List"
        AddProductlink="/add-application"
        // Filter="Filter"
        addProduct="Add Application"
        URL={`/enquiry/superAdminApplicationList`}
       
      />
    </div>
  );
}

export default ApplicationList;