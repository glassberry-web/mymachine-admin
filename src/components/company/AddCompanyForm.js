import { useForm } from "react-hook-form";
import { ADD_COMPANY_DETAILS, SUCCESS_STATUS } from "../../api/apiEndpoints";
import axios from "../../api/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

import { useEffect, useState } from "react";

function AddCompanyForm({ companyDetails, ADD_COMPANY_DETAILS, navigateTo }) {
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

    console.log("cpmmdata===>", data);

    try {
      formData.append("company_name", data.company_name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("logo", data.logo[0]);
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
      formData.append("zip", data.zip);
      formData.append("machine", data.machine);
      formData.append("customer", data.customer);
      formData.append("employees", data.employees);
      formData.append("engineer", data.engineer);

      formData.append("companyId", id);

      const detail = await axios.put(ADD_COMPANY_DETAILS, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("detail===>", detail.data.result);
      console.log("successful");
      if (detail.status === 200) {
        try {
          const statusUpdate = await axios.put(SUCCESS_STATUS, {
            id: localStorage.getItem("Approve"),
            status: "Successful",
          });
          console.log("statusUpdate===>", statusUpdate);
          if (statusUpdate.status === 200) {
            console.log("Status update successfully");
          }
        } catch (error) {
          console.log("message====>", error.message);
        }
        toast.success("Updated Successful !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate(navigateTo);
      }
    } catch (error) {
      console.log("post error===>", error.message);
    }
  };
  return (
    <form
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
                    defaultValue={companyDetails?.company_name || ""}
                    placeholder={companyDetails?.company_name || "_"}
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
                    defaultValue={companyDetails?.ownerName || ""}
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
                    defaultValue={companyDetails?.regNo || ""}
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
                    defaultValue={companyDetails?.panNo || ""}
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
                    defaultValue={companyDetails?.discription || ""}
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

                  <div className="flex-shrink-0 me-3">
                    <div className="avatar-sm bg-light rounded p-1">
                      <img
                        src=
                          {companyDetails?.logo || ""
                        }
                        alt="logo"
                        className="img-fluid d-block"
                      />
                    </div>
                    <div class="position-absolute top-73 left-53 translate-middle">
                  <label
                    for="product-image-input"
                    class="mb-0"
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Select Image"
                  >
                    <div class="avatar-xs">
                      <div class="avatar-title bg-light border rounded-circle text-muted cursor-pointer">
                        <i class="ri-image-fill"></i>
                      </div>
                    </div>
                  </label>
                  <input
                    class="form-control d-none"
                    id="product-image-input"
                    type="file"
                    name="logo"
                    // defaultValue={companyDetails?.logo || ""}
                    value={image}
                    accept=".png, .jpg, .jpeg"
                    onChange={imageHandler}
                    {...register("logo", {
                      required: false,
                    })}
                  />
                </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Nature Of Business
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    defaultValue={companyDetails?.type || ""}
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
                    defaultValue={companyDetails?.address || ""}
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
                    defaultValue={companyDetails?.country || ""}
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
                    defaultValue={companyDetails?.state || ""}
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
                    defaultValue={companyDetails?.city || ""}
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
                    defaultValue={companyDetails?.zip || ""}
                    placeholder={companyDetails?.zip || "_"}
                    {...register("zip", {
                      required: false,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">statistics</h5>
            </div>
            <div className="card-body">
              <div className="mb-3">
                {/* <div>
                  <label
                    htmlFor="choices-publish-status-input"
                    className="form-label"
                  >
                    statistics
                  </label>
                  <textarea
                    type="text"
                    rows={2}
                    name="address"
                    id="datepicker-publish-input"
                    className="form-control"
                    defaultValue={companyDetails?.employees || ""}
                    placeholder={companyDetails?.employees|| "_"}
                    {...register("employees", {
                      required: false,
                    })}
                  />
                </div> */}
              </div>
              <div className="row g-3 mb-3 ">
                <div className="col-md-6">
                  <label
                    htmlFor="choices-publish-visibility-input"
                    className="form-label"
                  >
                    Employees
                  </label>
                  <input
                    type="text"
                    name="employees"
                    id="datepicker-publish-input"
                    className="form-control"
                    defaultValue={companyDetails?.employees|| ""}
                    placeholder={companyDetails?.employees || "_"}
                    {...register("employees", {
                      required: false,
                    })}
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="choices-publish-visibility-input"
                    className="form-label"
                  >
                    Engineer
                  </label>
                  <input
                    type="text"
                    name="engineer"
                    id="datepicker-publish-input"
                    className="form-control"
                    defaultValue={companyDetails?.engineer || ""}
                    placeholder={companyDetails?.engineer || "_"}
                    {...register("engineer", {
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
                    Machines
                  </label>
                  <input
                    type="text"
                    name="machine"
                    id="datepicker-publish-input"
                    className="form-control"
                    defaultValue={companyDetails?.machine || ""}
                    placeholder={companyDetails?.machine || "_"}
                    {...register("machine", {
                      required: false,
                    })}
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="choices-publish-visibility-input"
                    className="form-label"
                  >
                    Customers
                  </label>
                  <input
                    type="text"
                    name="customer"
                    id="datepicker-publish-input"
                    className="form-control"
                    defaultValue={companyDetails?.customer || ""}
                    placeholder={companyDetails?.customer || "_"}
                    {...register("customer", {
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
                    name="emailId"
                    className="form-control"
                    id="inputEmail4"
                    defaultValue={companyDetails?.emailId || ""}
                    // defaultValue="@daveadame"
                    placeholder={companyDetails?.emailId || "_"}
                    {...register("emailId", {
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
                    defaultValue={companyDetails?.password || ""}
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
                    defaultValue={companyDetails?.managerName || ""}
                    placeholder={companyDetails?.managerName || "_"}
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
                    defaultValue={companyDetails?.phoneNo || ""}
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
                  // defaultValue={companyDetails?.managerName}

                  {...register("status", {
                    required: false,
                  })}
                >
                  <option defaultValue={companyDetails?.status || ""}>
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
    </form>
  );
}

export default AddCompanyForm;
