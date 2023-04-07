import React from "react";
import { latestTradeEnquiry } from "../api/apiEndpoints";
import GridTable from "../components/gridTable/GridTable";
import SideBar from "../utils/SideBar";

function LatestTradeEnquiry() {
  // return <GridTable title="Latest Trade Enquiry" />;
  return <SideBar title="Latest Trade Enquiry"  URL={latestTradeEnquiry}/>;
}

export default LatestTradeEnquiry;
