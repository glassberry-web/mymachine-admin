// import { ProductCategory, featured } from "./ProductCategory";
import { useForm } from "react-hook-form";
import { ADD_PRODUCT, DELETE_PRODUCT, Add_Blog } from "../../api/apiEndpoints";
import parse from "html-react-parser";
import FullPageLoader from "../FullPageLoader";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import JoditEditor from "jodit-react";
import "jodit/build/jodit.min.css";

import { useState, useEffect, useRef, useMemo } from "react";

function AddBlog() {
  const [loading, setLoading] = useState(false);
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [blog_image, setImage] = useState(null);
  const [blog_bannerimage, setBannerimage] = useState(null);
  const [banpreview, setBanPreview] = useState(null);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formData = new FormData();

  //** */ COLUDNARY
  //   const handleImage = (e) =>{
  //     setImage(e.target.files[0]);

  // }
  // const handlebannerImage = (e) =>{
  //   setBannerimage(e.target.files[0]);

  // }
  const handleImage = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setPreview(URL.createObjectURL(selectedImage));

    // if (selectedImage) {
    //   const objectUrl = URL.createObjectURL(selectedImage);
    //   setPreview(objectUrl);
    // } else {
    //   setPreview(null);
    // }
  };

  const handleBannerImage = (e) => {
    const selectedImage1 = e.target.files[0];
    setBannerimage(selectedImage1);
    setBanPreview(URL.createObjectURL(selectedImage1));
  };

  // ?CLOUDNARY END

  // console.log("img===>", image);
  // console.log("banimg==?",bannerimage);

  // const parseContent = parse(content)
  console.log("content===>", content);
  // ! handle start

  const submitHandler = async (data) => {
    console.log("data===>", data);

    try {
      setLoading(true);
      formData.append("blog_name", data.blog_name);
      formData.append("blog_shortdiscription", data.blog_shortdiscription);
      formData.append("MetaTitle", data.MetaTitle);
      formData.append("Publish_By", data.Publish_By);
      formData.append("blog_image", blog_image);
      formData.append("blog_bannerimage", blog_bannerimage);

      formData.append("Publish_Date", data.Publish_Date);

      formData.append("blog_content", content);
      formData.append("metaDescription", data.metaDescription);
      formData.append("metaKey", data.metaKey);

      const detail = await axios.post(Add_Blog, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setLoading(false);
      console.log("detail===>", detail.data.result);
      console.log("successful");
      if (detail.status === 200) {
        setLoading(false);
        toast.success("Blog Added Successfuly !", {
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

  const currentDate = new Date().toISOString().split('T')[0];

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
                <h4 className="mb-sm-0">Add Blog</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to={"/sidebarDashboards"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Blog</li>
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
                        Blog Tilte
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
                        name="blog_name"
                        className="form-control"
                        id="product-title-input"
                        placeholder="Enter blog title"
                        {...register("blog_name", {
                          required: true,
                          pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                          validate: (value) => {
                            const wordCount = value.trim().split(/\s+/).length;
                            return wordCount <= 10 && value.trim().replace(/\s+/g, ' ') === value.trim();
                          },
                        })}
                      />
                      {errors.blog_name &&
                        errors.blog_name.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.blog_name &&
                        errors.blog_name.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}
                      {errors.blog_name &&
                        errors.blog_name.type === "validate" && (
                          <p>Maximum 10 words allowed with only one space between alphabets.</p>
                        )}
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Blog Gallery</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <h5 className="fs-14 mb-1">Blog Image</h5>
                      <p className="text-muted">Add Blog main Image.</p>
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
                  <div className="card-body">
                    <div className="mb-4 mt-100">
                      {/* <h5 className="fs-14 mb-1">Blog Image</h5> */}
                      <p className="text-muted">Add Blog Banner Image.</p>
                      <div className="text-center">
                        <div className="position-relative d-inline-block">
                          <div className="position-absolute top-100 start-100 translate-middle tramiddle">
                            <label
                              htmlFor="product-bimage-input"
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
                              id="product-bimage-input"
                              type="file"
                              name="blog_bannerimage"
                              accept=".png, .jpg, .jpeg"
                              onChange={handleBannerImage}
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
                                src={banpreview}
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
                  <div className="card-body">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        Blog Description*
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
                          Meta Data
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
                              <label
                                className="form-label"
                                htmlFor="meta-title-input"
                              >
                                Meta title
                              </label>
                              <input
                                type="text"
                                name="MetaTitle"
                                className="form-control"
                                placeholder="Enter meta title"
                                id="meta-title-input"
                                
                                {...register("MetaTitle", {
                                  required: true,
                                  pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                  validate: (value) => {
                                    const wordCount = value.trim().split(/\s+/).length;
                                    return wordCount <= 10 && value.trim().replace(/\s+/g, ' ') === value.trim();
                                  },
                                })}
                              />
                               {errors.MetaTitle &&
                        errors.MetaTitle.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.MetaTitle &&
                        errors.MetaTitle.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}
                      {errors.MetaTitle &&
                        errors.MetaTitle.type === "validate" && (
                          <p>Maximum 10 words allowed with only one space between alphabets.</p>
                        )}
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="meta-keywords-input"
                              >
                                Meta Keywords
                              </label>
                              <input
                                type="text"
                                name="metaKey"
                                className="form-control"
                                placeholder="Enter meta keywords"
                                id="meta-keywords-input"
                                {...register("metaKey", {
                                  required: false,
                                  required: true,
                                  pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                                })}
                              />
                                  {errors.metaKey &&
                        errors.metaKey.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.metaKey &&
                        errors.metaKey.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}                    
                            </div>
                          </div>
                        </div>

                        <div>
                          <label
                            className="form-label"
                            htmlFor="meta-description-input"
                          >
                            Meta Description
                          </label>
                          <textarea
                            className="form-control"
                            name="metaDescription"
                            id="meta-description-input"
                            placeholder="Enter meta description"
                            rows="3"
                            {...register("metaDescription", {
                              required: false,
                              required: true,
                              pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                            })}
                          />
                                      {errors.metaDescription &&
                        errors.metaDescription.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.metaDescription &&
                        errors.metaDescription.type === "pattern" && (
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
                <div className="text-end mb-3">
                  <button type="submit" className="btn btn-success w-sm">
                    Submit
                  </button>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Publish</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <div>
                        <label
                          htmlFor="choices-publish-status-input"
                          className="form-label"
                        >
                          Publish Date
                        </label>
                        <input
                          type="date"
                          name=" Publish_Date"
                          id="datepicker-publish-input"
                          className="form-control"
                          placeholder="Enter publish date"
                          data-provider="flatpickr"
                          data-date-format="d.m.y"
                          data-enable-time
                          min={currentDate}  // Setting the minimum date as today
                          max={currentDate}  // Setting the maximum date as today
                          defaultValue={currentDate}
                          {...register("Publish_Date", {
                            required: true,
                          })}
                        />
                        {errors.Publish_Date && <p>Date is required.</p>}
                      </div>
                    </div>
                    <div className="mb-3">
                      <div>
                        <label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Publish By
                        </label>
                        <input
                          type="text"
                          name="Publish_By"
                          id="datepicker-publish-input"
                          className="form-control"
                          placeholder="Enter Publisher name"
                          {...register("Publish_By", {
                            required: true,                            
                            pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                          })}
                        />
                                      {errors.Publish_By &&
                        errors.Publish_By.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.Publish_By &&
                        errors.Publish_By.type === "pattern" && (
                          <p>
                            Only alphabets are allowed with no leading or
                            trailing spaces.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Blog Short Description</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-2">
                      Add short description For blog
                    </p>
                    <textarea
                      name="shortDiscription"
                      className="form-control"
                      placeholder="Must enter minimum of a 100 characters"
                      rows="3"
                      {...register("blog_shortdiscription", {
                        required: true,                            
                            pattern: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                      })}
                    />
                        {errors.blog_shortdiscription &&
                        errors.blog_shortdiscription.type === "required" && (
                          <p>This field is required.</p>
                        )}
                      {errors.blog_shortdiscription &&
                        errors.blog_shortdiscription.type === "pattern" && (
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

export default AddBlog;
