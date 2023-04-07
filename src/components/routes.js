import Admin from "../pages/Admin";
import ApprovedList from "../pages/ApprovedList";
import CompanyList from "../pages/CompanyList";
import EnquiryList from "../pages/EnquiryList";
import Login from "../pages/Login";
import ProductEnquiryList from "../pages/ProductEnquiryList";
import ProductList from "../pages/ProductList";

const routes =[
    { path:"/",  component:<Admin />},
    {path:'CompanyList', component:<CompanyList />},
    {path:'EnquiryList', component:<EnquiryList />},
    {path:'ApprovedList', component:<ApprovedList />},
    {path:'ProductList', component:<ProductList />},
    {path:'ProductEnquiryList', component:<ProductEnquiryList />}
    


];
export default routes;
