import { ProductCategory, featured } from "./ProductCategory";
import { useForm } from "react-hook-form";
import { ADD_PRODUCT, DELETE_PRODUCT } from "../../api/apiEndpoints";
import parse from 'html-react-parser';
import FullPageLoader from "../FullPageLoader";
import axios from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import JoditEditor from 'jodit-react';
import 'jodit/build/jodit.min.css';

import { useState, useEffect, useRef, useMemo } from "react";

function Addproduct() {
  const [loading, setLoading] = useState(false)
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [image, setImage] = useState();
  const [preview, setPreview] = useState()
  const [category, SetCategory] = useState('--Category--');
  const [subcat, SetSubCat] = useState('');
  const [subcategory, SetSubCategory] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();
  // const { _id} = JSON.parse(localStorage.getItem("vendor" || ""));

  const changeCategory = (event) =>{
    SetCategory(event.target.value);
    console.log("category", category);
    SetSubCategory(ProductCategory.find(cat => cat.Category === event.target.value).subCategory);
  }
  const changeState = (event) => {
    SetSubCat(event.target.value);
    subcat === undefined  ? SetSubCat("") :  SetSubCat(event.target.value);
  }
  useEffect(() => {
    if (!image) {
        setPreview(undefined)
        return
    }

    const objectUrl = URL.createObjectURL(image)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
}, [image])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formData = new FormData();

  // COLUDNARY
  const handleImage = (e) =>{
    setImage(e.target.files[0]);
    // const file = e.target.files[0];
    // setFileToBase(file);
    // console.log(file);
}

// const setFileToBase = (file) =>{
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onloadend = () =>{
//         setImage(reader.result);
//     }

// }
  // CLOUDNARY END
  const imageHandler = async(event) => {
    const file = event.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64)
    setImage({ ...image, image : base64 })

   
    // if (event.target && event.target.files[0]) {
    //   setImage(event.target.files[0]);
    //   setImage({files: [...event.target.files]}); comment
    // } else {
    //   console.log("Something went wrong");
    // }

    // setImage(event.target.files[0]); comment
  };
  console.log("img===>", image);
 
  // const parseContent = parse(content)
  console.log("content===>", content); 
  const submitHandler = async (data) => {
    console.log("data===>", data);

    try {
      setLoading(true)
      formData.append("product_name", data.product_name);
      formData.append("discription", data.discription);
      formData.append("MetaTitle", data.MetaTitle);
      formData.append("Publish_By", data.Publish_By);
      formData.append("image", image);
      // try {
      //   const response = await axios.post('/addProduct', formData);
      //   setImageUrl(response.data);
      //   console.log(`Image URL: ${response.data}`);
      // } catch (error) {
      //   console.log(error);
      // }
          
      formData.append("Publish_Date", data.Publish_Date);
      formData.append("Updated_On", data.Updated_On);
      formData.append("brand", data.brand);
      formData.append("product_content",  content);
      // formData.append("product_content",  parseContent.props.children);
      formData.append("category", category);
      formData.append("subCategory", subcat);
      formData.append('featured', data.featured)
      formData.append("colour", data.colour);
      formData.append("manufacturerName", data.manufacturerName);
      formData.append("metaDescription", data.metaDescription);
      formData.append("metaKey", data.metaKey);
      formData.append("modalNum", data.modalNum);
      formData.append("dimensions", data.dimensions);
      formData.append("position", data.position);
      formData.append("supplier", data.supplier);
      formData.append("power", data.power);
      formData.append("weight", data.weight);
      formData.append("shortDiscription", data.shortDiscription);
      // formData.append("_id", _id);

      const detail = await axios.post(ADD_PRODUCT, formData, {
        headers: {"Content-Type": "multipart/form-data"},
      });  
      setLoading(false);      
      console.log("detail===>", detail.data.result);
      console.log("successful");
      if (detail.status === 200) {
        setLoading(false);  
        toast.success("Product Added Successfuly !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // navigate("/vendorAdminPanel");
        navigate("/ProductList")
      }
    } catch (error) {
      setLoading(false);  
      console.log("post error===>", error.message);
    }
  };
  

  const buttons = ["image"]
  const editorConfig = {
    responsive: true,
    buttons: buttons,
    uploader: {
      insertImageAsBase64URI: true
    },
   
  }
  return (
    <>
    {loading && <FullPageLoader loading={loading}/> }
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Add Product</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to={"/sidebarDashboards"}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Product</li>
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
                        Product Name
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
                        name="product_name"
                        className="form-control"
                        id="product-title-input"
                        placeholder="Enter product name"
                        {...register("product_name", {
                          required: true,
                        })}
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
                        Product Features
                      </label>

                      <textarea
                        type="text"
                        name="discription"
                        className="form-control"
                        id="product-description"
                        placeholder="Enter product features"
                        rows="3"
                        {...register("discription", {
                          required: true,
                        })}
                      />
                      {errors.name?.type === "required" && (
                        <p role="alert" id="error">
                          Enter your valid Product features
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Product Gallery</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-4">
                      <h5 className="fs-14 mb-1">Product Image</h5>
                      <p className="text-muted">Add Product main Image.</p>
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
                                  <img src="assets/images/brands/buttion.png" alt="upload" className="widbut" />
                                  {/* // <i className="ri-image-fill"></i> */}
                                </div>
                              </div>
                            </label>
                            <input
                              className="form-control d-none"
                              id="product-image-input"
                              type="file"                              
                              name="image"
                              accept=".png, .jpg, .jpeg"
                              onChange = {handleImage}
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
                    {/* //product Gallery */}
                    {/* <div>
                                          <h5 className="fs-14 mb-1">Product Gallery</h5>
                                          <p className="text-muted">Add Product Gallery Images.</p>

                                          <div class="dropzone dz-clickable">

                                              <div class="dz-message needsclick">
                                                  <div class="mb-3">
                                                      <i class="display-4 text-muted ri-upload-cloud-2-fill"></i>
                                                  </div>

                                                  <h5>Drop files here or click to upload.</h5>
                                              </div>
                                          </div>

                                          <ul className="list-unstyled mb-0" id="dropzone-preview">
                                              <li className="mt-2" id="dropzone-preview-list">
                                                  <div className="border rounded">
                                                      <div className="d-flex p-2">
                                                          <div className="flex-shrink-0 me-3">
                                                              <div className="avatar-sm bg-light rounded">
                                                                  <img data-dz-thumbnail className="img-fluid rounded d-block" src="#" alt="Product-Image" />
                                                              </div>
                                                          </div>
                                                          <div className="flex-grow-1">
                                                              <div className="pt-1">
                                                                  <h5 className="fs-14 mb-1" data-dz-name>&nbsp;</h5>
                                                                  <p className="fs-13 text-muted mb-0" data-dz-size></p>
                                                                  <strong className="error text-danger" data-dz-errormessage></strong>
                                                              </div>
                                                          </div>
                                                          <div className="flex-shrink-0 ms-3">
                                                              <button data-dz-remove className="btn btn-sm btn-danger">Delete</button>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div> */}
                  </div>
                </div>
                <div className="card">
                <div className="card-body">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        Product Description*
                      </label>{
                      useMemo(() => (<JoditEditor
                
                      ref={editor}
                      value={content}
                      config={editorConfig}                    
                      onChange={(newContent) => setContent(newContent)} />), [])
                      }
                      
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
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#addproduct-general-info"
                          role="tab"
                        >
                          General Info
                        </a>
                      </li>
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
                        id="addproduct-general-info"
                        role="tabpanel"
                      >
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="manufacturer-name-input"
                          >
                            Manufacturer Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="manufacturer-name-input"
                            name="manufacturerName"
                            placeholder="Enter manufacturer name"
                            {...register("manufacturerName", {
                              required: false,
                            })}
                          />
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-brand-input"
                              >
                                Manufacturer Brand
                              </label>
                              <input
                                type="text"
                                name="brand"
                                className="form-control"
                                id="manufacturer-brand-input"
                                placeholder="Enter manufacturer brand"
                                {...register("brand", {
                                  required: false,
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-brand-input"
                              >
                                Modal Number
                              </label>
                              <input
                                type="text"
                                name="modalNum"
                                className="form-control"
                                id="manufacturer-brand-input"
                                placeholder="Enter Product Modal Number"
                                {...register("modalNum", {
                                  required: false,
                                })}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-brand-input"
                              >
                                Power
                              </label>
                              <input
                                type="text"
                                name="power"
                                className="form-control"
                                id="manufacturer-brand-input"
                                placeholder="Enter Producut Power"
                                {...register("power", {
                                  required: false,
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-brand-input"
                              >
                                Dimensions
                              </label>
                              <input
                                type="text"
                                name="dimensions"
                                className="form-control"
                                id="manufacturer-brand-input"
                                placeholder="Enter product Dimensions"
                                {...register("dimensions", {
                                  required: false,
                                })}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-3 col-sm-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="stocks-input"
                              >
                                Weight
                              </label>
                              <input
                                type="text"
                                name="weight"
                                className="form-control"
                                id="stocks-input"
                                placeholder="Weight"
                                {...register("weight", {
                                  required: false,
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="stocks-input"
                              >
                                Colour
                              </label>
                              <input
                                type="text"
                                name="colour"
                                className="form-control"
                                id="stocks-input"
                                placeholder="Colour"
                                {...register("colour", {
                                  required: false,
                                })}
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-sm-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="stocks-input"
                              >
                                X/Y axis Positioning
                              </label>
                              <input
                                type="text"
                                name="position"
                                className="form-control"
                                id="stocks-input"
                                // placeholder="SKU Number"
                                {...register("position", {
                                  required: false,
                                })}
                              />
                            </div>
                          </div>

                          <div className="col-lg-3 col-sm-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="orders-input"
                              >
                                Supplier
                              </label>
                              <input
                                type="text"
                                name="supplier"
                                className="form-control"
                                id="orders-input"
                                placeholder="Supplier"
                                {...register("supplier", {
                                  required: false,
                                })}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane"
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
                                  required: false,
                                })}
                              />
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
                                })}
                              />
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
                            })}
                          ></textarea>
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
                          {...register("Publish_Date", {
                            required: true,
                          })}
                        />
                        {errors.name?.type === "required" && (
                          <p role="alert" id="error">
                            Enter date
                          </p>
                        )}
                      </div>
                    </div>

                    {/* <div className="mb-3">
                      <div>
                        <label
                          htmlFor="choices-publish-visibility-input"
                          className="form-label"
                        >
                          Updated On
                        </label>
                        <input
                          type="date"
                          name=" Updated_On"
                          id="datepicker-publish-input"
                          className="form-control"
                          placeholder="Enter publish date"
                          data-provider="flatpickr"
                          data-date-format="d.m.y"
                          data-enable-time
                          {...register("Updated_On", {
                            required: false,
                          })}
                        />
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
                            required: false,
                          })}
                        />
                      </div>
                    </div> */}
                  </div>
                </div> 

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Product Categories</h5>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-2">                     
                      Select product category
                    </p>
                    <select
                      className="form-select"
                      id="choices-category-input"
                      name="category"
                      value={category}
                      onChange={changeCategory}
                      // data-choices
                      // data-choices-search-false
                      // {...register("category", {
                      //   required: false,
                      // })}
                    >
                      <option>--category--</option>
                          {
                            ProductCategory?.map(cat =>(
                              <option value={cat.Category}>{cat.Category}</option>
                            ))
                          }
                      {/* {ProductCategory?.map((ele) => {
                        return (
                          
                          <option defaultValue={ele.Category} key={ele.idx}>
                            {ele.Category}
                          </option>
                        );
                      // })} */}
                    </select>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-2">                     
                      Select product Sub category
                    </p>
                    <select
                      className="form-select"
                      id="choices-category-input"
                      name="subCategory"
                      value={subcat}
                      onChange={changeState}
                      // data-choices
                      // data-choices-search-false
                      // {...register("subCategory", {
                      //   required: false,
                      // })}
                    >

                       <option>--Sub-category--</option>
                          {
                            subcategory?.map(sub =>(
                              <option value={sub.sub}>{sub.sub}</option>
                            ))
                          }
                      {/* {ProductCategory?.map((ele) => (
                        ele.subCategory &&  ele.subCategory.map(element =>                   
                         (
                          <option defaultValue={element.sub ? element.sub :"none"} key={element.id}>
                            {element.sub}
                          </option>
                        ))))} */}
                    </select>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Featured Product</h5>
                  </div>
                  <div className="card-body">
                    <div className=" gap-3 align-items-start">
                      <div className="flex-grow-1">
                      <select
                      className="form-select"
                      id="choices-category-input"
                      name="featured"
                      data-choices
                      data-choices-search-false
                      {...register("featured", {
                        required: false,
                      })}
                    >
                      {featured?.map((ele) => {
                        return (
                          <option defaultValue={ele.featured} key={ele.id}>
                            {ele.featured}
                          </option>
                        );
                      })}
                    </select>                       
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">
                      Product Short Description
                    </h5>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-2">
                      Add short description For product
                    </p>
                    <textarea
                      name="shortDiscription"
                      className="form-control"
                      placeholder="Must enter minimum of a 100 characters"
                      rows="3"
                      {...register("shortDiscription", {
                        required: false,
                      })}
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

export default Addproduct;

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}
