import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { BiEdit } from "react-icons/bi";
import {MdDeleteOutline} from "react-icons/md"
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SideBar = ({
  title,
  onClick,
  URL,
  _id,
  AddProductlink,
  ProductDetailLink
}) => {
  console.log("link===>", AddProductlink);
  console.log("admin=>",  URL);
  const [response, setResponse] = useState([]);
  const [search, setSearch] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [date, setDate] = useState("");
  // const { _id } = JSON.parse(localStorage.getItem("vendor")) || "";
  console.log("_id====>", _id);
  // console.log("pageNo===>",pageNo)
  // const URL=/enquiry/superAdminProductList;
  const enquiryDetail = async () =>
    await axios
      .get(`${URL}?page=${pageNo}&id=${_id}`)
      .then((res) => {
        console.log(res?.data);
        setResponse(res?.data?.result);
        setSearch(res?.data?.result);
        setTotalPage(res?.data?.totalPages);
        setDate(res?.data?.date);
      })
      .catch((error) => {
        console.log(error.message);
      });

  useEffect(() => {
    enquiryDetail();
  }, [pageNo, _id]);
  const navigate = useNavigate();
  const deletePost = async(id) => {
    console.log(id);

  const deletedData = await axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      if (deletedData.status === 200) {
        toast.success("Deleted Successfully", {
          position: toast.POSITION.TOP_RIGHT,
        });   
    }
    window.location.reload();
  };

  const pages = new Array(totalPage).fill(null).map((v, i) => i);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = response.filter((data) => {
      return data. company_name.search(value) !== -1;
    });
    setSearch(result);
  };
  console.log("response====>", response, title);
  console.log("dummy2====>", search);
  console.log("dummy3====>", date);
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
                    <div className="hstack gap-2">
                      <Link className="btn btn-primary" to={AddProductlink}>
                        <i className="ri-add-fill me-1 align-bottom"></i> Add
                        Product
                      </Link>
                    </div>
                  </div>
                  <div className="gridjs-wrapper" style={{ height: "auto" }}>
                    <table
                      role="grid"
                      className="gridjs-table"
                      style={{ height: "auto" }}
                    >
                      {response.length > 0 && (
                        <thead className="gridjs-thead">
                          <tr className="gridjs-tr">
                            {Object.keys(response[0])?.map((item) => {
                              <th
                                key={item._id}
                                data-column-id="id"
                                className="gridjs-th gridjs-th-sort"
                                tabIndex="0"
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
                                    className="gridjs-th gridjs-th-sort"
                                    tabIndex="0"
                                    style={{ minWidth: "1000px", width: "150px" }}
                                    key={item._id}
                                  >
                                    <div className="gridjs-th-content">
                                      {item}
                                    </div>
                                    <button
                                      tabIndex="-1"
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
                              style={{ width: "120px" }}
                            >
                              <div className="gridjs-th-content">Date</div>
                              <button
                                tabIndex="-1"
                                aria-label="Sort column ascending"
                                title="Sort column ascending"
                                className="gridjs-sort gridjs-sort-neutral"
                              ></button>
                            </th> */}
                            {/* <th
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
                            </th> */}
                          </tr>
                        </thead>
                      )}

                      <tbody className="gridjs-tbody">
                        {search?.map((item) => (
                           
                          <tr className="gridjs-tr" key={item._id}>
                            

                            {Object.values(item).map((val) => {
                              console.log("item===>",val)
                              return (
                                <td
                                  data-column-id="product"
                                  className="gridjs-td"
                                >
                                  <span>
                                    <Link
                                      to={ProductDetailLink}
                                      state={item._id}
                                    >
                                      {val}
                                    </Link>
                                  </span>
                                </td>
                              );
                            })}
                            {/* {
                               title ==="Product List" ?( <td data-column-id="actions" className="gridjs-td">
                               <Link to={`/superAdminEditProduct/${item._id}`} state={{id:`${item._id}`}}>
                               <button
                                 className="btn btn-sm btn-soft-warning btnml" 
                             
                               >
                               <BiEdit fontSize="1.6rem" title="Edit"/>
                               </button>
                               </Link>
                               <button className="btn btn-sm btn-soft-danger" onClick={() => deletePost(item._id)}>
                               <MdDeleteOutline fontSize="1.6rem" title="Delete" />
                               </button>
                             </td>):( <td data-column-id="actions" className="gridjs-td">
                               <button
                                 className="btn btn-sm btn-soft-info"
                                 onClick={() => {
                                   onClick(item._id);
                                 }}
                               >
                                 Approve Now
                               </button>
                               <button className="btn btn-sm btn-soft-warning">
                                 Deny
                               </button>
                             </td>) } */
                            }
                            
                           
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
      <ToastContainer />
    </>
  );
};

export default SideBar;
