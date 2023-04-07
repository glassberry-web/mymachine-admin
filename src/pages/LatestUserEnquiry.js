import { latestUserEnquiry } from "../api/apiEndpoints";
import GridTable from "../components/gridTable/GridTable";
import SideBar from "../utils/SideBar";

function LatestUserEnquiry() {
  // return <GridTable title="Latest User Enquiry" />;
  return <SideBar title="Latest User Enquiry" URL={latestUserEnquiry}/>;
}

export default LatestUserEnquiry;
