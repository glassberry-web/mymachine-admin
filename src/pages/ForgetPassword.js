import axios from "../api/axios";
import { useForm } from "react-hook-form";
import { useNavigate, createSearchParams, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
// import { vendorAction } from "../reducers/vendor/VendorAuthAction";
// import { useEffect } from "react";
// import { useState } from "react";
import { VENDER_RESET_PASSWORD, VENDOR_AUTH } from "../api/apiEndpoints";
import { useState } from "react";

function ForgetPassword(props) {

  // const dispatch=useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let { userId,resetToken} = useParams();

  const navigate = useNavigate();
  const logInHandler = async (data, e) => {
    try {
      e.stopPropagation();
      console.log("data===>",userId,resetToken);
      const detail = await axios.post(VENDER_RESET_PASSWORD, {
        email: data.email,
        userId,
        token:resetToken
      });
      if (detail.status === 200) {
          toast.success("Mail sent successfully !", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => {
            navigate("/vendorAuth");
         }, 1000);
      }
    } catch (err) {
      console.log("message====>",err);
      toast.error(`${err?.response?.data?.message ?err?.response?.data?.message:err?.response?.data}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

  };

  return (
    <>
      <div className="auth-page-wrapper pt-5">
        {/* auth page bg */}
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
          <div className="bg-overlay" />
          <div className="shape">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 1440 120"
            >
              <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z" />
            </svg>
          </div>
        </div>
        {/* auth page content */}
        <div className="auth-page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <a href="index.html" className="d-inline-block auth-logo">
                      <img
                        className="logoo"
                        src="/assets/images/logowhite.png"
                        alt="MyMachineStore"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card mt-4">
                  <div className="card-body p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Forgot Password</h5>
                      <p className="text-muted">
                        Enter your email address and we'll send you an email.
                      </p>
                    </div>
                    <div className="p-2 mt-4">
                      {/* <form action="https://themesbrand.com/velzon/html/interactive/index.html"> */}
                      <form onSubmit={handleSubmit(logInHandler)}>
                        <div className="mb-3">
                          <label htmlFor="username" className="form-label">
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Email"
                            {...register("email", {
                              required: true,
                              pattern: {
                                value:
                                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              },
                            })}
                          />
                          {errors.email?.type === "required" && (
                            <p role="alert" id="error">
                              Enter your valid Email Address
                            </p>
                          )}
                        </div>

                        <div className="mt-4">
                          <button
                            className="btn btn-info w-100"
                            // onClick={formSubmitHandler}
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end row */}
          </div>
          {/* end container */}
        </div>
        {/* end auth page content */}
      </div>
      <ToastContainer />
    </>
  );
}

export default ForgetPassword;
