// import { ProductCategory, featured } from "./ProductCategory";
import { useForm } from "react-hook-form";
import  {Add_Slider } from "../../api/apiEndpoints";
import FullPageLoader from "../FullPageLoader";
import axios from "../../api/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";


import { useState, useEffect, useRef, useMemo } from "react";
import Swal from "sweetalert2";

function EditSlider() {
  const [loading, setLoading] = useState(false); 
  const [slider_image, setImage] = useState(null);
  const [slider_res_image, setResimage] = useState(null);
  const [respreview, setResPreview] = useState(null);
 
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();
  // const { _id} = JSON.parse(localStorage.getItem("vendor"));
  
  const { state } = useLocation();
  // const params = useParams();
  const { id , namee} = state || {};
  console.log("edit=>", id);
  console.log("editslider=>", namee);
  const [newformdata, setFormdata] = useState({ typewriter: [{}] });
  const ref2 = useRef(null)
    useEffect(() => {
    axios.get(`/enquiry/editSlider/${id}`)
      .then(response => setFormdata({ ...response.data, image: response.data.image || null }))
      .catch(error => console.log(error));
  }, []);
  console.log("edit-slider", newformdata);

  const handleChangeinput = (event) => {
    setFormdata({...newformdata, [event.target.name]: event.target.value});
  }


const handleChange = (event) => {
  const { name, value } = event.target;
  setFormdata((prevData) => ({
    ...prevData,
    typewriter: [
      {
        ...prevData.typewriter[0],
        [name]: value,
      },
    ],
  }));
};


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
        setFormdata({ ...newformdata, slider_image: reader.result }); // Convert image to string
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      console.log("Something went wrong");
    }
  };


  const sliderImageHandler = (event) => {
    if (event.target && event.target.files[0]) {
        setResimage(event.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        setFormdata({ ...newformdata, slider_res_image: reader.result }); // Convert image to string
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      console.log("Something went wrong");
    }
  };
 
  // const parseContent = parse(content)
  
  const submitHandler = async (data) => {
  
    console.log("data===>", data);

    try {
      setLoading(true)
     

      const update_slider = await axios.put(`/enquiry/updateSlider/${id}`, newformdata, {
        // headers: { "Content-Type": "multipart/form-data" },
        headers: { "Content-Type": "application/json" },
      }); 
      setLoading(false);     
      console.log("update slider===>", update_slider.data.result);
      console.log("successful");     
      if (update_slider.status === 200) {
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
        
        navigate("/slider-list")
      }
    } catch (error) {
      setLoading(false);
      console.log("post error===>", error.message);
    }
  };
 
  return (
    <>
      {loading && <FullPageLoader loading={loading} />}
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Edit Slider</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to={"/sidebarDashboards"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Edit Slider</li>
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
              <div className="col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        Slider Tilte
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
                        name="slider_name"
                        className="form-control"
                        onChange={handleChangeinput} 
                        value={newformdata.slider_name}
                        id="product-title-input"
                        placeholder="Enter slider title"
                      
                      />
                     
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Slider Gallery</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <h5 className="fs-14 mb-1">Slider Image</h5>
                      <p className="text-muted">Edit Slider desktop image.</p>
                      <div className="text-center">
                        <div className="position-relative d-inline-block">
                          <div className="position-absolute top-100 start-100 translate-middle tramiddle">
                            <label
                              htmlFor="product-slider-input"
                              className="mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              title="Select Image"
                            >
                              <div className="avatar-xs">
                                <div className="avatar-title bg-light  border rounded-circle text-muted cursor-pointer">
                                  <img
                                    src="../assets/images/brands/buttion.png"
                                    alt="upload"
                                    className="widbut"
                                  />
                                  {/* // <i className="ri-image-fill"></i> */}
                                </div>
                              </div>
                            </label>
                            <input
                              className="form-control d-none"
                              id="product-slider-input"
                              type="file"
                              name="slider_image"
                              accept=".png, .jpg, .jpeg"
                              onChange={imageHandler}
                             
                            />
                           
                          </div>
                          <div className="avatar-lg avtlg">
                            <div className="avatar-title bg-light bgavt rounded">
                              <img
                                src={newformdata.slider_image}
                                // onChange={imageHandler}
                                id="slider-imgage"
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
                  <div className="card-body">
                    <div className="mb-4 mt-100">
                      {/* <h5 className="fs-14 mb-1">Blog Image</h5> */}
                      <p className="text-muted">Edit Slider Responsive Image.</p>
                      <div className="text-center">
                        <div className="position-relative d-inline-block">
                          <div className="position-absolute top-100 start-100 translate-middle tramiddle">
                            <label
                              htmlFor="product-resimage-input"
                              className="mb-0"
                              data-bs-toggle="tooltip"
                              data-bs-placement="right"
                              title="Select banner Image"
                            >
                              <div className="avatar-xs">
                                <div className="avatar-title bg-light  border rounded-circle text-muted cursor-pointer">
                                  <img
                                    src="../assets/images/brands/buttion.png"
                                    alt="upload"
                                    className="widbut"
                                  />
                                  {/* // <i className="ri-image-fill"></i> */}
                                </div>
                              </div>
                            </label>
                            <input
                              className="form-control d-none"
                              id="product-resimage-input"
                              type="file"
                              name="slider_res_image"
                              accept=".png, .jpg, .jpeg"
                              onChange= {sliderImageHandler}
                              // onChange={imageHandler}
                              // {...register("image", {
                              //   required: true,
                              // })}
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
                                src={newformdata.slider_res_image}
                                // onChange={imageHandler}
                                id="product-bimg"
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
                    <h5 className="card-title mb-0">Slider Short Description</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-2">
                      Edit short description For slider
                    </p>
                    <textarea
                      name="slider_discription"
                      className="form-control"
                      value={newformdata.slider_discription} 
                      onChange={handleChangeinput} 
                      placeholder="Must enter minimum of a 100 characters"
                      rows="3"
                     
                    />
                        
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs-custom card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#addproduct-metadata"
                          role="tab"
                        >
                          Slider Typewriter Effect Data
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="addproduct-metadata"
                        role="tabpanel"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                             
                              <input
                                type="text"
                                name="type1"
                                value={newformdata.typewriter[0]?.type1 || ''}
                                onChange={handleChange} 
                                className="form-control"
                                placeholder="Enter typewriter data"
                                id="meta-title-input"
                                
                               
                              />
                             
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              
                              <input
                                type="text"
                                name="type2"
                                className="form-control"
                                placeholder="Enter typewriter data"
                                value={newformdata.typewriter[0]?.type2 || ''}
                                onChange={handleChange} 
                                id="meta-keywords-input"
                               
                              />
                                                
                            </div>
                          </div>

                         
                          <div className="col-lg-6">
                            <div className="mb-3">
                              
                              <input
                                type="text"
                                name="type3"
                                className="form-control"
                                placeholder="Enter typewriter data"
                                value={newformdata.typewriter[0]?.type3 || ''}
                                onChange={handleChange} 
                                id="meta-keyword-input"
                               
                              />
                                                  
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              
                              <input
                                type="text"
                                name="type4"
                                className="form-control"
                                placeholder="Enter typewriter data"
                                value={newformdata.typewriter[0]?.type4 || ''}
                                onChange={handleChange} 
                                id="meta-keywordss-input"
                              
                              />
                                                    
                            </div>
                          </div>
                        </div>

                       
                          
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end mb-3">
                  <button type="submit" className="btn btn-success w-sm">
                    Submit
                  </button>
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

export default EditSlider;
