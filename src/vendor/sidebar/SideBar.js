// import "./SideBar.css"
import  {  useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { Link } from "react-router-dom";
import { SideBarDataVender } from "./SideBarDataVender";
const Sidebar = ({onToggle, toggle}) => {
    const [clicked, setClicked] = useState(false);
    const handleDropdown = (index) => {
      console.log(index);
      if (clicked === index) {
        return setClicked(null);
      }
      console.log("clicked=>", clicked);
      setClicked(index);
    };
    return (
      <>
        <div
          className="app-menu navbar-menu"
          style={{ width: toggle ? "70px" : "253px" }}
        >
          {/* LOGO */}
          <div className="navbar-brand-box flexx">
            {/* Dark Logo*/}
            <a
              href="index.html"
              className="logo logo-dark"
              style={{ display: toggle ? "none" : "block" }}
            >
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="mymachinestore" />
              </span>
              <span className="logo-lg">
                <img
                  className="logoo"
                  src="assets/images/logowhite.png"
                  alt="mymachinestore"
                />
              </span>
            </a>
            {/* Light Logo*/}
            <a href="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.png" alt="mymachinestore" />
              </span>
              <span className="logo-lg">
                <img
                  className="logoo"
                  src="assets/images/logowhite.png"
                  alt="mymachinestore"
                />
              </span>
            </a>
            <div className="cursor" onClick={onToggle}>
              {toggle ? (
                <ArrowForwardOutlinedIcon style={{ margin: "27px 13px" }} />
              ) : (
                <MenuIcon style={{ marginRight: "20px" }} />
              )}
            </div>
            <button
              type="button"
              className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
              id="vertical-hover"
            >
              <i className="ri-record-circle-line" />
            </button>
          </div>
          <div id="scrollbar">
            <div className="container-fluid">
              <div id="two-column-menu"></div>

              <ul className="navbar-nav" id="navbar-nav">
                <li className="menu-title">
                  <span
                    style={{ display: toggle ? "none" : "block" }}
                    data-key="t-menu"
                  >
                    Menu
                  </span>
                </li>
                {SideBarDataVender.map((data) => {

                  return (
                    <li
                      key={data.idx}
                      onClick={() => handleDropdown(data.idx)}
                      className="nav-item"
                    >

                      <Link
                        to={"vendorAdminPanel" || "/"}
                        className="nav-link menu-link"
                        data-bs-toggle={`${data.submenu ? "collapse" : ""}`}
                        aria-expanded={`${data.submenu ? true : false}`}
                        aria-controls={data.href}
                      >
                        {data.icon}
                        <span
                          style={{ display: toggle ? "none" : "block" }}
                          data-key={data.datakey}
                        >
                          {data.title}
                        </span>
                      </Link>
                      {data.submenu && (
                        <div>
                          {clicked === data.idx &&
                            data.submenu.map((sub) => (
                              <div
                                key={sub.idx}
                                onClick={() => handleDropdown(sub.idx)}
                                className={
                                  clicked !== data.idx
                                    ? "collapse menu-dropdown"
                                    : "collapse menu-dropdown show"
                                }
                                id={sub.id}
                              >
                                <ul className="nav nav-sm flex-column">
                                  <li className="nav-item">
                                    <Link
                                      to={`/${sub.href}`}
                                      className="nav-link"
                                      data-key={sub.datakey}
                                    >
                                      {sub.title}
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            ))}
                        </div>
                      )}


                    </li>
                  );
                })}
                {/* <Link to="Companylist">Company Name</Link>
                <Link>Enquiry</Link>
                <Link>aprroved</Link>
                <Link>Company List</Link> */}
              </ul>
            </div>
            {/* Sidebar */}
          </div>
          {/* <div className="sidebar-background" /> */}
        </div>
      </>

    );
  };

  export default Sidebar;