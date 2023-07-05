import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import axios from "../../api/axios";

import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import FullPageLoader from "../FullPageLoader";


function BlogList({ productListResponse}) {
    const [loading, setLoading] = useState(false)   
    const [sortedData, setSortedData] = useState(productListResponse);
    console.log("productListResponse--->", productListResponse);
    const navigate = useNavigate();
    const [sortOrder, setSortOrder] = useState('asc');
    // useEffect(() => {
    //     toggleSortOrder();
    // }, [productListResponse]);

    //* Function to toggle the sort order start
    // const toggleSortOrder = () => {
    //     const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    //     const sortedArray = [...productListResponse].sort((a, b) => {
    //         if (newSortOrder === 'asc') {
    //             if (a.product_name !== b.product_name) {
    //                 return a.product_name.localeCompare(b.product_name);
    //             } else if (a.brand !== b.brand) {
    //                 return a.brand.localeCompare(b.brand);
    //             } else if (a.subCategory !== b.subCategory) {
    //                 return a.subCategory.localeCompare(b.subCategory);
    //             } else {
    //                 return a.modalnum.localeCompare(b.modalnum);
    //             }
    //         } else {
    //             if (a.product_name !== b.product_name) {
    //                 return b.product_name.localeCompare(a.product_name);
    //             } else if (a.brand !== b.brand) {
    //                 return b.brand.localeCompare(a.brand);
    //             } else if (a.subCategory !== b.subCategory) {
    //                 return b.subCategory.localeCompare(a.subCategory);
    //             } else {
    //                 return b.modalNum.localeCompare(a.modalNum);
    //             }
    //         }
    //     });
    //     setSortedData(sortedArray);
    //     setSortOrder(newSortOrder);
    // };
    //* Function to toggle the sort order end


    // **delete function start //
    const deletePost = async (id, name) => {
        setLoading(true);
        const confirmDelete = window.confirm(`Are you sure you want to delete this ${name} product?`);
        console.log(id);
        try {
            if (confirmDelete) {
                const deletedData =
                    await axios.delete(`/enquiry/deleteBlog/${id}`, {
                        headers: { "Content-Type": "multipart/form-data" }
                    });

                console.log(deletedData)
                if (deletedData.status === 200) {

                    toast.success(`<strong>${name}<strong> Deleted Successfully!`, {
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
        } catch (error) {
            setLoading(false);
            console.log("Delete error===>", error.message);
        }

    };
    // * delete function end //

    return (
        <>
            {loading && <FullPageLoader loading={loading} />}
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
                          
                        </th>                     
                        <th
                            data-column-id="product"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                            style={{ width: "300px" }}
                        >
                            <div className="gridjs-th-content">Blog_title</div>
                            {/* <button                               
                                onClick={toggleSortOrder}                                
                                className="gridjs-sort gridjs-sort-neutral"
                            /> */}
                        </th>
                        <th
                            data-column-id="stock"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                            style={{ width: "100px" }}
                        >
                            <div className="gridjs-th-content">Publish_date</div>
                            {/* <button
                                tabIndex={-1}
                                onClick={toggleSortOrder}                               
                                className="gridjs-sort gridjs-sort-neutral"
                            /> */}
                        </th>                       
                        <th
                            data-column-id="price"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                            style={{ width: "200px" }}
                        >
                            <div className="gridjs-th-content">Publish_by</div>
                            {/* <button
                                tabIndex={-1}
                                onClick={toggleSortOrder}                               
                                className="gridjs-sort gridjs-sort-neutral"
                            /> */}
                        </th>
                        <th
                            data-column-id="price"
                            className="gridjs-th gridjs-th-sort text-muted"
                            tabIndex={0}
                            style={{ width: "160px" }}
                        >
                            <div className="gridjs-th-content">Meta_title</div>
                            {/* <button
                                tabIndex={-1}
                                onClick={toggleSortOrder}                                
                                className="gridjs-sort gridjs-sort-neutral"
                            /> */}
                        </th>

                        <th
                            data-column-id="action"
                            className="gridjs-th text-muted"
                            style={{ width: "100px" }}
                        >
                            <div className="gridjs-th-content">Actions</div>
                        </th>                       
                    </tr>
                </thead>
                <tbody className="gridjs-tbody">
                    {productListResponse && (productListResponse.map((blog, i) => {
                        return (
                            <>
                                <tr className="gridjs-tr" key={blog._id}>
                                    <td
                                        data-column-id="id"
                                        className="gridjs-td tdee"
                                    >
                                        <span>
                                            <span className="fw-semibold"> {i < 9 ? `0${i + 1}` : i + 1}</span>
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
                                                            src={blog.blog_image || ""}
                                                            alt={blog.blog_name}
                                                            className="img-fluid d-block imgob"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h5 className="fs-14 mb-1">
                                                        <Link to="#" state={blog._id}
                                                            href="apps-ecommerce-product-details.html"
                                                            className="text-dark"
                                                        >
                                                            {blog.blog_name}
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
                                        {blog.Publish_Date.slice(0,10).split("-").reverse().join("-") }
                                    </td>
                                    {/* <td data-column-id="stock" className="gridjs-td">
                  {product.brand}
                </td> */}
                                    <td data-column-id="price" className="gridjs-td">
                                        <span>{blog.Publish_By || "--"}</span>
                                    </td>
                                    <td data-column-id="price" className="gridjs-td">
                                        <span>{blog.MetaTitle || "--"}</span>
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
                                                        <Link to="" state={blog._id}
                                                            className="dropdown-item"
                                                            href="apps-ecommerce-product-details.html"
                                                        >
                                                            <i className="ri-eye-fill align-bottom me-2 text-muted" />
                                                            View
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={`/editBlog/${blog.blog_name}`} state={{ id: `${blog._id}`, namee: `${blog.blog_name}` }}
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
                                                            onClick={() => deletePost(blog._id, blog.blog_name)}
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
                    }))
                //     :(data.map((product, i) => {
                //         return (
                //             <>
                //                 <tr className="gridjs-tr" key={product._id}>
                //                     <td
                //                         data-column-id="id"
                //                         className="gridjs-td tdee"
                //                     >
                //                         <span>
                //                             <span className="fw-semibold">{`0${i + 1
                //                                 }`}</span>
                //                         </span>
                //                     </td>
                //                     {/* <td data-column-id="#" className="gridjs-td">
                //       <span>
                //         <div className="form-check checkbox-product-list">
                //           {" "}
                //           <input
                //             className="form-check-input"
                //             type="checkbox"
                //             defaultValue={1}
                //             id="checkbox-1"
                //           />{" "}
                //           <label
                //             className="form-check-label"
                //             htmlFor="checkbox-1"
                //           />{" "}
                //         </div>
                //       </span>
                //     </td> */}
                //                     <td data-column-id="product" className="gridjs-td">
                //                         <span>
                //                             <div className="d-flex align-items-center">
                //                                 <div className="flex-shrink-0 me-3">
                //                                     <div className="avatar-sm bg-light rounded p-1">
                //                                         <img
                //                                             src={product.image || ""}
                //                                             alt=""
                //                                             className="img-fluid d-block imgob"
                //                                         />
                //                                     </div>
                //                                 </div>
                //                                 <div className="flex-grow-1">
                //                                     <h5 className="fs-14 mb-1">
                //                                         <Link to={ProductDetailLink} state={product._id}
                //                                             href="apps-ecommerce-product-details.html"
                //                                             className="text-dark"
                //                                         >
                //                                             {product.product_name}
                //                                         </Link>
                //                                     </h5>
                //                                     <p className="text-muted mb-0">
                //                                         Category :{" "}
                //                                         <span className="fw-medium">{product.category}</span>
                //                                     </p>
                //                                 </div>
                //                             </div>
                //                         </span>
                //                     </td>
                //                     <td data-column-id="stock" className="gridjs-td">
                //                         {product.brand}
                //                     </td>
                //                     {/* <td data-column-id="stock" className="gridjs-td">
                //       {product.brand}
                //     </td> */}
                //                     <td data-column-id="price" className="gridjs-td">
                //                         <span>{product.subCategory || "--"}</span>
                //                     </td>
                //                     <td data-column-id="price" className="gridjs-td">
                //                         <span>{product.modalNum || "--"}</span>
                //                     </td>
                //                     <td data-column-id="action" className="gridjs-td">
                //                         <span>
                //                             <div className="dropdown">
                //                                 <button
                //                                     className="btn btn-soft-secondary btn-sm dropdown"
                //                                     type="button"
                //                                     data-bs-toggle="dropdown"
                //                                     aria-expanded="false"
                //                                 >
                //                                     <i className="ri-more-fill" />
                //                                 </button>
                //                                 <ul className="dropdown-menu dropdown-menu-end">
                //                                     <li>
                //                                         <Link to={ProductDetailLink} state={product._id}
                //                                             className="dropdown-item"
                //                                             href="apps-ecommerce-product-details.html"
                //                                         >
                //                                             <i className="ri-eye-fill align-bottom me-2 text-muted" />
                //                                             View
                //                                         </Link>
                //                                     </li>
                //                                     <li>
                //                                         <Link to={`/superAdminEditProduct/${product._id}`} state={{ id: `${product._id}`, namee: `${product.product_name}` }}
                //                                             className="dropdown-item edit-list"
                //                                             data-edit-id={1}
                //                                             href="apps-ecommerce-add-product.html"
                //                                         >
                //                                             <i className="ri-pencil-fill align-bottom me-2 text-muted" />
                //                                             Edit
                //                                         </Link>

                //                                     </li>
                //                                     <li className="dropdown-divider" />
                //                                     <li>
                //                                         <Link
                //                                             onClick={() => deletePost(product._id, product.product_name)}
                //                                             className="dropdown-item remove-list"
                //                                             href="#"
                //                                             data-id={1}
                //                                             data-bs-toggle="modal"
                //                                             data-bs-target="#removeItemModal"
                //                                         >
                //                                             <i className="ri-delete-bin-fill align-bottom me-2 text-muted" />
                //                                             Delete
                //                                         </Link>
                //                                     </li>
                //                                 </ul>
                //                             </div>
                //                         </span>
                //                     </td>
                //                     {/* <td data-column-id="action" className="gridjs-td">
                //       <span>
                //         <div className="dropdown">
                //           <button
                //             className="btn btn-soft-secondary btn-sm dropdown"
                //             type="button"
                //             data-bs-toggle="dropdown"
                //             aria-expanded="false"
                //           >
                //           /////////////
                //             Pending
                //           </button>
                //           <ul className="dropdown-menu dropdown-menu-end">
                //             <li>
                //               <a
                //                 className="dropdown-item"
                //                 href="apps-ecommerce-product-details.html"
                //               >
                //                 <i className="ri-eye-fill align-bottom me-2 text-muted" />{" "}
                //                 Active
                //               </a>
                //             </li>
                //             <li>
                //               <a
                //                 className="dropdown-item edit-list"
                //                 data-edit-id={1}
                //                 href="apps-ecommerce-add-product.html"
                //               >
                //                 <i className="ri-pencil-fill align-bottom me-2 text-muted" />{" "}
                //                 Deactive
                //               </a>
                //             </li>
                //             <li className="dropdown-divider" />
                //           </ul>
                //         </div>
                //       </span>
                //     </td> */}
                //                 </tr>
                //             </>
                //         );
                //    }))
                    }
                </tbody>
            </table>
            <ToastContainer />
        </>
    );
}

export default BlogList;
