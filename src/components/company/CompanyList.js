import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import axios from "../../api/axios";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import FullPageLoader from "../FullPageLoader";


function CompanyList({ productListResponse,  ProductDetailLink,}) {
    const [loading, setLoading] = useState(false);
    const [sortedData, setSortedData] = useState(productListResponse);
    const [sortOrder, setSortOrder] = useState('asc');
    console.log("productListResponse--->",  ProductDetailLink );
    const navigate = useNavigate();

    useEffect(() => {
        toggleSortOrder();
    }, [productListResponse]);
  
    //* Function to toggle the sort order start
    const toggleSortOrder = () => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        const sortedArray = [...productListResponse].sort((a, b) => {
            if (newSortOrder === 'asc') {
                console.log('Sorting ASC:', a.city, b.city);
                if (a.status === b.status) {
                  return a.company_name.localeCompare(b.company_name) || a.city.localeCompare(b.city);
                } else {
                  return a.status === 'active' ? -1 : 1;
                }
              } else {
                console.log('Sorting DESC:', a.city, b.city);
                if (a.status === b.status) {
                  return b.company_name.localeCompare(a.company_name) || b.city.localeCompare(a.city);
                } else {
                  return b.status === 'active' ? 1 : -1;
                }
              }
              
        });
       
        
        setSortedData(sortedArray);
        setSortOrder(newSortOrder);
    };
    //* Function to toggle the sort order end
     // **delete start //
  const deletePost = async(id) => {
    setLoading(true);  
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    console.log(id);
    try{
    if(confirmDelete){
  const deletedData =  
   await axios.delete(`/enquiry/deleteCompany/${id}`, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    
    console.log(deletedData)
    if (deletedData.status === 200) {
   
      toast.success("Company Deleted Successfully !", {
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
   
  
  // navigate("/sidebarDashboards")
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
                        style={{ width: "300px" }}
                    >
                        <div className="gridjs-th-content">Company_Name</div>
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
                        <div className="gridjs-th-content">Email_id</div>
                        {/* <button
                            tabIndex={-1}
                            aria-label="Sort column ascending"
                            title="Sort column ascending"
                            className="gridjs-sort gridjs-sort-neutral"
                        /> */}
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
                        style={{ width: "150px" }}
                    >
                        <div className="gridjs-th-content">Manager_Name</div>
                        {/* <button
                            tabIndex={-1}
                            aria-label="Sort column ascending"
                            title="Sort column ascending"
                            className="gridjs-sort gridjs-sort-neutral"
                        /> */}
                    </th>
                    <th
                        data-column-id="price"
                        className="gridjs-th gridjs-th-sort text-muted"
                        tabIndex={0}
                        style={{ width: "150px" }}
                    >
                        <div className="gridjs-th-content">Phone_Number</div>
                        {/* <button
                            tabIndex={-1}
                            aria-label="Sort column ascending"
                            title="Sort column ascending"
                            className="gridjs-sort gridjs-sort-neutral"
                        /> */}
                    </th>
                    <th
                        data-column-id="price"
                        className="gridjs-th gridjs-th-sort text-muted"
                        tabIndex={0}
                        style={{ width: "120px" }}
                    >
                        <div className="gridjs-th-content">Location</div>
                        
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
                {sortedData?.map((company, i) => {
                    return (
                        <>
                            <tr className="gridjs-tr" key={company._id}>
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
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar-sm bg-light rounded p-1">
                                                    <img
                                                        src={company.logo || ""}
                                                        alt={company.company_name}
                                                        className="img-fluid d-block imgob"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <h5 className="fs-14 mb-1">
                                                    <Link  to={ProductDetailLink}  state={company._id}
                                                        href="apps-ecommerce-product-details.html"
                                                        className="text-dark"
                                                    >
                                                        {company.company_name}
                                                    </Link>
                                                </h5>
                                                <p className="text-muted mb-0">
                                                    CEO :{" "}
                                                    <span className="fw-medium">{company.ownerName}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </span>
                                </td>
                                <td data-column-id="stock" className="gridjs-td">
                                    {company.emailId}
                                </td>
                                {/* <td data-column-id="stock" className="gridjs-td">
                  {product.brand}
                </td> */}
                                <td data-column-id="price" className="gridjs-td">
                                    <span>{company.managerName || "--"}</span>
                                </td>
                                <td data-column-id="price" className="gridjs-td">
                                    <span>{company.phoneNo || "--"}</span>
                                </td>
                                <td data-column-id="price" className="gridjs-td">
                                    <span>{(company.city || "--")}</span>
                                </td>
                                <td data-column-id="action" className="gridjs-td">
                                    <span>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-soft-secondary btn-sm dropdown"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i className="ri-more-fill" />
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                    <Link 
                                                    //  to={ProductDetailLink}  state={company._id}
                                                        className="dropdown-item"
                                                        href="apps-ecommerce-product-details.html"
                                                    >
                                                        <i className="ri-eye-fill align-bottom me-2 text-muted" />
                                                        View
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={ProductDetailLink} state={company._id}
                                                        className="dropdown-item edit-list"
                                                        data-edit-id={1}
                                                        href="apps-ecommerce-add-product.html"
                                                    >
                                                        <i className="ri-pencil-fill align-bottom me-2 text-muted" />
                                                        Edit
                                                    </Link>
                                                  
                                                </li>
                                                <li className="dropdown-divider" />
                                                <li>
                                                    <Link
                                                    onClick={() => deletePost(company._id)}
                                                        className="dropdown-item remove-list"
                                                        href="#"
                                                        data-id={1}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#removeItemModal"
                                                    >
                                                        <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />
                                                        Delete
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </span>
                                </td>
                                <td data-column-id="price" className="gridjs-td">
                                    <span className={`${company.status ? "btn-soft-success" :"btn-soft-warning"}`}>{company.status || "Deactive"}</span>
                                </td>
                                {/* <td data-column-id="action" className="gridjs-td">
                  <span>
                    <div className="dropdown">
                      <button
                        className="btn btn-soft-secondary btn-sm dropdown"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                      /////////////
                        Pending
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            className="dropdown-item"
                            href="apps-ecommerce-product-details.html"
                          >
                            <i className="ri-eye-fill align-bottom me-2 text-muted" />{" "}
                            Active
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item edit-list"
                            data-edit-id={1}
                            href="apps-ecommerce-add-product.html"
                          >
                            <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                            Deactive
                          </a>
                        </li>
                        <li className="dropdown-divider" />
                      </ul>
                    </div>
                  </span>
                </td> */}
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

export default CompanyList;
