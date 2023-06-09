// import "./NavBar.css" ;
import { Link, useNavigate } from "react-router-dom";
import { VENDOR_LOG_OUT } from "../../api/apiEndpoints";
import { ToastContainer, toast } from "react-toastify";
import axios from "../../api/axios";
import { useSelector } from "react-redux";

const NavBar = ({ toggle }) => {
  // const { userName } = useSelector((state) => state.vendorAuth);
  const { logo, userName } = JSON.parse(localStorage.getItem("vendor"));
  const navigate = useNavigate();
  const clickHandler = async (e) => {
    e.stopPropagation();
    try {
      const auth = await axios.post(VENDOR_LOG_OUT);
      if (auth.status === 200) {
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // localStorage.clear("vendor");
        navigate("/");
      }
    } catch (err) {
      console.log("message====>", err.message);
      toast.error(`${err.message}`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    navigate("/vendorAuth");
  };
  return (
    <>
      <header id="page-topbar" style={{ left: toggle ? "70px" : "250px" }}>
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              {/* LOGO */}
              <div className="navbar-brand-box horizontal-logo">
                <a href="index.html" className="logo logo-dark">
                  <span className="logo-sm">
                    <img
                      src="assets/images/logo-sm.png"
                      alt="img1"
                      height={22}
                    />
                  </span>
                  {/* <span className="logo-lg">
                <img src="assets/images/logo-dark.png" alt height={17} />
              </span> */}
                </a>
                <a href="index.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img
                      src="assets/images/logo-sm.png"
                      alt="img2"
                      height={22}
                    />
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-light.png" alt height={17} />
                  </span>
                </a>
              </div>
              <button
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                id="topnav-hamburger-icon"
              >
                {/* <span onClick={onToggle}  className={toggle? "hamburger-icon open":"hamburger-icon"}>
                    <span />
                    <span />
                    <span />
                  </span> */}
              </button>
              {/* App Search*/}
              <form className="app-search d-none d-md-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    autoComplete="off"
                    id="search-options"
                    defaultValue
                  />
                  <span className="mdi mdi-magnify search-widget-icon" />
                  <span
                    className="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
                    id="search-close-options"
                  />
                </div>
                <div
                  className="dropdown-menu dropdown-menu-lg"
                  id="search-dropdown"
                >
                  <div data-simplebar style={{ maxHeight: 320 }}>
                    {/* item*/}
                    <div className="dropdown-header">
                      <h6 className="text-overflow text-muted mb-0 text-uppercase">
                        Recent Searches
                      </h6>
                    </div>
                    <div className="dropdown-item bg-transparent text-wrap">
                      <a
                        href="index.html"
                        className="btn btn-soft-secondary btn-sm btn-rounded"
                      >
                        how to setup <i className="mdi mdi-magnify ms-1" />
                      </a>
                      <a
                        href="index.html"
                        className="btn btn-soft-secondary btn-sm btn-rounded"
                      >
                        buttons
                        <i className="mdi mdi-magnify ms-1" />
                      </a>
                    </div>
                    {/* item*/}
                    <div className="dropdown-header mt-2">
                      <h6 className="text-overflow text-muted mb-1 text-uppercase">
                        Pages
                      </h6>
                    </div>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <i className="ri-bubble-chart-line align-middle fs-18 text-muted me-2" />
                      <span>Analytics Dashboard</span>
                    </a>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <i className="ri-lifebuoy-line align-middle fs-18 text-muted me-2" />
                      <span>Help Center</span>
                    </a>
                    {/* item*/}
                    <a
                      href="javascript:void(0);"
                      className="dropdown-item notify-item"
                    >
                      <i className="ri-user-settings-line align-middle fs-18 text-muted me-2" />
                      <span>My account settings</span>
                    </a>
                    {/* item*/}
                    <div className="dropdown-header mt-2">
                      <h6 className="text-overflow text-muted mb-2 text-uppercase">
                        Members
                      </h6>
                    </div>
                    <div className="notification-list">
                      {/* item */}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item py-2"
                      >
                        <div className="d-flex">
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            className="me-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="flex-1">
                            <h6 className="m-0">Angela Bernier</h6>
                            <span className="fs-11 mb-0 text-muted">
                              Manager
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* item */}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item py-2"
                      >
                        <div className="d-flex">
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            className="me-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="flex-1">
                            <h6 className="m-0">David Grasso</h6>
                            <span className="fs-11 mb-0 text-muted">
                              Web Designer
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* item */}
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item py-2"
                      >
                        <div className="d-flex">
                          <img
                            src="assets/images/users/avatar-5.jpg"
                            className="me-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                          <div className="flex-1">
                            <h6 className="m-0">Mike Bunch</h6>
                            <span className="fs-11 mb-0 text-muted">
                              React Developer
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="text-center pt-3 pb-1">
                    <a
                      href="pages-search-results.html"
                      className="btn btn-primary btn-sm"
                    >
                      View All Results
                      <i className="ri-arrow-right-line ms-1" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="d-flex align-items-center">
              
              <div className="dropdown ms-sm-3 header-item topbar-user">
                <button
                  type="button"
                  className="btn"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="d-flex align-items-center">
                    <img
                      className="rounded-circle header-profile-user"
                      // src={logo}
                      src={logo} 
                      // src="assets/images/users/avatar-1.jpg"
                      alt="Header Avatar"
                    />
                    <span className="text-start ms-xl-2">
                      <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                        {userName}
                      </span>
                      <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">
                        Vendor
                      </span>
                    </span>
                  </span>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* item*/}
                  {/* <h6 className="dropdown-header">Welcome {userName}!</h6> */}
                  <h6 className="dropdown-header">Welcome Api!</h6>
                  <Link
                    to={"/profile"}
                    className="dropdown-item"
                    href="pages-profile.html"
                  >
                    <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />{" "}
                    <span className="align-middle">Profile</span>
                  </Link>

                  <button
                    className="dropdown-item"
                    href="#"
                    onClick={clickHandler}
                  >
                    <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />{" "}
                    <span className="align-middle" data-key="t-logout">
                      Logout
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ToastContainer />
    </>
  );
};

export default NavBar;
