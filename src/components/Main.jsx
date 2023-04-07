import { useState } from "react";
import { Outlet } from "react-router-dom";
// import Charts from "./Charts";
// import Counter from "./Counter";
import Footer from "./Footer";
import GridTable from "./gridTable/GridTable";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = () => {
  const [toggle, setToggle] = useState(false);
  /**
   * @func toggleButton
   * to hide/unhide side bar
   */
  const toggleButton = () => {
    setToggle((prev) => !prev);
  };
  return (
    <div id="layout-wrapper">
      <Sidebar onToggle={toggleButton} toggle={toggle} />
      <Header toggle={toggle} />
      {/* <Counter />
      <Charts /> */}
      {/* <GridTable /> */}
      <div className={toggle ? "ml70" : "main-content"}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
