import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import axios from "../../api/axios";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import FullPageLoader from "../FullPageLoader";


function TradeEnquiryList({ productListResponse, latestStatus, updatedStatus,onClick, statusHandler}) {
    const [loading, setLoading] = useState(false);
    const [sortedData, setSortedData] = useState(productListResponse);
    const [sortOrder, setSortOrder] = useState('asc');
    console.log("enquiryListResponse--->",  productListResponse );
    const navigate = useNavigate();

    useEffect(() => {
      toggleSortOrder();
  }, [productListResponse]);

     //* Function to toggle the sort order start
     const toggleSortOrder = () => {
      const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
      const sortedArray = [...productListResponse].sort((a, b) => {
        if (newSortOrder === 'asc') {
          return a.companyName.localeCompare(b.companyName) || a.location.localeCompare(b.location);
        } else {
          return b.companyName.localeCompare(a.companyName) || b.location.localeCompare(a.location);
        }
      });
          
      
      setSortedData(sortedArray);
      setSortOrder(newSortOrder);
  };
  //* Function to toggle the sort order end

  // ! function to calculated distance start
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6378; // Radius of the Earth in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  }
  // ! function to calculated distance end

// ? sort user based on location

  // const sortedUsers = [...productListResponse].sort((user1, user2) => {
    
  //   const puneLat = 18.5204; // Latitude of Pune
  //   const puneLon = 73.8567; // Longitude of Pune
  //   const user1Distance = calculateDistance(
  //     user1.location.latitude,
  //     user1.location.longitude,
  //     puneLat,
  //     puneLon
  //   );
  //   const user2Distance = calculateDistance(
  //     user2.location.latitude,
  //     user2.location.longitude,
  //     puneLat,
  //     puneLon
  //   );
  //   return user1Distance - user2Distance;
    
  // });
  // setSortedData(sortedUsers);
  const sortByLocation = () => {
    const sortedUsers = [...productListResponse].sort((user1, user2) => {
    
      const puneLat = 18.5204; // Latitude of Pune
      const puneLon = 73.8567; // Longitude of Pune
      const user1Distance = calculateDistance(
        user1.location.latitude,
        user1.location.longitude,
        puneLat,
        puneLon
      );
      const user2Distance = calculateDistance(
        user2.location.latitude,
        user2.location.longitude,
        puneLat,
        puneLon
      );
      return user1Distance - user2Distance;
     
      
    });
    console.log("soreted", sortedUsers);
    setSortedData(sortedUsers);
  };
  // ? sort user based on location

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
        <table role="grid" className="gridjs-table table table-striped" style={{ height: "auto" }}>
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
                        style={{ width: "200px" }}
                    >
                        <div className="gridjs-th-content">Company_name</div>
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
                        style={{ width: "200px" }}
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
                        style={{ width: "100px" }}
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
                        <div className="gridjs-th-content">Actions</div>
                    </th>
                    <th
                        data-column-id="action"
                        className="gridjs-th text-muted"
                        style={{ width: "100px" }}
                    >
                        <div className="gridjs-th-content">Status</div>
                        <button
                            tabIndex={-1}
                            onClick={toggleSortOrder} 
                            className="gridjs-sort gridjs-sort-neutral"
                        />
                    </th>
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
                                                        {product.companyName}
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
                                    <span>{product.phoneNo || "--"}</span>
                                </td>
                                <td data-column-id="price" className="gridjs-td">
                                    <span>{product.location || "--"}</span>
                                </td>
                                <td data-column-id="action" className="gridjs-td">
                                    <span>
                                        {
                                            localStorage.getItem(product._id) !== null ?
                                            (<Link
                                                className="btn btn-sm btn-soft-warning"
                                                // onClick={() => {
                                                //   console.log("id--->",item._id,item,i)
                                                //   onClick(item._id,item,i);
                                                // }}
                                            
                                              >
                                                Approve
                                              </Link>):  <Link
                                    className="btn btn-sm btn-soft-info"
                                    // onClick={() => {
                                    //   console.log("id--->",item._id,item,i)
                                    //   onClick(item._id,item,i);
                                    // }}
                                    onClick={() => {
                                      clickHandler(product._id, product, i);
                                    }}
                                  >
                                    Approve
                                  </Link>
                                        }
                                  


                                    </span>
                                </td>
                                {product.status  && (
                                <td
                                  data-column-id="status"
                                  className="gridjs-td"
                                >
                                  <span className={`${product.status==="Pending" ? "badge btn-soft-warning text-uppercase": "badge btn-soft-success text-uppercase"}`}>
                                    {product.status}
                                  </span>
                                </td>
                              )}
                              {updatedStatus === "Pending" && (
                                <td
                                  data-column-id="status"
                                  className="gridjs-td"
                                >
                                  <span className="badge badge-soft-warning text-uppercase">
                                    {updatedStatus || "Status"}
                                  </span>
                                </td>
                              )}
                              {latestStatus ? (
                                <td
                                  data-column-id="status"
                                  className="gridjs-td"
                                >
                                  <span className="badge badge-soft-warning text-uppercase">
                                    Status{" "}
                                  </span>
                                </td>
                              ) : (
                                ""
                              )}                 
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

export default TradeEnquiryList;
