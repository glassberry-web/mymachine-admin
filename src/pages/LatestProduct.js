import React from "react";
import { latestProduct } from "../api/apiEndpoints";
import GridTable from "../components/gridTable/GridTable";
import SideBar from "../utils/SideBar";

function LatestProduct() {
  // return <GridTable title="Latest Products" />;
  return <SideBar title="Latest Products" URL={latestProduct} />;
}

export default LatestProduct;
