import { useForm } from "react-hook-form";
import { ADD_COMPANY_DETAILS } from "../../api/apiEndpoints";
import axios from "../../api/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
// import { useDropzone } from "react-dropzone";

import { useEffect, useState } from "react";
import AddCompanyForm from "./AddCompanyForm";

function Addproduct_SuperAdmin({ companyDetails }) {
  console.log("companyDetails===>", companyDetails);
  const [image, setImage] = useState();
  // const [companyDetails, setResponse] = useState();
  const location = useLocation();
  const id = location.state;
  console.log("id===>", id);
  const navigate = useNavigate();
  // const { _id } = JSON.parse(localStorage.getItem("vendor"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHandler = (event) => {
    if (event.target && event.target.files[0]) {
      setImage(event.target.files[0]);
    } else {
      console.log("Something went wrong");
    }

    // setImage(event.target.files[0]);
  };
  console.log("img===>", image);

  const submitHandler = async (data) => {
    const formData = new FormData();

    console.log("data===>", data);

    try {
      formData.append("company_name", data.company_name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("image", image);
      formData.append("country", data.country);
      formData.append("phoneNo", data.phoneNo);
      formData.append("emailId", data.emailId);
      formData.append("ownerName", data.ownerName);
      formData.append("regNo", data.regNo);
      formData.append("panNo", data.panNo);
      formData.append("discription", data.discription);
      formData.append("type", data.type);
      formData.append("password", data.password);
      formData.append("userName", data.userName);
      formData.append("managerName", data.managerName);
      formData.append("status", data.status);
      formData.append("companyId", id);

      const detail = await axios.put(ADD_COMPANY_DETAILS, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("detail===>", detail.data.result);
      console.log("successful");
      if (detail.status === 200) {
        toast.success("Company updated Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/Companylist");
      }
    } catch (error) {
      console.log("post error===>", error.message);
    }
  };
  // const getDetail = async () => {
  //   await axios
  //     .get(`/enquiry/companyDetail?id=${id}`)
  //     .then((res) => {
  //       console.log(res?.data?.result);
  //       setResponse(res?.data?.result);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };
  // useEffect(()=>{getDetail()},[])
  // useEffect(()=>{submitHandler()},[data])

  // console.log("companyDetails==>",companyDetails)
  return (
    <>
      {/* //   {companyDetails?.map((companyDetails) => {
    //     return ( */}
      <div className="page-content" key={companyDetails?._id || ""}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Edit Vendor</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to={"/sidebarDashboards"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          {/* <form
            onSubmit={handleSubmit(submitHandler)}
            id="createproduct-form"
            noValidate
            action="/image"
            encType="multipart/form-data"
            method="POST"
          >
            <div className="row">
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0"> Company Details</h5>
                  </div>
                  <div className="card-body">
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">
                          Company Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                           defaultValue={companyDetails.company_name}
                          placeholder={companyDetails.company_name || "_"}
                          name="company_name"
                          {...register("company_name", {
                            required: false,
                          })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                          Owner Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          defaultValue={companyDetails.ownerName}
                          placeholder={companyDetails?.ownerName || "_"}
                          name="ownerName"
                          {...register("ownerName", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">
                          Registration Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          defaultValue={companyDetails.regNo}

                          placeholder={companyDetails?.regNo || "_"}
                          name="regNo"
                          {...register("regNo", {
                            required: false,
                          })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                          Pan Card Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          defaultValue={companyDetails.panNo}

                          placeholder={companyDetails?.panNo || "_"}
                          name="panNo"
                          {...register("panNo", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="mb-3">
                        <label
                          className="form-label"
                          htmlFor="manufacturer-brand-input"
                        >
                          Company Discription
                        </label>
                        <textarea
                          type="text"
                          rows="3"
                          name="discription"
                          className="form-control"
                          id="manufacturer-brand-input"
                          defaultValue={companyDetails.discription}

                          placeholder={companyDetails?.discription || "_"}
                          {...register("discription", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>

                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                          Company Logo
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="inputEmail4"
                          defaultValue={companyDetails.logo}

                          placeholder={companyDetails?.logo || "_"}
                          accept=".png, .jpg, .jpeg"
                          onChange={imageHandler}
                          name="logo"
                          {...register("logo", {
                            required: false,
                          })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">
                          Company Type
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          defaultValue={companyDetails.type}

                          placeholder={companyDetails?.type || "_"}
                          name="type"
                          {...register("type", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Address</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div>
                        <label
                          htmlFor="choices-publish-status-input"
                          className="form-label"
                        >
                          Address
                        </label>
                        <textarea
                          type="text"
                          rows={2}
                          name="address"
                          id="datepicker-publish-input"
                          className="form-control"
                          defaultValue={companyDetails.address}

                          placeholder={companyDetails?.address || "_"}
                          {...register("address", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                    <div className="row g-3 mb-3 ">
                      <div className="col-md-6">
                        <label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          id="datepicker-publish-input"
                          className="form-control"
                          defaultValue={companyDetails.country}

                          placeholder={companyDetails?.country || "_"}
                          {...register("country", {
                            required: false,
                          })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          id="datepicker-publish-input"
                          className="form-control"
                          defaultValue={companyDetails.state}

                          placeholder={companyDetails?.state || "_"}
                          {...register("state", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="datepicker-publish-input"
                          className="form-control"
                          defaultValue={companyDetails.city}
                          placeholder={companyDetails?.city || "_"}
                          {...register("city", {
                            required: false,
                          })}
                        />
                      </div>
                      <div className="col-md-6">
                        <label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Zip
                        </label>
                        <input
                          type="text"
                          name="zip"
                          id="datepicker-publish-input"
                          className="form-control"
                          defaultValue={companyDetails.zip}

                          placeholder={companyDetails?.zip || "_"}
                          {...register("zip", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end mb-3">
                  <button
                    type="submit"
                    className="btn btn-success w-sm"
                    // onClick={handleSubmit(submitHandler)}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Contact Details</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div>
                        <label htmlFor="inputEmail4" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="inputEmail4"
                          defaultValue={companyDetails.emailId}
                          // defaultValue="@daveadame"
                          placeholder={companyDetails?.emailId || "_"}
                          {...register("email", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <div>
                        <label htmlFor="inputPassword4" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          id="inputPassword4"
                          defaultValue={companyDetails.password}

                          placeholder={companyDetails?.password || "_"}
                          {...register("password", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div>
                        <label htmlFor="inputPassword4" className="form-label">
                          Manager Name
                        </label>
                        <input
                          type="text"
                          name="managerName"
                          className="form-control"
                          id="inputPassword4"
                          defaultValue={companyDetails.managerName}

                          placeholder={companyDetails?.managerName}
                          {...register("managerName", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <div>
                        <label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="number"
                          name="phoneNo"
                          id="datepicker-publish-input"
                          className="form-control"
                          defaultValue={companyDetails.phoneNo}
                          placeholder={companyDetails?.phoneNo || "_"}
                          {...register("phoneNo", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Publish</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <label
                        htmlFor="choices-publish-status-input"
                        className="form-label"
                      >
                        Status
                      </label>

                      <select
                        className="form-select"
                        id="choices-publish-status-input"
                        data-choices=""
                        data-choices-search-false=""
                        name="status"
                        // defaultValue={companyDetails.managerName}

                        {...register("status", {
                          required: false,
                        })}
                      >
                        <option defaultValue="Published">
                          {companyDetails?.status || "_"}
                        </option>
                        <option defaultValue="Scheduled">Active</option>
                        <option defaultValue="Scheduled">Deactive</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form> */}
          <AddCompanyForm companyDetails={companyDetails} ADD_COMPANY_DETAILS={ADD_COMPANY_DETAILS} navigateTo='/Companylist'/>
        </div>
      </div>
      {/* ); */}
      {/* // })} */}
      <ToastContainer />
    </>
  );
}

export default Addproduct_SuperAdmin;
