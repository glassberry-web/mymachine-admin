import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";

import ProductList from "../components/product/ProductList";
import CompanyList from "../components/company/CompanyList";
import TradeEnquiryList from "../components/enquiry/TradeEnquiryList";
import FilterButton from "./FilterButton";
import { responseDataActions } from "../reducers/filter/FilterSlice";
import UserEnquiryList from "../components/enquiry/UserEnquiryList";
import BlogList from "../components/blogs/BlogList";
import SliderList from "../components/slider/SlderList";
import ApplicationList from "../components/applications/ApplicationList";
const SideBar = ({
  title,
  onClick,
  URL,
  Filter,
  _id,
  AddProductlink,
  ProductDetailLink,
  tag,
  tag_2,
  onDelete,
  addProduct,
  AddVendorLink,
  statusHandler,
  updatedStatus,
  latestStatus,
  navigateTo,
}) => {
  console.log("linkv===>", addProduct);
  console.log("URL===>", URL === "/enquiry/superAdminProductList");
  const [response, setResponse] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [search, setSearch] = useState([]);
  const [columns, setColumns] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [isStatus, setStatus] = useState("Status");
  const [date, setDate] = useState("");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const hideShow = () => setShow(false);
  const dispatch = useDispatch();

  // const { _id } = JSON.parse(localStorage.getItem("vendor")) || "";
  // const status=useSelector((state)=>{ return state.status.status})
  // console.log("status====>",status)
  console.log("_id====>", _id);
  // console.log("pageNo===>",pageNo)
  // const URL=/enquiry/superAdminProductList;
  const enquiryDetail = async () =>
    await axios
      .get(`${URL}?page=${pageNo}&id=${_id}`)
      .then((res) => {
        console.log("res====>", res?.data);

        // setting data for the table
        setResponse(res?.data?.result);
        dispatch(responseDataActions.responseData(res?.data?.result));
        // seting columns for the data table
        let col = res?.data?.result ? Object.keys(res?.data?.result[0]) : [];
        console.log("col===>", col);
       const colslice = col.slice(1);
        setColumns(colslice);
       

        setSearch(res?.data?.result);
        setTotalPage(res?.data?.totalPages);
        setDate(res?.data?.date);
        // navigate(navigateTo)
      })
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });

  useEffect(() => {
    enquiryDetail();
  }, [pageNo, _id]);
  const products = useSelector((state) => {
    return state.data.brand;
  });
  // console.log("product====>", products);
  // setBrandFilter(products.productDetails)
  // if(products){
  //   setResponse(products.productDetails)
  // }
  const pages = new Array(totalPage).fill(null).map((_v, i) => i);

  const handleSearch = (e) => {
    let value = e.target.value;
    console.log("value---->",value)
    let result = [];
    console.log("v---->", value);
    result = response.filter((data) => {
      // return data.company_name.search(value) !== -1;
      return data.product_name.search(value) !== -1;
    });
    setSearch(result);
  };

  useEffect(() => {
    if (products?.productDetails) {
      setResponse(products?.productDetails);
    }
  }, [products]);

  console.log("response====>", response, title);
  console.log("dummy2====>", search);
  // let col_2=columns?.shift()
  // console.log("columns====>", columns.shift());
  // console.log("dummy3====>", date);
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
  console.log("isStatus===>", isStatus);
  console.log(isStatus === "pending");
  console.log("dummy3====>", search);

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title mb-0 flex-grow-1">{title}</h4>
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
                    <div className="hstack floatr gap-2">
                      {AddProductlink && (
                        <Link
                          className="btn btn-outline-primary custom-toggle"
                          to={AddProductlink}
                        >
                          <i className="ri-add-fill me-1 align-bottom"></i>
                          {addProduct}
                        </Link>
                      )}
                      {Filter === "Filter" && (
                        <a
                          type="button"
                          className="btn btn-outline-primary custom-toggle w-sm"
                          onClick={handleShow}
                        >
                          <i className="ri-add-fill me-1 align-bottom"></i>
                          Filter
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="gridjs-wrapper" style={{ height: "auto" }}>
                    {URL === "/enquiry/superAdminProductList" ? (
                      <ProductList
                        productListResponse={response}
                        ProductDetailLink = {ProductDetailLink}
                        columns={columns}
                        AddProduct ={addProduct}
                        Filter = {Filter}
                      />
                    ) :(URL === "/enquiry/superAdminCompanyList" ?
                    <CompanyList  productListResponse={response}  ProductDetailLink = {ProductDetailLink} />
                     :(URL === "/enquiry/getEnquiry" ? (
                     <TradeEnquiryList productListResponse={response} updatedStatus={updatedStatus} latestStatus={latestStatus} statusHandler={statusHandler} onClick={onClick}/>) :
                     (URL === "/enquiry/getUserEnquiry" ? (
                     <UserEnquiryList productListResponse={response} /> ):
                     (URL === "/enquiry/superAdminBlogList" ? 
                     (<BlogList productListResponse={response} />):
                     (URL === "/enquiry/superAdminSliderList" ? 
                     (<SliderList productListResponse={response} />):
                     (URL === "/enquiry/superAdminApplicationList" ? 
                     (<ApplicationList productListResponse={response} />):
                      (
                      <table
                        role="grid"
                        className="gridjs-table table table-striped"
                        style={{ height: "auto" }}
                      >
                        {response.length > 0 && (
                          <thead className="gridjs-thead">
                            <tr
                              className="gridjs-tr"
                              style={{
                                textAlign: "center",
                                textTransform: "capitalize",
                              }}
                            >
                              <th
                                data-column-id="id"
                                className="gridjs-th gridjs-th-sort "
                                tabindex={0}
                                style={{ minWidth: "44px", width: "18px" }}
                              >
                                <div class="gridjs-th-content ">Sr No</div>

                                <button
                                  tabindex={-1}
                                  aria-label="Sort column ascending"
                                  title="Sort column ascending"
                                  className="gridjs-sort gridjs-sort-neutral"
                                ></button>
                              </th>
                              {columns?.map((item) => {
                                <th
                                  key={item._id}
                                  data-column-id="id"
                                  className="gridjs-th gridjs-th-sort"
                                  tabIndex={0}
                                  style={{ minWidth: "44px", width: "47px" }}
                                >
                                  <div className="gridjs-th-content">ID</div>
                                  <button
                                    tabIndex="-1"
                                    aria-label="Sort column ascending"
                                    title="Sort column ascending"
                                    className="gridjs-sort gridjs-sort-neutral"
                                  ></button>
                                </th>;
                                return (
                                  <>
                                    <th
                                      data-column-id="id"
                                      className="gridjs-th gridjs-th-sort fw-semibold teeh"
                                      tabIndex={0}
                                      style={{
                                        minWidth: "44px",
                                        width: "47px",
                                      }}
                                      key={item._id}
                                    >
                                      <div className="gridjs-th-content">
                                        {!!item ? item : "---"}
                                      </div>
                                      <button
                                        tabIndex={-1}
                                        aria-label="Sort column ascending"
                                        title="Sort column ascending"
                                        className="gridjs-sort gridjs-sort-neutral"
                                      ></button>
                                    </th>
                                  </>
                                );
                              })}

                              {/* <th
                                data-column-id="actions"
                                className="gridjs-th gridjs-th-sort"
                                tabIndex="0"
                                style={{ width: "50px" }}
                              >
                                <div className="gridjs-th-content">Actions</div>
                                <button
                                  tabIndex="-1"
                                  aria-label="Sort column ascending"
                                  title="Sort column ascending"
                                  className="gridjs-sort gridjs-sort-neutral"
                                ></button>
                              </th> */}
                              {/* <th
                                data-column-id="status"
                                className="gridjs-th gridjs-th-sort"
                                tabIndex="0"
                                style={{ width: "50px" }}
                              >
                                <div className="gridjs-th-content">Status</div>
                                <button
                                  tabIndex="-1"
                                  aria-label="Sort column ascending"
                                  title="Sort column ascending"
                                  className="gridjs-sort gridjs-sort-neutral"
                                ></button>
                              </th> */}
                            </tr>
                          </thead>
                        )}

                        <tbody className="gridjs-tbody">
                          {search.map((item, i) => (
                            <tr className="gridjs-tr " key={item._id}>
                              <td
                                data-column-id="id"
                                className="gridjs-td tdee"
                              >
                                <span>
                                  <span className="fw-medium">{`0${
                                    i + 1
                                  }`}</span>
                                </span>
                              </td>
                              {/* { console.log("item===>", item)} */}
                              {/* {Object.values(item).map((val, i) => { */}
                              {columns.map((val, _i) => {
                                {
                                  console.log(
                                    "item23===>",

                                    item[val]
                                  );
                                }

                                return (
                                  <td
                                    data-column-id="product"
                                    className="gridjs-td tdee"
                                  >
                                    <span>
                                      <Link
                                        to={ProductDetailLink}
                                        state={item._id}
                                      >
                                        {!!item[val] ? item[val] : "--"}
                                      </Link>
                                    </span>
                                  </td>
                                );
                              })}

                              {/* <td
                                data-column-id="actions"
                                className="gridjs-td"
                              >
                                {tag ? (
                                  <Link
                                    className="btn btn-sm btn-soft-info"
                                    to={AddProductlink}
                                    state={item._id}
                                  >
                                    {tag}
                                  </Link>
                                ) : (
                                  <Link
                                    className="btn btn-sm btn-soft-info"
                                    // onClick={() => {
                                    //   console.log("id--->",item._id,item,i)
                                    //   onClick(item._id,item,i);
                                    // }}
                                    onClick={() => {
                                      clickHandler(item._id, item, i);
                                    }}
                                  >
                                    Approve
                                  </Link>
                                )}
                                <button
                                  className="btn btn-sm btn-soft-warning"
                                  onClick={() => {
                                    onDelete(item._id);
                                  }}
                                >
                                  {tag_2}
                                </button>
                              </td> */}
                              {/* <td data-column-id="status" className="gridjs-td">
                              <button
                                className="btn btn-sm btn-soft-info"
                                onClick={() => {
                                  onClick(item._id);
                                }}
                              >
                               {tag}
                              </button>
                              <button className="btn btn-sm btn-soft-warning">
                                Deny
                              </button>
                            </td> */}
                              {/* {item.status  && (
                                <td
                                  data-column-id="status"
                                  className="gridjs-td"
                                >
                                  <span className={`${item.status==="Pending" ? "badge btn-soft-warning text-uppercase": "badge btn-soft-success text-uppercase"}`}>
                                    {item.status}
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
                              )} */}

                              {/* {isStatus === "pending" &&  search.map(()=>{})(
                              <td data-column-id="status" className="gridjs-td">
                                <span className="badge badge-soft-warning text-uppercase">
                                  Pending
                                </span>
                              </td>
                            )} */}
                              {/* {isStatus !== "pending" && (
                              <td data-column-id="status" className="gridjs-td">
                                <span className="badge badge-soft-warning text-uppercase">
                                  Status
                                </span>
                              </td>
                            )} */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )))))))}
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
        {/*end row*/}
        <div className="row g-0 text-center text-sm-start align-items-center mb-3">
          <div className="col-sm-6">
            <div>
              {/* <p className="mb-sm-0">Showing 1 to 10 of 12 entries</p> */}
              <p className="mb-sm-0">Page of {pageNo + 1}</p>
            </div>
          </div>{" "}
          <div className="col-sm-6">
            <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
              <li className="page-item disabled">
                {" "}
                <a href="#" className="page-link">
                  <i className="mdi mdi-chevron-left" />
                </a>{" "}
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
        {/* end row */}
        {/* Modal */}

        {/*end modal*/}
      </div>
      <FilterButton
        hideShow={hideShow}
        title="Filter"
        show={show}
        productResponse={search}
      />
    </>
  );
};

export default SideBar;
