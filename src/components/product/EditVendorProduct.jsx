import { ProductCategory, featured } from "./ProductCategory";
import { useForm } from "react-hook-form";
import { ADD_PRODUCT, DELETE_PRODUCT, Edit_PRODUCT } from "../../api/apiEndpoints";
import parse from 'html-react-parser';
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

function EditVendorProduct() {
  const [loading, setLoading] = useState(false)
  const editor = useRef(null);
  const ref = useRef(null);
  const [content, setContent] = useState('');
  const [image, setImage] = useState();
  const [preview, setPreview] = useState()
  const [category, SetCategory] = useState("");
  const [subcat, SetSubCat] = useState('');
  const [subcategory, SetSubCategory] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();
  // const { _id} = JSON.parse(localStorage.getItem("vendor"));
  
  const { state } = useLocation();
  // const params = useParams();
  const { id , namee} = state || {};
  console.log("edit=>", id);
  console.log("editname=>", namee);
  const [newformdata, setFormdata] = useState({});
  // const [discription, setDiscription] = useState();
  // const [product_name, setProduct_name] = useState();
  // const [product_name, setProduct_name] = useState();
  // const [product_name, setProduct_name] = useState();

  useEffect(() => {
    axios.get(`/enquiry/editProduct/${id}`)
      .then(response => setFormdata({ ...response.data, image: response.data.image || null }))
      .catch(error => console.log(error));
  }, []);
  console.log("foredit", newformdata);

  const handleChange = (event) => {
    setFormdata({...newformdata, [event.target.name]: event.target.value});
  }
  // const changeFeature= (event) => {
  //   s
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios.put(`/edit/${id}`, newformdata)
  //     .then(response => console.log(response))
  //     .catch(error => console.log(error));
  // }


  // const changeCategory = (event) =>{
  //   SetCategory(event.target.value);
  //   SetCategory({...newformdata, category: event.target.value})
  //   console.log("category", category);
  //   SetSubCategory(ProductCategory.find(cat => cat.Category === event.target.value).subCategory);
  // }
  // const changeState = (event) => {
  //   SetSubCat({...newformdata, [event.target.name]: event.target.value});
  //   subcat === undefined  ? SetSubCat("") :  SetSubCat({...newformdata, subCategory: event.target.value});
  // }
  // useEffect(()=>{
    
  // }, [])

  // const changeCategory = (event) => {
  //   const selectedCategory = event.target.value;
  //   setCategory(selectedCategory);
  //   setFormdata({ ...newformdata, category: selectedCategory });
  //   const selectedSubcategory = ProductCategory.find(
  //     (cat) => cat.Category === selectedCategory
  //   )?.subCategory || [];
  //   if (Array.isArray(selectedSubcategory)) {
  //     setSubCategory(selectedSubcategory);
  //   } else {
  //     setSubCategory([]);
  //   }
   
  // };

//   useEffect(() =>{
//   changeCategory();
// },[]);
const changeCategory = (event) => {
  const selectedCategory = event.target.value;
  SetCategory(selectedCategory);
  setFormdata((prevData) => ({
    ...prevData,
    category: selectedCategory, subCategory: '',
  }));

  const selectedSubCategory = ProductCategory.find(
    (cat) => cat.Category === selectedCategory
  ).subCategory;
  SetSubCategory(selectedSubCategory);
  // SetSubCat(selectedSubCategory[0].sub);
  setFormdata((prevData) => ({
    ...prevData,
    subCategory: selectedSubCategory[0]?.sub || "",
  }));
};

const changeState = (event) => {
  const selectedSubCat = event.target.value;
  SetSubCat(selectedSubCat);
  setFormdata((prevData) => ({
    ...prevData,
    subCategory: selectedSubCat || "",
  }));
};

  // const changeState = (event) => {
  //   const selectedSubcat = event.target.value;
  //   setSubCategory(selectedSubcat);
  //   setFormdata({ ...newformdata, subCategory: selectedSubcat });
  // };
  // const changeCategoryy = async(event) =>{    
  //  await SetCategory(event.target.value);    
  //  await setFormdata({...newformdata, category:category})
  //   console.log("category", category);
    
  //   SetSubCategory(ProductCategory.find(cat => cat.Category === newformdata.category).subCategory);
  
  // }
  // const changeStatey = (event) => {
  //   SetSubCat(event.target.value);
  //   setFormdata({...newformdata, subCategory:subcat})
  //   subcat === undefined ? setFormdata({...newformdata, subCategory:""}) :  setFormdata({...newformdata, subCategory:subcat});

  // }

  // convert object url to images
//   useEffect(() => {
//     if (!image) {
//         setPreview(undefined)
//         return
//     }

//     const objectUrl = URL.createObjectURL(image)
//     setPreview(objectUrl)


//     return () => URL.revokeObjectURL(objectUrl)
// }, [image])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const formData = new FormData();
  const imageHandlerr = (event) => {

   
    if (event.target && event.target.files[0]) {
      setImage(event.target.files[0]);
      setFormdata({ ...newformdata, image:image[0]});
      console.log("fffff=>", newformdata);
      // const reader = new FileReader();

      // reader.onloadend = () => {
      //   setFormdata({ ...newformdata, image: reader.result });
      // };
    
      // reader.readAsDataURL(image);
      
      // setImage({files: [...event.target.files]}); comment
    } else {
      console.log("Something went wrong");
    }

    // setImage(event.target.files[0]); comment
  };

  const imageHandler = (event) => {
    if (event.target && event.target.files[0]) {
      setImage(event.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        setFormdata({ ...newformdata, image: reader.result }); // Convert image to string
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      console.log("Something went wrong");
    }
  };
  console.log("img===>", image);
 
  // const parseContent = parse(content)
  console.log("content===>", content); 
  const submitHandler = async (data) => {
  
    console.log("data===>", data);

    try {
      setLoading(true)
      // formData.append("product_name", data.product_name);
      // formData.append("discription", data.discription);
      // formData.append("MetaTitle", data.MetaTitle);
      // formData.append("Publish_By", data.Publish_By);
      // formData.append("image", image);
      // try {
      //   const response = await axios.post('/addProduct', formData);
      //   setImageUrl(response.data);
      //   console.log(`Image URL: ${response.data}`);
      // } catch (error) {
      //   console.log(error);
      // }
          
      // formData.append("Publish_Date", data.Publish_Date);
      // formData.append("Updated_On", data.Updated_On);
      // formData.append("brand", data.brand);
      // formData.append("product_content",  content);
      // formData.append("product_content",  parseContent.props.children);
      // formData.append("category", category);
      // formData.append("subCategory", subcat);
      // formData.append('featured', data.featured)
      // formData.append("colour", data.colour);
      // formData.append("manufacturerName", data.manufacturerName);
      // formData.append("metaDescription", data.metaDescription);
      // formData.append("metaKey", data.metaKey);
      // formData.append("modalNum", data.modalNum);
      // formData.append("dimensions", data.dimensions);
      // formData.append("position", data.position);
      // formData.append("supplier", data.supplier);
      // formData.append("power", data.power);
      // formData.append("weight", data.weight);
      // formData.append("shortDiscription", data.shortDiscription);
      // formData.append("_id", _id);

      const update = await axios.put(`/enquiry/updateProduct/${id}`, newformdata, {
        // headers: { "Content-Type": "multipart/form-data" },
        headers: { "Content-Type": "application/json" },
      }); 
      setLoading(false);     
      console.log("update===>", update.data.result);
      console.log("successful");     
      if (update.status === 200) {
        setLoading(false);
        // toast.success(<strong>{namee}</strong> + ' Updated Successfully!', {
        //   position: toast.POSITION.TOP_RIGHT,
        // });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `<strong>${namee}</strong> <br/> Updated Successfully!`,
          showConfirmButton: false,
          timer: 4500,
          customClass: {
            title: 'swal2-title-custom' // Custom CSS class for the title
          },
         
        })
       
        navigate("/vendorAdminPanel");
        
        // navigate("/productList")
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
                <h4 className="mb-sm-0">Edit Product</h4>
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to={"/vendorAdminPanel"}>Dashboard</Link>
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
                        value={newformdata.product_name}
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
                        Product Features
                      </label>

                      <textarea
                        type="text"
                        name="discription"
                        className="form-control"
                        // value={formData?.get('discription')}
                        value={newformdata.discription} 
                        onChange={handleChange} 
                        id="product-description"
                        placeholder="Enter product features"
                        rows="3"
                        // {...register("discription", {
                        //   required: false,
                        // })}
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
                              name="image"
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
                                 src={newformdata.image}
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
                        <JoditEditor                
                        ref={editor}
                        value={newformdata.product_content} 
                        config={editorConfig}                    
                        onChange={(newContent) => setFormdata({...newformdata, product_content:newContent})} />
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
                            value={newformdata.manufacturerName}
                            onChange={handleChange}  
                            placeholder="Enter manufacturer name"
                            // {...register("manufacturerName", {
                            //   required: false,
                            // })}
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
                                value={newformdata.brand} 
                                onChange={handleChange}                                 
                                placeholder="Enter manufacturer brand"
                                // {...register("brand", {
                                //   required: false,
                                // })}
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
                                value={newformdata.modalNum} 
                                
                                className="form-control"
                                id="manufacturer-brand-input"
                                placeholder="Enter Product Modal Number"
                                onChange={handleChange} 
                                // {...register("modalNum", {
                                //   required: false,
                                // })}
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
                                value={newformdata.power} 
                                onChange={handleChange} 
                                
                                className="form-control"
                                id="manufacturer-brand-input"
                                placeholder="Enter Producut Power"
                                // {...register("power", {
                                //   required: false,
                                // })}
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
                                value={newformdata.dimensions} 
                                onChange={handleChange} 
                                className="form-control"
                                id="manufacturer-brand-input"
                                placeholder="Enter product Dimensions"
                                // {...register("dimensions", {
                                //   required: false,
                                // })}
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
                                value={newformdata.weight} 
                                onChange={handleChange} 
                                className="form-control"
                                id="stocks-input"
                                placeholder="Weight"
                                // {...register("weight", {
                                //   required: false,
                                // })}
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
                                value={newformdata.colour} 
                                onChange={handleChange} 
                                className="form-control"
                                id="stocks-input"
                                placeholder="Colour"
                                // {...register("colour", {
                                //   required: false,
                                // })}
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
                                value={newformdata.position} 
                                onChange={handleChange} 
                                className="form-control"
                                id="stocks-input"
                                // placeholder="SKU Number"
                                // {...register("position", {
                                //   required: false,
                                // })}
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
                                value={newformdata.supplier}                                
                                onChange={handleChange} 
                                className="form-control"
                                id="orders-input"
                                placeholder="Supplier"
                                // {...register("supplier", {
                                //   required: false,
                                // })}
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
                                value={newformdata.MetaTitle} 
                                onChange={handleChange} 
                                className="form-control"
                                placeholder="Enter meta title"
                                id="meta-title-input"
                                // {...register("MetaTitle", {
                                //   required: false,
                                // })}
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
                                value={newformdata.metaKey}
                                onChange={handleChange} 
                                className="form-control"
                                placeholder="Enter meta keywords"
                                id="meta-keywords-input"
                                // {...register("metaKey", {
                                //   required: false,
                                // })}
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
                            value={newformdata.metaDescription} 
                            onChange={handleChange} 
                            id="meta-description-input"
                            placeholder="Enter meta description"
                            rows="3"
                            // {...register("metaDescription", {
                            //   required: false,
                            // })}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end mb-3">
                  <button type="submit" className="btn btn-success w-sm">
                    Save
                  </button>
                </div>
              </div>

              <div className="col-lg-4">
                {/* <div className="card">
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
                          value={newformdata.Publish_Date} 
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

                    <div className="mb-3">
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
                          value={newformdata.Updated_On} 
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
                          value={newformdata.Publish_By} 
                           
                          id="datepicker-publish-input"
                          className="form-control"
                          placeholder="Enter Publisher name"
                          {...register("Publish_By", {
                            required: false,
                          })}
                        />
                      </div>
                    </div>
                  </div>
                </div> */}

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
                      value={newformdata.category}
                      
                      // value={category}
                      // onChange={handleChange} 
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
                      value={newformdata.subCategory} 
                      // value={subcat}
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
                      value={newformdata.featured} 
                      onChange={handleChange}  
                      data-choices
                      data-choices-search-false
                      // {...register("featured", {
                      //   required: false,
                      // })}
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
                      value={newformdata.shortDiscription} 
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

export default EditVendorProduct;
