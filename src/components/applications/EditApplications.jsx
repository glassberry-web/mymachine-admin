
import { useForm } from "react-hook-form";
import { Edit_Blog } from "../../api/apiEndpoints";

import FullPageLoader from "../FullPageLoader";
import axios from "../../api/axios";
import { Link, useNavigate, useParams, useLocation} from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import JoditEditor from 'jodit-react';

import { useState, useEffect, useRef, useMemo } from "react";
import Swal from "sweetalert2";
// import FadeLoader from "react-spinners/FadeLoader";
const override = {
  display: "block",
  // justifyContent:"center",
  // alignItems:"center",
  // height:"100vh",
  margin: "0 auto",
  position:"absolute",
  // zIndex:99,
  // backgroundColor : "black",
  borderColor:"red",
};

function EditApplications() {
  const [loading, setLoading] = useState(false)
  const editor = useRef(null);
  const ref = useRef(null);
  const [content, setContent] = useState('');
  const [application_image, setImage] = useState();
  const [blog_bannerimage, setBannerImage] = useState();


  const navigate = useNavigate();
  // const { _id} = JSON.parse(localStorage.getItem("vendor"));
  
  const { state } = useLocation();
  // const params = useParams();
  const { id , namee} = state || {};
  console.log("edit=>", id);
  console.log("editname=>", namee);
  const [newformdata, setFormdata] = useState({});
  const ref2 = useRef(null)
    useEffect(() => {
    axios.get(`/enquiry/editApplication/${id}`)
      .then(response => setFormdata({ ...response.data, image: response.data.image || null }))
      .catch(error => console.log(error));
  }, []);
  console.log("edit-application", newformdata);

  
  const handleChange = (event) => {
    setFormdata({...newformdata, [event.target.name]: event.target.value});
  }

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formData = new FormData();


  const imageHandler = (event) => {
    if (event.target && event.target.files[0]) {
      setImage(event.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        setFormdata({ ...newformdata, application_image: reader.result }); // Convert image to string
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      console.log("Something went wrong");
    }
  };



 
  // const parseContent = parse(content)
  console.log("content===>", content); 
  const submitHandler = async (data) => {
  
    console.log("data===>", data);

    try {
      setLoading(true)
     

      const update_application = await axios.put(`/enquiry/updateApplication/${id}`, newformdata, {
        // headers: { "Content-Type": "multipart/form-data" },
        headers: { "Content-Type": "application/json" },
      }); 
      setLoading(false);     
      console.log("update application===>", update_application.data.result);
      console.log("successful");     
      if (update_application.status === 200) {
        setLoading(false);
        // toast.success(<strong>{namee}</strong> + ' Updated Successfully!', {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `<strong>${namee}</strong> <br/> Updated Successfully!`,
          showConfirmButton: false,
          timer: 3500,
          customClass: {
            title: 'swal2-title-custom' // Custom CSS class for the title
          },
         
        })
       
        // navigate("/vendorAdminPanel");
        
        navigate("/application-list")
      }
    } catch (error) {
      setLoading(false);
      console.log("post error===>", error.message);
    }
  };
  

  const buttons = ["image"]
  // const editorConfig = {
  //   buttons: buttons,
  //   uploader: {
  //     insertImageAsBase64URI: true
  //   },  
   
  // }

  const editorConfig = useMemo(
    () => ({
      buttons: buttons,
      uploader: {
        insertImageAsBase64URI: true
      }, 
    }),
    []
);
  return (
    <>
       {loading && <FullPageLoader loading={loading}/> }
      <div className="page-content">     
     
        <div className="container-fluid">
       
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Edit Applications</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to={"/sidebarDashboards"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Applications</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
          <form
            onSubmit={handleSubmit(submitHandler)}
            id="createproduct-form"
            autoComplete="off"
            className="needs-validation"
            noValidate
            action="/image"
            encType="multipart/form-data"
            method="POST"
          >
            <div className="row">
              <div className="col-lg-7">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        Application Title
                      </label>
                      <input
                        type="hidden"
                        
                        className="form-control"
                        id="formAction"
                        name="formAction"
                        maxLength={35}
                      />
                      <input
                        type="text"
                        className="form-control d-none"
                        id="product-id-input"
                      />
                      <input
                        type="text"
                        name="application_name" 
                        value={newformdata.application_name}
                        onChange={handleChange} 
                        // defaultvalue={newformdata.product_name} 
                        //                   
                        className="form-control"
                        id="product-title-input"
                        placeholder="Enter product name"
                        // {...register("product_name", {
                        //   required: false,
                        // })}
                      />
                      {errors.name?.type === "required" && (
                        <p role="alert" id="error">
                          Enter your valid Product Name
                        </p>
                      )}
                    </div>  
                    <div>
                      <label
                        className="form-label"
                        htmlFor="product-description"
                      >
                        Application Subtitle
                      </label>

                      <input
                        type="text"
                        name="application_subtitle"
                        value={newformdata.application_subtitle}
                        onChange={handleChange} 
                        className="form-control"
                        id="application_subtitle"
                        placeholder="Enter application subtitle"
                        
                       
                      />
                      
                    </div>                 
                  </div>
                </div>

               

              
                <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        Application Description*
                      </label>{
                        <JoditEditor                
                        ref={editor}
                        value={newformdata.application_content} 
                        config={editorConfig}                    
                        onChange={(newContent) => setFormdata({...newformdata, application_content:newContent})} />
                      // useMemo(() =>(<JoditEditor
                
                      // ref={editor}
                      // value={newformdata.product_content} 
                      // config={editorConfig}                    
                      // onChange={(newContent) => setContent(newContent)} />), [content, editor])
                      }
                      
                  {/* // {...register("product_content", {
                  //   required: true,
                  // })} */}
                
                </div>
                </div>
                </div>

               
                <div className="text-end mb-3">
                  <button type="submit" className="btn btn-success w-sm">
                    Save
                  </button>
                </div>
              </div>

              <div className="col-lg-5">              
              <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Application Gallery</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <h5 className="fs-14 mb-1">Application Image</h5>
                      <p className="text-muted">Edit Application main Image.</p>
                      <div className="text-center">
                        <div className="position-relative d-inline-block">
                          <div className="position-absolute top-100 start-100 translate-middle tramiddle">
                            <label
                              htmlFor="product-image-input"
                              className="mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              title="Select Image"
                            >
                              <div className="avatar-xs">
                                <div className="avatar-title bg-light  border rounded-circle text-muted cursor-pointer">
                                  <img src="../assets/images/brands/buttion.png" alt="upload" className="widbut" />
                                  {/* // <i className="ri-image-fill"></i> */}
                                </div>
                              </div>
                            </label>
                            <input
                              className="form-control d-none"
                              id="product-image-input"
                              type="file"
                              // value={image || ""}  
                              name="application_image"
                              accept=".png, .jpg, .jpeg"
                              onChange={imageHandler}
                              
                            />
                            {/* {errors.name?.type === "required" && (
                          <p role="alert" id="error">
                            Enter Product photo
                          </p>
                        )} */}
                          </div>
                          <div className="avatar-lg avtlg">
                            <div className="avatar-title bg-light bgavt rounded">
                              <img
                                 src={newformdata.application_image}
                                // onChange={imageHandler}                    
                                id="product-img"
                                className="avatar-md avtwid h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
                

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">
                      Application Short Description
                    </h5>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-2">
                      Edit short description For Application
                    </p>
                    <textarea
                      name="application_shortdiscription"
                      value={newformdata.application_shortdiscription} 
                      onChange={handleChange} 
                      className="form-control"
                      placeholder="Must enter minimum of a 100 characters"
                      rows="3"
                      // {...register("shortDiscription", {
                      //   required: false,
                      // })}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
         
      </div>
      <ToastContainer />
    </>
  );
}

export default EditApplications;
