import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../pages/Login";
import CompanyList from "../pages/CompanyList";
import ApprovedList from "../pages/ApprovedList";
import ProductList from "../pages/ProductList";
import ProductEnquiryList from "../pages/ProductEnquiryList";
import NoMatch from "./NoMatch";
import EnquiryList from "../pages/EnquiryList";
import EnquiryMail from "../components/MailForm";
import Admin from "../vendor/Admin";
import VendorAuth from "../vendor/VendorAuth";
import Counter from "../components/Counter";
import Charts from "../components/Charts";
import EditProfile from "../components/EditProfile";
import Profile from "../pages/Profile";
import GridTable from "../components/gridTable/GridTable";
import Addproduct from "../components/product/Addproduct";
import ProductDetail from "../pages/ProductDetail";
import AddProduct from "../pages/AddProduct";

import VendorPage from "../vendor/vendorPage/VendorPage";
import VendorProtectedRoute from "./VendorProtectedRoute";
import AddCompany from "../components/company/AddCompany";
import AddVendor from "../pages/AddCompany";
import CompanyDetail from "../components/company/CompanyDetail";
import Editproduct from "../components/product/EditProduct";
import ThankYou from "../pages/ThankYou";
import Filter from "../utils/FilterForm";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/enquiryForm" element={<EnquiryMail />} />
      <Route path="/thankYou" element={<ThankYou />} />
      <Route path="/mail" element={<VendorPage />} />

      <Route path="/vendorAuth" element={<VendorAuth />} />
      {/* <Route path="/AddProduct" element={<Addproduct />} /> */}

      <Route element={<ProtectedRoute />}>
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/superAdminAddProduct" element={<Addproduct />} />
        <Route path="/superAdminEditProduct/:id" element={<Editproduct />} />
        {/* <Route path="/editProfile" element={<EditProfile />} /> */}
        <Route path="/sidebarDashboards" element={<Counter />} />
        <Route path="/sidebarDashboards" element={<Charts />} />
        <Route path="/sidebarDashboards" element={<GridTable />} />
        {/* <Route path="/profile" element={<Profile />}/> */}
        <Route path="/Companylist" element={<AddVendor/>} />
        <Route path="/Enquirylist" element={<EnquiryList />} />
        <Route path="/Productenquirylist" element={<ProductEnquiryList />} />
        <Route path="/Approvedlist" element={<ApprovedList />} />
        <Route path="/Productlist" element={<ProductList />} />
        <Route path="/AddCompany" element={<AddCompany />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/companyEditPage" element={<CompanyDetail />} />
        <Route path="/productFilter" element={<Filter />} />
        {/* <Route path="/AddProduct" element={<Addproduct />} /> */}
        {/* <Route path="/ProductDetail" element={<ProductDetail />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route element={<VendorProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/vendorAdminPanel" element={<AddProduct />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/AddProduct" element={<Addproduct />} />

        <Route path="/ProductDetail" element={<ProductDetail />} />
      </Route>
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  );
}

export default AllRoutes;
