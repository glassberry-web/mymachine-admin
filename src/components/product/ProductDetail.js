import React from "react";
import { Link, useLocation } from "react-router-dom";
import ProDetailscontent from "../ProDetailscontent";
import DOMPurify from 'isomorphic-dompurify';

function ProductDetailPage({ response }) {
  const location = useLocation();
  const {name} = location.state;
  console.log("response===>",response)
  return (
    <>
      {response.map((ele) => {
        return (
          <div className="page-content" key={ele._id}>
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">Product Details</h4>
                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link to={"/vendorAdminPanel"}>Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active">
                          Product Details
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row gx-lg-5">
                        <div className="col-xl-4 col-md-8 mx-auto">
                          <div className="product-img-slider sticky-side-div">
                            <div className="swiper product-thumbnail-slider p-2 rounded bg-light">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <img
                                    src={
                                      ele.image || ""
                                    }
                                    alt="img"
                                    className="img-fluid d-block"
                                  />
                                </div>
                              </div>
                              {/* <div className="swiper-button-next" />
                            <div className="swiper-button-prev" /> */}
                            </div>
                            {/* end swiper thumbnail slide */}
                            {/* <div className="swiper product-nav-slider mt-2">
                            <div className="swiper-wrapper">
                              <div className="swiper-slide">
                                <div className="nav-slide-item ">
                                  <img src="assets/images/products/img-8.png" alt="" className="img-fluid d-block" />
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="nav-slide-item">
                                  <img src="assets/images/products/img-6.png" alt="" className="img-fluid d-block" />
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="nav-slide-item">
                                  <img src="assets/images/products/img-1.png" alt="" className="img-fluid d-block" />
                                </div>
                              </div>
                              <div className="swiper-slide">
                                <div className="nav-slide-item">
                                  <img src="assets/images/products/img-8.png" alt="" className="img-fluid d-block" />
                                </div>
                              </div>
                            </div>
                          </div> */}
                            {/* end swiper nav slide */}
                          </div>
                        </div>
                        {/* end col */}
                        <div className="col-xl-8">
                          <div className="mt-xl-0 mt-5">
                            <div className="d-flex">
                              <div className="flex-grow-1">
                                <h4>{ele.product_name}</h4>
                                <div className="hstack gap-3 flex-wrap">
                                  <div>
                                    <a
                                      href="#"
                                      className="text-primary d-block"
                                    >
                                      My Machine Store
                                    </a>
                                  </div>
                                  <div className="vr" />
                                  <div className="text-muted">
                                    Seller :
                                    <span className="text-body fw-medium">
                                      {ele.supplier}
                                    </span>
                                  </div>
                                  <div className="vr" />
                                  <div className="text-muted">
                                    Published :
                                    <span className="text-body fw-medium">
                                      {ele.Publish_Date}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              {/* <div className="flex-shrink-0">
                              <div>
                                <a href="apps-ecommerce-add-product.html" className="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit"><i className="ri-pencil-fill align-bottom" /></a>
                              </div>
                            </div> */}
                            </div>
                           
                            {/* end row */}
                            <div className="mt-4 text-muted">
                              <h5 className="fs-14">Description :</h5>
                              <p>{ele.shortDiscription}</p>
                            </div>
              
                            
                            {/* <div className="product-content mt-5">
                              <h5 className="fs-14 mb-3">
                                Product Description :
                              </h5>
                              <nav>
                                <ul
                                  className="nav nav-tabs nav-tabs-custom nav-success"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active"
                                      id="nav-speci-tab"
                                      data-bs-toggle="tab"
                                      href="#nav-speci"
                                      role="tab"
                                      aria-controls="nav-speci"
                                      aria-selected="true"
                                    >
                                      Specification
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      id="nav-detail-tab"
                                      data-bs-toggle="tab"
                                      href="#nav-detail"
                                      role="tab"
                                      aria-controls="nav-detail"
                                      aria-selected="false"
                                    >
                                      Details
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                              <div
                                className="tab-content border border-top-0 p-4"
                                id="nav-tabContent"
                              >
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-speci"
                                  role="tabpanel"
                                  aria-labelledby="nav-speci-tab"
                                >
                                  <div className="table-responsive">
                                    <table className="table mb-0">
                                      <tbody>
                                      <tr>
                                          <th scope="row">Modal Number</th>
                                          <td>{ele.modalNum}</td>
                                        </tr>
                                        <tr>
                                          <th
                                            scope="row"
                                            style={{ width: "200px" }}
                                          >
                                             Brand
                                          </th>
                                          <td> {ele.brand}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row"> Category</th>
                                          <td>{ele.category}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Sub-category</th>
                                          <td>{ele.subCategory}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Supplier</th>
                                          <td>{ele.supplier}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Color</th>
                                          <td>{ele.colour}</td>
                                        </tr>
                                       
                                        <tr>
                                          <th scope="row">Weight</th>
                                          <td>{ele.weight}</td>
                                        </tr>
                                        
                                        <tr>
                                          <th scope="row">Dimensions</th>
                                          <td>{ele.dimensions}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Position</th>
                                          <td>{ele.position}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-detail"
                                  role="tabpanel"
                                  aria-labelledby="nav-detail-tab"
                                >
                                  <div>
                                
                           <ProDetailscontent HTML = {
                               DOMPurify.sanitize(ele.product_content)
                           } /> 
                        
                                  </div>
                                </div>
                              </div>
                            </div> */}
                            {/* product-content */}
                            
                            {/* end card body */}
                          </div>
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end card body */}
                  </div>
                  {/* end card */}
                </div>
                {/* end col */}
              </div>
              <div className="row">
                <div className="col-lg-12">
                 <div className="card">
                   <div className="card-body">
                   <div className="row">
                              {/* short discriptiom */}
                              <div className="col-sm-12">
                                <div className="mt-3">
                                  <h5 className="fs-14">Features :</h5>
                                  <ul className="list-unstyled">
                                    <li className="py-1">
                                      <i className="mdi mdi-circle-medium me-1 text-muted align-middle" />{" "}
                                      {ele.discription}
                                    </li>
                                   
                                  </ul>
                                </div>
                              </div>
                              
                            </div>
                            <div className="product-content mt-5">
                              <h5 className="fs-14 mb-3">
                                Product Description :
                              </h5>
                              <nav>
                                <ul
                                  className="nav nav-tabs nav-tabs-custom nav-success"
                                  id="nav-tab"
                                  role="tablist"
                                >
                                  <li className="nav-item">
                                    <a
                                      className="nav-link active"
                                      id="nav-speci-tab"
                                      data-bs-toggle="tab"
                                      href="#nav-speci"
                                      role="tab"
                                      aria-controls="nav-speci"
                                      aria-selected="true"
                                    >
                                      Specification
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a
                                      className="nav-link"
                                      id="nav-detail-tab"
                                      data-bs-toggle="tab"
                                      href="#nav-detail"
                                      role="tab"
                                      aria-controls="nav-detail"
                                      aria-selected="false"
                                    >
                                      Details
                                    </a>
                                  </li>
                                </ul>
                              </nav>
                              <div
                                className="tab-content border border-top-0 p-4"
                                id="nav-tabContent"
                              >
                                <div
                                  className="tab-pane fade show active"
                                  id="nav-speci"
                                  role="tabpanel"
                                  aria-labelledby="nav-speci-tab"
                                >
                                  <div className="table-responsive">
                                    <table className="table mb-0">
                                      <tbody>
                                      <tr>
                                          <th scope="row">Modal Number</th>
                                          <td>{ele.modalNum}</td>
                                        </tr>
                                        <tr>
                                          <th
                                            scope="row"
                                            style={{ width: "200px" }}
                                          >
                                             Brand
                                          </th>
                                          <td> {ele.brand}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row"> Category</th>
                                          <td>{ele.category}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Sub-category</th>
                                          <td>{ele.subCategory}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Supplier</th>
                                          <td>{ele.supplier}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Color</th>
                                          <td>{ele.colour}</td>
                                        </tr>
                                       
                                        <tr>
                                          <th scope="row">Weight</th>
                                          <td>{ele.weight}</td>
                                        </tr>
                                        
                                        <tr>
                                          <th scope="row">Dimensions</th>
                                          <td>{ele.dimensions}</td>
                                        </tr>
                                        <tr>
                                          <th scope="row">Position</th>
                                          <td>{ele.position}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div
                                  className="tab-pane fade"
                                  id="nav-detail"
                                  role="tabpanel"
                                  aria-labelledby="nav-detail-tab"
                                >
                                  <div>
                                
                           <ProDetailscontent HTML = {
                               DOMPurify.sanitize(ele.product_content)
                           } /> 
                        
                                  </div>
                                </div>
                              </div>
                            </div>
                   </div>
                 </div>
                </div>
              </div>
              {/* end row */}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductDetailPage;
