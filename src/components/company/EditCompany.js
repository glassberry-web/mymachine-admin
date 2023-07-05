import { useForm } from "react-hook-form";
import { ADD_COMPANY_DETAILS } from "../../api/apiEndpoints";
import axios from "../../api/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
// import { useDropzone } from "react-dropzone";

import { useEffect, useState } from "react";
import AddCompanyForm from "./AddCompanyForm";

function Addproduct_SuperAdmin({ companyDetails }) {
  console.log("companyDetails===>", companyDetails);
  const [image, setImage] = useState();
  // const [companyDetails, setResponse] = useState();
  const location = useLocation();
  const id = location.state;
  console.log("id===>", id);
  const navigate = useNavigate();
  // const { _id } = JSON.parse(localStorage.getItem("vendor"));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHandler = (event) => {
    if (event.target && event.target.files[0]) {
      setImage(event.target.files[0]);
    } else {
      console.log("Something went wrong");
    }

    // setImage(event.target.files[0]);
  };
  console.log("img===>", image);

  const submitHandler = async (data) => {
    const formData = new FormData();

    console.log("data===>", data);

    try {
      formData.append("company_name", data.company_name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("image", image);
      formData.append("country", data.country);
      formData.append("phoneNo", data.phoneNo);
      formData.append("emailId", data.emailId);
      formData.append("ownerName", data.ownerName);
      // formData.append("company_description", content)
      formData.append("regNo", data.regNo);
      formData.append("panNo", data.panNo);
      formData.append("discription", data.discription);
      formData.append("type", data.type);
      formData.append("password", data.password);
      formData.append("userName", data.userName);
      formData.append("managerName", data.managerName);
      formData.append("status", data.status);
      formData.append("companyId", id);

      const detail = await axios.put(ADD_COMPANY_DETAILS, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("detail===>", detail.data.result);
      console.log("successful");
      if (detail.status === 200) {
        toast.success("Company updated Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/Companylist");
      }
    } catch (error) {
      console.log("post error===>", error.message);
    }
  };
 
  return (
    <>
      {/* //   {companyDetails?.map((companyDetails) => {
    //     return ( */}
      <div className="page-content" key={companyDetails?._id || ""}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Edit Vendor</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to={"/sidebarDashboards"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
         
          <AddCompanyForm companyDetails={companyDetails} ADD_COMPANY_DETAILS={ADD_COMPANY_DETAILS} navigateTo='/Companylist'/>
        </div>
      </div>
      {/* ); */}
      {/* // })} */}
      <ToastContainer />
    </>
  );
}

export default Addproduct_SuperAdmin;
