// import axios from "../api/axios";
import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { adminAction } from "../reducers/superAdmin/SuperAdminAuthAction";
// import { SUPER_ADMIN, SUPER_ADMIN_LOG_IN } from "../api/apiEndpoints";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, createSearchParams } from "react-router-dom";
import { SUPER_ADMIN } from "../api/apiEndpoints";
import axios from "../api/axios";
const Login = () => {
  // const [res,setRes]=useState(null)
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data, e) => {
    e.stopPropagation();
    try {
      const auth = await axios.post(SUPER_ADMIN, {
        email: data.email,
        password: data.password,
      });
      console.log("auth===>", auth);
      console.log(
        "superAdminID",
        localStorage.setItem(
          "superAdminID",
          JSON.stringify(auth.data.result.id)
        )
      );
      if (auth.status === 200) {
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // navigate("/sidebarDashboards");
        navigate({
          pathname: "/sidebarDashboards",
          search: createSearchParams({
            superAdminId: auth.data.result.id
          }).toString(),
        });
      }
    } catch (err) {
      console.log("message====>", err.message);
      toast.error(`${err.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    // setRes({email:data.email,password:data.password})
    // dispatch(adminAction({email:data.email,password:data.password}));
  };
  //   console.log("res===>",res)
  //  useEffect(()=>{
  //   if(res){
  //     dispatch(adminAction(res))
  //     navigate("/superAdmin");
  //   }
  //  },[dispatch,res])
  return (
    <>
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>
        <div className="auth-page-content overflow-hidden pt-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="card overflow-hidden">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <div className="p-lg-5 p-4 auth-one-bg h-100">
                        <div className="bg-overlay"></div>
                        <div className="position-relative h-100 d-flex flex-column">
                          <div className="mb-4">
                            <a href="index.html" className="d-block">
                              <img
                                src="assets/images/logo-sm.png"
                                alt="MyMachineStore"
                                height="18"
                              />
                            </a>
                          </div>
                          <div className="mt-auto">
                            <div className="mb-3">
                              <i className="ri-double-quotes-l display-4 text-success"></i>
                            </div>

                            <div
                              id="qoutescarouselIndicators"
                              className="carousel slide"
                              data-bs-ride="carousel"
                            >
                              <div className="carousel-indicators">
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="0"
                                  className="active"
                                  aria-current="true"
                                  aria-label="Slide 1"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="1"
                                  aria-label="Slide 2"
                                ></button>
                                <button
                                  type="button"
                                  data-bs-target="#qoutescarouselIndicators"
                                  data-bs-slide-to="2"
                                  aria-label="Slide 3"
                                ></button>
                              </div>
                              <div className="carousel-inner text-center text-white-50 pb-5">
                                <div className="carousel-item active">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " The theme is really great with an amazing
                                    customer support."
                                  </p>
                                </div>
                                <div className="carousel-item">
                                  <p className="fs-15 fst-italic">
                                    " Great! Clean code, clean design, easy for
                                    customization. Thanks very much! "
                                  </p>
                                </div>
                              </div>
                            </div>
                            {/* <!-- end carousel --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end col --> */}

                    <div
                      className="col-lg-6"
                      style={{ backgroundColor: "white" }}
                    >
                      <div className="p-lg-5 p-4">
                        <div>
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p className="text-muted">Log in to your account.</p>
                        </div>

                        <div className="mt-4">
                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            // onSubmit={()=>{handleSubmit(onSubmit)}}
                            action="https://themesbrand.com/velzon/html/interactive/index.html"
                          >
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

                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="password-input"
                              >
                                Password
                              </label>
                              <div className="position-relative auth-pass-inputgroup mb-3">
                                <input
                                  name="password"
                                  type="password"
                                  className="form-control pe-5 password-input"
                                  placeholder="Enter password"
                                  id="password"
                                  {...register("password", { required: true })}
                                  aria-invalid={
                                    errors.password ? "true" : "false"
                                  }
                                />
                                {errors.password?.type === "required" && (
                                  <p role="alert" id="error">
                                    Enter valid password
                                  </p>
                                )}

                                <button
                                  className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted "
                                  type="button"
                                  id="password-addon"
                                >
                                  <i className="ri-eye-fill align-middle"></i>
                                </button>
                              </div>
                            </div>

                            <div className="mt-4">
                              <button
                                className="btn btn-info w-100"
                                // onClick={formSubmitHandler}
                                type="submit"
                              >
                                Sign In
                              </button>
                            </div>
                          </form>
                        </div>

                        {/* <div className="mt-5 text-center">
                          <p className="mb-0">
                            Don't have an account ?{" "}
                            <a
                              href="auth-signup-cover.html"
                              className="fw-semibold text-primary text-decoration-underline"
                            >
                              {" "}
                              Signup
                            </a>{" "}
                          </p>
                        </div> */}
                      </div>
                    </div>
                    {/* <!-- end col --> */}
                  </div>
                  {/* <!-- end row --> */}
                </div>
                {/* <!-- end card --> */}
              </div>
              {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end auth page content --> */}

        {/* <!-- footer --> */}
        {/* <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center">
                            <p className="mb-0">&copy;
                                <script>document.write(new Date().getFullYear())</script> Velzon. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer> */}
        {/* <!-- end Footer --> */}
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
