import React from "react";
import SideBar from "../utils/SideBar";

function BlogList() {
  const { _id } = JSON.parse(localStorage.getItem("superAdminvendorid")) || "";

  return (
    <div className="page-content">
      <SideBar
       _id={_id}
        title="Blogs "
        AddProductlink="/add-blogs"
        // Filter="Filter"
        addProduct="Add Blog"
        URL={`/enquiry/superAdminBlogList`}
       
      />
    </div>
  );
}

export default BlogList;