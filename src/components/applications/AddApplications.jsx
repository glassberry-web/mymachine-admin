// import { ProductCategory, featured } from "./ProductCategory";
import { useForm } from "react-hook-form";
import { Add_Application } from "../../api/apiEndpoints";
import parse from "html-react-parser";
import FullPageLoader from "../FullPageLoader";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import JoditEditor from "jodit-react";
import "jodit/build/jodit.min.css";

import { useState, useEffect, useRef, useMemo } from "react";

function AddApplications() {
  const [loading, setLoading] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [application_image, setImage] = useState(null);
  
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
 
  console.log("content===>", content);
  // ! handle start

  const submitHandler = async (data) => {
    console.log("data===>", data);

    try {
      setLoading(true);
      formData.append("application_name", data.application_name);
      formData.append("application_shortdiscription", data.application_shortdiscription);
      formData.append("application_subtitle", data.application_subtitle);      
      formData.append("application_image", application_image);
     formData.append("application_content", content);
     

      const detail = await axios.post(Add_Application, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setLoading(false);
      console.log("detail===>", detail.data.result);
      console.log("successful");
      if (detail.status === 200) {
        setLoading(false);
        toast.success("Application Added Successfuly !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // navigate("/vendorAdminPanel");
        navigate("/application-list");
      }
    } catch (error) {
      setLoading(false);
      console.log("post error===>", error.message);
    }
  };



  const buttons = ["image"];
  const editorConfig = {
    responsive: true,
    buttons: buttons,
    uploader: {
      insertImageAsBase64URI: true,
    },
  };
  return (
    <>
      {loading && <FullPageLoader loading={loading} />}
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Add Applications</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to={"/sidebarDashboards"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Applications</li>
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
                        Application Tilte
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
                        className="form-control"
                        id="application-title-input"
                        placeholder="Enter application title"
                        {...register("application_name", {
                          required: true,
                          pattern: /^[A-Za-z,.\s]+$/,
                          validate: (value) => {
                            const wordCount = value.trim().split(/\s+/).length;
                            return wordCount <= 10 && value.trim().replace(/\s+/g, ' ') === value.trim();
                          },
                        })}
                      />
                      {errors.application_name &&
                        errors.application_name.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.application_name &&
                        errors.application_name.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}
                      {errors.application_name &&
                        errors.application_name.type === "validate" && (
                          <p>Maximum 10 words allowed with only one space between alphabets.</p>
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
                        className="form-control"
                        id="application_subtitle"
                        placeholder="Enter application subtitle"
                        
                        {...register("application_subtitle", {
                            required: true,
                            pattern: /^[A-Za-z,.\s]+$/,
                            validate: (value) => {
                              const wordCount = value.trim().split(/\s+/).length;
                              return wordCount <= 15 && value.trim().replace(/\s+/g, ' ') === value.trim();
                            },
                          })}
                      />
                       {errors.application_subtitle &&
                        errors.application_subtitle.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.application_subtitle &&
                        errors.application_subtitle.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}
                      {errors.application_subtitle &&
                        errors.application_subtitle.type === "validate" && (
                          <p>Maximum 10 words allowed with only one space between alphabets.</p>
                        )}
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
                      </label>
                      {useMemo(
                        () => (
                          <JoditEditor
                            ref={editor}
                            value={content}
                            config={editorConfig}
                            onChange={(newContent) => setContent(newContent)}
                          />
                        ),
                        []
                      )}

                      {/* // {...register("product_content", {
                  //   required: true,
                  // })} */}
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
                  <div className="card-header">
                    <h5 className="card-title mb-0">Application Gallery</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <h5 className="fs-14 mb-1">Application Image</h5>
                      <p className="text-muted">Add Application main Image.</p>
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
                              id="product-image-input"
                              type="file"
                              name="blog_image"
                              accept=".png, .jpg, .jpeg"
                              onChange={handleImage}
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
                                src={preview}
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
                      Add short description For application
                    </p>
                    <textarea
                      name="application_shortdiscription"
                      className="form-control"
                      placeholder="Must enter minimum of a 100 characters"
                      rows="3"
                      {...register("application_shortdiscription", {
                        required: true,
                        pattern: /^[A-Za-z,.\s]+$/,
                        
                      })}
                    />
                     {errors.application_shortdiscription &&
                        errors.application_shortdiscription.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.application_shortdiscription &&
                        errors.application_shortdiscription.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}
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

export default AddApplications;
