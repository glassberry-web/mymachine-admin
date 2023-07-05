import { useState, useEffect } from "react";
import { superAdminProductList } from "../api/apiEndpoints";
import axios from "../api/axios";
import SideBar from "../utils/SideBar";

const ProductList = () => {
  const superAdminID = localStorage.getItem("superAdminID")||"";
  console.log("superaadmin", superAdminID);
  // const [response, setResponse] = useState([]);
  // const [search, setSearch] = useState([]);
  // const [pageNo, setPageNo] = useState(0);
  // const [totalPage, setTotalPage] = useState(0);
  // const enquiryDetail = async () =>
  //   await axios
  //     .get(`/enquiry/superAdminProductList?page=${pageNo}`)
  //     .then((res) => {
  //       // console.log(res?.data?.result);
  //       setResponse(res?.data?.result);
  //       setSearch(res?.data?.result);
  //       setTotalPage(res?.data?.totalPages);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });

  // useEffect(() => {
  //   enquiryDetail();
  // }, [pageNo]);
  // const pages = new Array(totalPage).fill(null).map((v, i) => i);
  // console.log("pages===>", pages);

  // const deleteHandler = () => {};
  // console.log("response===>", response);
  // const handleSearch = (e) => {
  //   let value = e.target.value.toLowerCase();
  //   let result = [];
  //   console.log(value);
  //   result = response.filter((data) => {
  //     return data.product_name.search(value) != -1;
  //   });
  //   setSearch(result);
  // };
  // console.log("search===>", search);
  // console.log("response===>", response);
  return (
    <>
      <div className="page-content">
        <SideBar title="Product List" URL={superAdminProductList}  AddProductlink="/superAdminAddProduct" addProduct="AddProduct"  _id={ superAdminID}  ProductDetailLink="/ProductDetail" Filter="Filter"/>
      </div>

      {/* <div className="page-content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0 flex-grow-1">Product List</h4>
              <div className="card-body">
                <div id="table-gridjs">
                  <div
                    role="complementary"
                    className="gridjs gridjs-container"
                    style={{ width: "100%" }}
                  >
                    <div className="gridjs-head">
                      <div className="gridjs-search">
                        <input
                          onChange={handleSearch}
                          type="search"
                          placeholder="Type a keyword..."
                          aria-label="Type a keyword..."
                          className="gridjs-input gridjs-search-input"
                        />
                      </div>
                    </div>
                    <div className="gridjs-wrapper" style={{ height: "auto" }}>
                      <table
                        role="grid"
                        className="gridjs-table"
                        style={{ height: "auto" }}
                      >
                        <thead className="gridjs-thead">
                          <tr className="gridjs-tr">
                            <th
                              data-column-id="name"
                              className="gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "78px" }}
                            >
                              <div className="gridjs-th-content">
                                Product Name
                              </div>
                              <button
                                tabIndex="-1"
                                aria-label="Sort column ascending"
                                title="Sort column ascending"
                                className="gridjs-sort gridjs-sort-neutral"
                              ></button>
                            </th>
                            <th
                              data-column-id="name"
                              className="gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "78px" }}
                            >
                              <div className="gridjs-th-content">
                                Discription
                              </div>
                              <button
                                tabIndex="-1"
                                aria-label="Sort column ascending"
                                title="Sort column ascending"
                                className="gridjs-sort gridjs-sort-neutral"
                              ></button>
                            </th>
                            <th
                              data-column-id="name"
                              className="gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "78px" }}
                            >
                              <div className="gridjs-th-content">Price</div>
                              <button
                                tabIndex="-1"
                                aria-label="Sort column ascending"
                                title="Sort column ascending"
                                className="gridjs-sort gridjs-sort-neutral"
                              ></button>
                            </th>
                            <th
                              data-column-id="position"
                              className="gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ minWidth: "219px", width: "238px" }}
                            >
                              <div className="gridjs-th-content">Image</div>
                              <button
                                tabIndex="-1"
                                aria-label="Sort column ascending"
                                title="Sort column ascending"
                                className="gridjs-sort gridjs-sort-neutral"
                              ></button>
                            </th>

                            <th
                              data-column-id="actions"
                              className="gridjs-th gridjs-th-sort"
                              tabIndex="0"
                              style={{ width: "120px" }}
                            >
                              <div className="gridjs-th-content">Actions</div>
                              <button
                                tabIndex="-1"
                                aria-label="Sort column ascending"
                                title="Sort column ascending"
                                className="gridjs-sort gridjs-sort-neutral"
                              ></button>
                            </th>
                          </tr>
                        </thead>

                        <tbody className="gridjs-thead">
                          {search?.map((product) => (
                            <tr key={product._id} className="gridjs-tr">
                              <td data-column-id="id" className="gridjs-td">
                                {product.product_name}
                              </td>
                              <td data-column-id="id" className="gridjs-td">
                                {product.discriptrion}
                              </td>
                              <td>
                                <a href="#!">{product.price}</a>
                              </td>
                              <td data-column-id="id" className="gridjs-td">
                                <img
                                  src={`http://localhost:5001/${product?.image}`}
                                  alt="img"
                                  style={{ height: "60px", width: "60px" }}
                                ></img>
                              </td>

                              <td>
                                <div className="hstack gap-3 flex-wrap">
                                  <a className="link-success fs-22">
                                    <i className="ri-edit-2-line" />
                                  </a>
                                  <a
                                    onClick={deleteHandler}
                                    className="link-danger fs-22"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card"></div>
            </div>
          </div>
          <div className="row g-0 text-center text-sm-start align-items-center mb-3">
            <div className="col-sm-6">
              <div>
                <p className="mb-sm-0">Page of {pageNo + 1}</p>
              </div>
            </div>
            <div className="col-sm-6">
              <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                <li className="page-item disabled">
                  <a href="#" className="page-link">
                    <i className="mdi mdi-chevron-left" />
                  </a>
                </li>
                {pages.map((pageIndex) => {
                  return (
                    <li className="page-item active" key={pageIndex}>

                      <button
                        href="#"
                        className="page-link"
                        onClick={() => {
                          setPageNo(pageIndex);
                        }}
                      >
                        {pageIndex + 1}
                      </button>
                    </li>
                  );
                })}

                <li className="page-item">
                  <a href="#" className="page-link">
                    <i className="mdi mdi-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductList;
