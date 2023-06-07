import React from "react";
import SideBar from "../utils/SideBar";

function SliderList() {
  const { _id } = JSON.parse(localStorage.getItem("superAdminvendorid")) || "";

  return (
    <div className="page-content">
      <SideBar
       _id={_id}
        title="Sliders"
        AddProductlink="/add-slider"
        // Filter="Filter"
        addProduct="Add Slider"
        URL={`/enquiry/superAdminSliderList`}
       
      />
    </div>
  );
}

export default SliderList;