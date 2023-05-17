import { ProductCategory } from "../../components/product/ProductCategory";
import { useForm } from "react-hook-form";
import { AdminSignUp, COMPANY_SIGNIN_MAIL } from "../../api/apiEndpoints";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";

function AddCompany() {
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    ConPass: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    company_name: Yup.string().required("Company Name is mendatory"),
    // .oneOf([Yup.ref("company_name")], "Passwords does not match"),
    email: Yup.string().required("Email is mendatory"),
    // .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);
  const logInHandler = async (data, e) => {
    try {
      e.stopPropagation();
      const detail = await axios.post(AdminSignUp, {
        email: data.email,
        password: data.password,
        company_name: data.company_name,
      });
      console.log("detail===>", detail);
      if (detail.status === 201) {
        const superAdminvendorid = localStorage.setItem(
          "superAdminvendorid",
          JSON.stringify(detail.data.result)
        );
        try {
          const mail = await axios.post(COMPANY_SIGNIN_MAIL, {
            emailId: detail.data.emailId,
          });
          console.log("mail===>", mail);
          if (mail.status === 200) {
            toast.success("Mail Send Successfully !", {
              position: toast.POSITION.TOP_RIGHT,
            });
            navigate("/AddCompany");
          }
        } catch (error) {
          console.log("message====>", error.message);
          toast.error(`${error.message}`, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

        // const mail =await axios.post(COMPANY_SIGNIN_MAIL,{
        //   emailId: detail.data.emailAddress.emailId,
        // })
        // console.log("mail===>", mail);
        // if(mail.status === 200){
        //   toast.success("Mail Send Successfully !", {
        //     position: toast.POSITION.TOP_RIGHT,
        //   });
        // }

        console.log("vendorid===>", superAdminvendorid);
        // navigate({
        //   pathname: "/vendorAdminPanel",
        //   search: createSearchParams({
        //     vendorId: detail.data.result.vendorDetails._id,
        //   }).toString(),
        // });
        // navigate("/vendorAdminPanel")

        // toast.success("Success Notification !", {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
      }
    } catch (err) {
      console.log("message====>", err.message);
      toast.error(`${err.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    // setRes({email:data.email,password:data.password})

    // dispatch(vendorAction({email:data.email,password:data.password}));
  };

  return (
    <>
      {" "}
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Add Vendor</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to={"/sidebarDashboards"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Vendor</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card mt-4">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    {/* <h5 className="text-primary">Create Vendor Account</h5> */}
                    <h5 className="card-title mb-0"> Create Vendor Account</h5>
                  </div>
                  <div className="p-2 mt-4">
                    <form
                      className="needs-validation"
                      noValidate
                      onSubmit={handleSubmit(logInHandler)}
                    >
                      <div className="mb-3">
                        <label htmlFor="useremail" className="form-label">
                          Company Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          name="company_name"
                          className={`form-control ${
                            errors.company_name ? "is-invalid" : ""
                          }`}
                          id="useremail"
                          placeholder="Enter Company Name"
                          {...register("company_name", {
                            required: true,
                          })}
                        />
                        <div className="invalid-feedback">
                          {errors.company_name?.message}
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="useremail" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          id="useremail"
                          placeholder="Enter email address"
                          {...register("email", {
                            required: true,
                            pattern: {
                              value:
                                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                            },
                          })}
                        />
                        <div className="invalid-feedback">
                          {errors.email?.message}
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="password-input">
                          Password <span className="text-danger">*</span>
                        </label>
                        <div className="position-relative auth-pass-inputgroup">
                          <input
                            type="password"
                            name="password"
                            // className="form-control pe-5 password-input"
                            placeholder="Enter password"
                            id="password-input"
                            aria-describedby="passwordInput"
                            {...register("password", { required: true })}
                            className={`form-control ${
                              errors.password ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.password?.message}
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="password-input">
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="position-relative auth-pass-inputgroup">
                          <input
                            type="password"
                            name="ConPass"
                            // className="form-control pe-5 password-input"
                            onPaste="return false"
                            placeholder="Enter confirm password"
                            id="password-input"
                            aria-describedby="passwordInput"
                            {...register("ConPass", { required: true })}
                            className={`form-control ${
                              errors.ConPass ? "is-invalid" : ""
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.ConPass?.message}
                          </div>
                        </div>
                      </div>

                      {/* <div
                    id="password-contain"
                    className="p-3 bg-light mb-2 rounded"
                  >
                    <h5 className="fs-14">Password must contain:</h5>
                    <p id="pass-length" className="invalid fs-13 mb-2">
                      Minimum <b>8 characters</b>
                    </p>
                    <p id="pass-lower" className="invalid fs-13 mb-2">
                      At <b>lowercase</b> letter (a-z)
                    </p>
                    <p id="pass-upper" className="invalid fs-13 mb-2">
                      At least <b>uppercase</b> letter (A-Z)
                    </p>
                    <p id="pass-number" className="invalid fs-13 mb-0">
                      A least <b>number</b> (0-9)
                    </p>
                  </div> */}
                      <div className="mt-4">
                        <button className="btn btn-info w-100" type="submit">
                          Sign Up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* end card body */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />{" "}
    </>
  );
}

export default AddCompany;
