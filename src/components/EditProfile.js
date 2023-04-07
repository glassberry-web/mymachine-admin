import { useForm } from "react-hook-form";
import axios from "../api/axios";

function EditProfile(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const editHandler = async (data) => {
  //   await axios
  //     .put(`/enquiry/edit`, {
  //      ...data
  //     })
  //     .then((res) => console.log(res))
  //     .catch((error) => {
  //       console.log("error=>>", error);
  //     });
  // }
  const editHandler=()=>{

  }
  const data = JSON.parse(localStorage.getItem("data"));
  console.log("data==>", data);
  return data?.map((ele) => {
    return (
      // <div className="main-content">
        <div className="page-content"  key={ele._id}>
          <div className="container-fluid">
            <div className="position-relative mx-n4 mt-n4">
              <div className="profile-wid-bg profile-setting-img">
                <img
                  src="assets/images/profile-bg.jpg"
                  className="profile-wid-img"
                  alt=""
                />
                <div className="overlay-content">
                  <div className="text-end p-3">
                    <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                      <input
                        id="profile-foreground-img-file-input"
                        type="file"
                        className="profile-foreground-img-file-input"
                      />
                      <label
                        htmlFor="profile-foreground-img-file-input"
                        className="profile-photo-edit btn btn-light"
                      >
                        <i className="ri-image-edit-line align-bottom me-1" />{" "}
                        Change Cover
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-3">
                <div className="card mt-n5">
                  <div className="card-body p-4">
                    <div className="text-center">
                      <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                        <img
                          src="assets/images/users/avatar-1.jpg"
                          className="rounded-circle avatar-xl img-thumbnail user-profile-image"
                          alt="user-profile-image"
                        />
                        <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                          <input
                            id="profile-img-file-input"
                            type="file"
                            className="profile-img-file-input"
                          />
                          <label
                            htmlFor="profile-img-file-input"
                            className="profile-photo-edit avatar-xs"
                          >
                            <span className="avatar-title rounded-circle bg-light text-body">
                              <i className="ri-camera-fill" />
                            </span>
                          </label>
                        </div>
                      </div>
                      <h5 className="fs-16 mb-1">{ele.userName}</h5>
                      <p className="text-muted mb-0">Vendor</p>
                    </div>
                  </div>
                </div>
                {/*end card*/}
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-0">
                          Complete Your Profile
                        </h5>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href="javascript:void(0);"
                          className="badge bg-light text-primary fs-12"
                        >
                          <i className="ri-edit-box-line align-bottom me-1" />{" "}
                          Edit
                        </a>
                      </div>
                    </div>
                    <div className="progress animated-progress custom-progress progress-label">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "30%" }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="label">30%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-4">
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-0">Portfolio</h5>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href="javascript:void(0);"
                          className="badge bg-light text-primary fs-12"
                        >
                          <i className="ri-add-fill align-bottom me-1" /> Add
                        </a>
                      </div>
                    </div>
                    <div className="mb-3 d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                          <i className="ri-github-fill" />
                        </span>
                      </div>
                      <input
                        type="email"
                        className="form-control"
                        id="gitUsername"
                        placeholder="Username"
                        defaultValue="@daveadame"
                      />
                    </div>
                    <div className="mb-3 d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-primary">
                          <i className="ri-global-fill" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="websiteInput"
                        placeholder="www.example.com"
                        defaultValue="www.velzon.com"
                      />
                    </div>
                    <div className="mb-3 d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-success">
                          <i className="ri-dribbble-fill" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="dribbleName"
                        placeholder="Username"
                        defaultValue="@dave_adame"
                      />
                    </div>
                    <div className="d-flex">
                      <div className="avatar-xs d-block flex-shrink-0 me-3">
                        <span className="avatar-title rounded-circle fs-16 bg-danger">
                          <i className="ri-pinterest-fill" />
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="pinterestName"
                        placeholder="Username"
                        defaultValue="Advance Dave"
                      />
                    </div>
                  </div>
                </div>
                {/*end card*/}
              </div>
              {/*end col*/}
              <div className="col-xxl-9">
                <div className="card mt-xxl-n5">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#personalDetails"
                          role="tab"
                        >
                          Personal Details
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body p-4">
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="personalDetails"
                        role="tabpanel"
                      >
                        <form onSubmit={handleSubmit(editHandler())}>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="firstnameInput"
                                  className="form-label"
                                >
                                  Company Name
                                </label>
                                <input
                                  name="companyName"
                                  type="text"
                                  className="form-control"
                                  id="firstnameInput"
                                  placeholder="Enter your Company Name"
                                  defaultValue={ele.company_name}
                                  {...register("companyName", {
                                    required: false,
                                  })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="lastnameInput"
                                  className="form-label"
                                >
                                  {" "}
                                  Owner Name
                                </label>
                                <input
                                  name="ownerName"
                                  type="text"
                                  className="form-control"
                                  id="lastnameInput"
                                  placeholder="Enter your  Owner Name"
                                  defaultValue={ele.ownerName}
                                  {...register("ownerName", {
                                    required: false,
                                  })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="emailInput"
                                  className="form-label"
                                >
                                  E-mail
                                </label>
                                <input
                                  name="email"
                                  className="form-control"
                                  id="emailInput"
                                  placeholder="Enter your E-mail"
                                  defaultValue={ele.emailId}
                                  {...register("email", {
                                    required: false,
                                    pattern: {
                                      value:
                                        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    },
                                  })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <label
                                  htmlFor="emailInput"
                                  className="form-label"
                                >
                                  Mobile Number
                                </label>
                                <input
                                  name="mobileNo"
                                  type="number"
                                  className="form-control"
                                  id="emailInput"
                                  placeholder="Enter your email"
                                  defaultValue={ele.mobileNo}
                                  {...register("mobileNo", {
                                    required: false,
                                  })}
                                />
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="mb-3">
                                <label
                                  htmlFor="skillsInput"
                                  className="form-label"
                                >
                                  Skills
                                </label>
                                <select
                                  className="form-control"
                                  name="skillsInput"
                                  data-choices
                                  data-choices-text-unique-true
                                  multiple
                                  id="skillsInput"
                                >
                                  <option value="illustrator">
                                    Illustrator
                                  </option>
                                  <option value="photoshop">Photoshop</option>
                                  <option value="css">CSS</option>
                                  <option value="html">HTML</option>
                                  <option value="javascript" selected>
                                    Javascript
                                  </option>
                                  <option value="python">Python</option>
                                  <option value="php">PHP</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="designationInput"
                                  className="form-label"
                                >
                                  Registration Number
                                </label>
                                <input
                                  name="regNo"
                                  type="text"
                                  className="form-control"
                                  id="designationInput"
                                  placeholder="Designation"
                                  defaultValue={ele.regNo}
                                  {...register("regNo", {
                                    required: false,
                                  })}
                                />
                              </div>
                            </div>

                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="cityInput"
                                  className="form-label"
                                >
                                  Pan Card Number
                                </label>
                                <input
                                  name="panNo"
                                  type="text"
                                  className="form-control"
                                  id="cityInput"
                                  placeholder="City"
                                  defaultValue={ele.panNo}
                                  {...register("panNo", {
                                    required: false,
                                  })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="cityInput"
                                  className="form-label"
                                >
                                  Type
                                </label>
                                <input
                                  name="type"
                                  type="text"
                                  className="form-control"
                                  id="cityInput"
                                  placeholder="City"
                                  defaultValue={ele.type}
                                  {...register("type", {
                                    required: false,
                                  })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="countryInput"
                                  className="form-label"
                                >
                                  Address
                                </label>
                                <input
                                  name="address"
                                  type="text"
                                  className="form-control"
                                  id="countryInput"
                                  placeholder="Country"
                                  defaultValue={ele.address}
                                  {...register("address", {
                                    required: false,
                                  })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="countryInput"
                                  className="form-label"
                                >
                                  City
                                </label>
                                <input
                                  name="city"
                                  type="text"
                                  className="form-control"
                                  id="countryInput"
                                  placeholder="Country"
                                  defaultValue={ele.city}
                                  {...register("city", {
                                    required: false,
                                  })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-4">
                              <div className="mb-3">
                                <label
                                  htmlFor="countryInput"
                                  className="form-label"
                                >
                                  State
                                </label>
                                <input
                                  name="state"
                                  type="text"
                                  className="form-control"
                                  id="countryInput"
                                  placeholder="Country"
                                  defaultValue={ele.state}
                                  {...register("state", {
                                    required: false,
                                  })}
                                />
                              </div>
                            </div>

                            <div className="col-lg-12">
                              <div className="mb-3 pb-2">
                                <label
                                  htmlFor="exampleFormControlTextarea"
                                  className="form-label"
                                >
                                  Description
                                </label>
                                <textarea
                                  name="discription"
                                  className="form-control"
                                  id="exampleFormControlTextarea"
                                  placeholder="Enter your description"
                                  rows={3}
                                  defaultValue={ele.discription}
                                  {...register("discription", {
                                    required: false,
                                  })}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="hstack gap-2 justify-content-end">
                                <button
                                  type="submit"
                                  className="btn btn-primary"
                                >
                                  Updates
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-soft-info"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/*end tab-pane*/}
                      {/*end tab-pane*/}
                    </div>
                  </div>
                </div>
              </div>
              {/*end col*/}
            </div>
            {/*end row*/}
          </div>
          {/* container-fluid */}
        </div>
      // </div>
    );
  });
}

export default EditProfile;
