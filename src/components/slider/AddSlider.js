// import { ProductCategory, featured } from "./ProductCategory";
import { useForm } from "react-hook-form";
import  {Add_Slider } from "../../api/apiEndpoints";
import FullPageLoader from "../FullPageLoader";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";


import { useState, useEffect, useRef, useMemo } from "react";

function AddSlider() {
  const [loading, setLoading] = useState(false); 
  const [slider_image, setImage] = useState(null);
  const [slider_res_image, setResimage] = useState(null);
  const [respreview, setResPreview] = useState(null);
 
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formData = new FormData();  
  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setPreview(URL.createObjectURL(selectedImage));   
  };

  const handleResponsiveImage = (e) => {
    const selectedImage1 = e.target.files[0];
    setResimage(selectedImage1);
    setResPreview(URL.createObjectURL(selectedImage1));
  };

 
  // ! handle start

  const submitHandler = async (data) => {
    console.log("data===>", data);

    try {
      setLoading(true);
      formData.append("slider_name", data.slider_name);
      formData.append("slider_discription", data.slider_discription);      
      formData.append("slider_image", slider_image);
      formData.append("slider_res_image", slider_res_image);
      formData.append("typewriter[0][type1]", data.type1);
      formData.append("typewriter[0][type2]", data.type2);
      formData.append("typewriter[0][type3]", data.type3);
      formData.append("typewriter[0][type4]", data.type4);
     

     
      const detail = await axios.post(Add_Slider, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setLoading(false);
      console.log("detail===>", detail.data.result);
      console.log("successful");
      if (detail.status === 200) {
        setLoading(false);
        toast.success("Slider Added Successfuly !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // navigate("/vendorAdminPanel");
        navigate("/ProductList");
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
                <h4 className="mb-sm-0">Add Slider</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to={"/sidebarDashboards"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Slider</li>
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
                  <div className="card-header">
                    <h5 className="card-title mb-0">Slider Gallery</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <h5 className="fs-14 mb-1">Slider Image</h5>
                      <p className="text-muted">Add Slider Image.</p>
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
                                    src="assets/images/brands/buttion.png"
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
                              onChange={handleImage}
                             
                            />
                           
                          </div>
                          <div className="avatar-lg avtlg">
                            <div className="avatar-title bg-light bgavt rounded">
                              <img
                                src={preview}
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
                      <p className="text-muted">Add Slider Responsive Image.</p>
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
                                    src="assets/images/brands/buttion.png"
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
                              onChange={handleResponsiveImage}
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
                                src={respreview}
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
               
                <div className="text-end mb-3">
                  <button type="submit" className="btn btn-success w-sm">
                    Submit
                  </button>
                </div>
              </div>
              
              <div className="col-lg-5">
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
                        id="product-title-input"
                        placeholder="Enter slider title"
                        {...register("slider_name", {
                          required: true,
                          pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                          validate: (value) => {
                            const wordCount = value.trim().split(/\s+/).length;
                            return wordCount <= 10 && value.trim().replace(/\s+/g, ' ') === value.trim();
                          },
                        })}
                      />
                      {errors._name &&
                        errors.slider_name.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.slider_name &&
                        errors.slider_name.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}
                      {errors.slider_name &&
                        errors.slider_name.type === "validate" && (
                          <p>Maximum 10 words allowed with only one space between alphabets.</p>
                        )}
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Slider Short Description</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-2">
                      Add short description For slider
                    </p>
                    <textarea
                      name="slider_discription"
                      className="form-control"
                      placeholder="Must enter minimum of a 100 characters"
                      rows="3"
                      {...register("slider_discription", {
                        required: true,                            
                            pattern: /^[A-Za-z]+|(?:M{0,3})(?:CM|CD|D?C{0,3})(?:XC|XL|L?X{0,3})(?:IX|IV|V?I{0,3})$/,
                            validate: (value) => {
                                const wordCount = value.trim().split(/\s+/).length;
                                return wordCount <= 35 && value.trim().replace(/\s+/g, ' ') === value.trim();
                              },
                      })}
                    />
                        {errors.slider_discription &&
                        errors.slider_discription.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.slider_discription &&
                        errors.slider_discription.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}
                         {errors.slider_discription &&
                        errors.slider_discription.type === "validate" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}
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
                                className="form-control"
                                placeholder="Enter typewriter data"
                                id="meta-title-input"
                                
                                {...register("type1", {
                                  required: true,
                                  pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                  validate: (value) => {
                                    const wordCount = value.trim().split(/\s+/).length;
                                    return wordCount <= 10 && value.trim().replace(/\s+/g, ' ') === value.trim();
                                  },
                                })}
                              />
                               {errors.type1 &&
                        errors.type1.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.type1 &&
                        errors.type1.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}
                      {errors.type1 &&
                        errors.type1.type === "validate" && (
                          <p>Maximum 10 words allowed with only one space between alphabets.</p>
                        )}
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              
                              <input
                                type="text"
                                name="type2"
                                className="form-control"
                                placeholder="Enter typewriter data"
                                id="meta-keywords-input"
                                {...register("type2", {
                                  required: false,
                                  required: true,
                                  pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                })}
                              />
                                  {errors.type2 &&
                        errors.type2.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.type2 &&
                        errors.type2.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}                    
                            </div>
                          </div>

                         
                          <div className="col-lg-6">
                            <div className="mb-3">
                              
                              <input
                                type="text"
                                name="type3"
                                className="form-control"
                                placeholder="Enter typewriter data"
                                id="meta-keyword-input"
                                {...register("type3", {
                                  required: false,
                                  required: true,
                                  pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                })}
                              />
                                  {errors.type3 &&
                        errors.type3.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.type3 &&
                        errors.type3.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}                    
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              
                              <input
                                type="text"
                                name="type4"
                                className="form-control"
                                placeholder="Enter typewriter data"
                                id="meta-keywordss-input"
                                {...register("type4", {
                                  required: false,
                                  required: true,
                                  pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                })}
                              />
                                  {errors.type4 &&
                        errors.type4.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.type4 &&
                        errors.type4.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}                    
                            </div>
                          </div>
                        </div>

                       
                          
                      </div>
                    </div>
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

export default AddSlider;
