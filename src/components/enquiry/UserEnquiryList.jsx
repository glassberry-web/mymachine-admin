import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import axios from "../../api/axios";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import FullPageLoader from "../FullPageLoader";


function UserEnquiryList({ productListResponse, latestStatus, updatedStatus,onClick, statusHandler}) {
    const [loading, setLoading] = useState(false)
    const [sortedData, setSortedData] = useState(productListResponse);
    const [sortOrder, setSortOrder] = useState('asc');
    console.log("enquiryListResponse--->",  productListResponse );
    const navigate = useNavigate();

    useEffect(() => {
        toggleSortOrder();
    }, [productListResponse]);

    const toggleSortOrder = () => {
  const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  const sortedArray = [...productListResponse].sort((a, b) => {
    if (newSortOrder === 'asc') {
        return (
          a.product_name.localeCompare(b.product_name) ||
          a.location.localeCompare(b.location) ||
          new Date(a.enquiry_date.split('T')[0]) - new Date(b.enquiry_date.split('T')[0])
        );
      } else {
        return (
          b.product_name.localeCompare(a.product_name) ||
          b.location.localeCompare(a.location) ||
          new Date(b.enquiry_date.split('T')[0]) - new Date(a.enquiry_date.split('T')[0])
        );
      }
  });
  console.log("sortedarray", sortedArray);

  setSortedData(sortedArray);
  setSortOrder(newSortOrder);
};

    const clickHandler = (item, id, index) => {
        console.log("item====>", item);
        onClick(item);
        statusHandler(item);
        // const statusUpdate = search.map((ele, i) => {
        //   if (i === index) {
        //     // setStatus("pending");
        //     // return;
        //     return { ...ele, id };
        //   } else {
        //     return ele;
        //   }
        // });
        // setSearch(statusUpdate);
      };
     // **delete start //
  const deletePost = async(id, name) => {
    setLoading(true);  
    const confirmDelete = window.confirm(`Are you sure you want to delete this ${name} product?`);
    console.log(id);
    try{
    if(confirmDelete){
  const deletedData =  
   await axios.delete(`/enquiry/deleteProduct/${id}`, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    
    console.log(deletedData)
    if (deletedData.status === 200) {
   
      toast.success(`<strong>${name}<<strong> Deleted Successfully!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
      // navigate("/vendorAdminPanel");
      navigate("/sidebarDashboards")
    }
    // .then((res) => {const updatedItems = response.filter(item => item._id !== id);
    //    setResponse(updatedItems);
    //    window.location.reload(); 
    // })
    // .catch((err) => console.log(err));
   
  
//   navigate("/sidebarDashboards")
  }
}catch (error) {
  setLoading(false);  
  console.log("Delete error===>", error.message);
}


 
  };

  // * delete routes end //
    return (
        <>
           {loading && <FullPageLoader loading={loading}/> } 
        <table role="grid" className="gridjs-table" style={{ height: "auto" }}>
            <thead className="gridjs-thead">
                <tr className="gridjs-tr">
                    <th
                        data-column-id="id"
                        className="gridjs-th gridjs-th-sort "
                        tabindex={0}
                        style={{ minWidth: "110px", width: "99px" }}
                    >
                        <div class="gridjs-th-content ">Sr No</div>

                        <button
                            tabindex={-1}
                            aria-label="Sort column ascending"
                            title="Sort column ascending"
                            className="gridjs-sort gridjs-sort-neutral"
                        ></button>
                    </th>
                    {/* <th
            data-column-id="#"
            className="gridjs-th text-muted"
            style={{ width: "40px" }}
          >
            <div className="gridjs-th-content">#</div>
          </th> */}
                    <th
                        data-column-id="product"
                        className="gridjs-th gridjs-th-sort text-muted"
                        tabIndex={0}
                        style={{ width: "150px" }}
                    >
                        <div className="gridjs-th-content">Product_name</div>
                        <button
                            tabIndex={-1}
                            onClick={toggleSortOrder} 
                            className="gridjs-sort gridjs-sort-neutral"
                        />
                    </th>
                    <th
                        data-column-id="stock"
                        className="gridjs-th gridjs-th-sort text-muted"
                        tabIndex={0}
                        style={{ width: "150px" }}
                    >
                        <div className="gridjs-th-content">Email</div>
                       
                    </th>
                    {/* <th
            data-column-id="stock"
            className="gridjs-th gridjs-th-sort text-muted"
            tabIndex={0}
            style={{ width: "100px" }}
          >
            <div className="gridjs-th-content">Brand</div>
            <button
              tabIndex={-1}
              aria-label="Sort column ascending"
              title="Sort column ascending"
              className="gridjs-sort gridjs-sort-neutral"
            />
          </th> */}
                    <th
                        data-column-id="price"
                        className="gridjs-th gridjs-th-sort text-muted"
                        tabIndex={0}
                        style={{ width: "100px" }}
                    >
                        <div className="gridjs-th-content">Phone</div>

                    </th>
                    <th
                        data-column-id="price"
                        className="gridjs-th gridjs-th-sort text-muted"
                        tabIndex={0}
                        style={{ width: "120px" }}
                    >
                        <div className="gridjs-th-content">Location</div>
                        <button
                            tabIndex={-1}
                            onClick={toggleSortOrder} 
                            className="gridjs-sort gridjs-sort-neutral"
                        />
                    </th>

                    <th
                        data-column-id="action"
                        className="gridjs-th text-muted"
                        style={{ width: "100px" }}
                    >
                        <div className="gridjs-th-content">Enquiry_date</div>
                        <button
                            tabIndex={-1}
                            onClick={toggleSortOrder} 
                            className="gridjs-sort gridjs-sort-neutral"
                        />
                    </th>
                    <th
                        data-column-id="action"
                        className="gridjs-th text-muted"
                        style={{ width: "100px" }}
                    >
                        <div className="gridjs-th-content">Enquiry_time</div>
                        {/* <button
                            tabIndex={-1}
                            aria-label="Sort column ascending"
                            title="Sort column ascending"
                            className="gridjs-sort gridjs-sort-neutral"
                        /> */}
                    </th>
                    {/* <th
                        data-column-id="action"
                        className="gridjs-th text-muted"
                        style={{ width: "100px" }}
                    >
                        <div className="gridjs-th-content">Status</div>
                    </th> */}
                    {/* <th
            data-column-id="action"
            className="gridjs-th text-muted"
            style={{ width: "100px" }}
          >
            <div className="gridjs-th-content">Status</div>
          </th> */}
                </tr>
            </thead>
            <tbody className="gridjs-tbody">
                {sortedData?.map((product, i) => {
                    return (
                        <>
                            <tr className="gridjs-tr" key={product._id}>
                                <td
                                    data-column-id="id"
                                    className="gridjs-td tdee"
                                >
                                    <span>
                                        <span className="fw-semibold">{`0${i + 1
                                            }`}</span>
                                    </span>
                                </td>
                                {/* <td data-column-id="#" className="gridjs-td">
                  <span>
                    <div className="form-check checkbox-product-list">
                      {" "}
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue={1}
                        id="checkbox-1"
                      />{" "}
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-1"
                      />{" "}
                    </div>
                  </span>
                </td> */}
                                <td data-column-id="product" className="gridjs-td">
                                    <span>
                                        <div className="d-flex align-items-center">
                                            {/* <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm bg-light rounded p-1">
                                                    <img
                                                        src={product.logo || ""}
                                                        alt=""
                                                        className="img-fluid d-block"
                                                    />
                                                </div>
                                            </div> */}
                                            <div className="flex-grow-1">
                                                <h5 className="fs-14 mb-1">
                                                    <Link state={product._id}
                                                        href="apps-ecommerce-product-details.html"
                                                        className="text-dark"
                                                    >
                                                        {product.product_name || "--"}
                                                    </Link>
                                                </h5>
                                                {/* <p className="text-muted mb-0">
                                                    Category :{" "}
                                                    <span className="fw-medium">{product.category}</span>
                                                </p> */}
                                            </div>
                                        </div>
                                    </span>
                                </td>
                                <td data-column-id="stock" className="gridjs-td">
                                    {product.email}
                                </td>
                                {/* <td data-column-id="stock" className="gridjs-td">
                  {product.brand}
                </td> */}
                                <td data-column-id="price" className="gridjs-td">
                                    <span>{product.phone_number || "--"}</span>
                                </td>
                                <td data-column-id="price" className="gridjs-td">
                                    <span>{product.location || "--"}</span>
                                </td>
                                <td data-column-id="price" className="gridjs-td">
                                    <span>{product.enquiry_date.slice(0,10).split("-").reverse().join("-") || "--"}</span>
                                </td>
                                <td data-column-id="price" className="gridjs-td">
                                    <span>{product.enquiry_date.slice(11,16) || "--"}</span>
                                </td>
                               
                                              
                            </tr>
                        </>
                    );
                })}
            </tbody>
        </table>
        <ToastContainer />
        </>
    );
}

export default UserEnquiryList;
