import SideBar from "./sidebar/SideBar";
import NavBar from "./navbar/NavBar";
import AddProduct from "../pages/AddProduct";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Admin() {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div id="layout-wrapper">
      <NavBar toggle={toggle} />
      <SideBar onToggle={toggleButton} toggle={toggle} />
      {/* <MainContent /> */}
      <div className={toggle ? "ml70" : "main-content"}>
        <Outlet />
        {/* <AddProduct /> */}
      </div>
    </div>
  );
}

export default Admin;
