import { useState, useEffect } from "react";
import axios from "../../api/axios";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { ADD_PRODUCT } from "../../api/apiEndpoints";
import { useSelector } from "react-redux";
import ProductImage from "./ProductImage";
const MainContent = () => {
  const [productName, setProductName] = useState("");
  const [discription, setDiscription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();
  const [response, setResponse] = useState([]);

  const navigate = useNavigate();
  // const [selectFile, setSelectFile] = useState(null);
  // const { userToken } = useSelector((state) => state.vendorAuth);
  // console.log("userToken===>", userToken);
  // const { _id } = JSON.parse(localStorage.getItem("vendor"));
  // console.log("adminId====>", _id);
  const formData = new FormData();

  const imageHandler = (event) => {
    // console.log("image====>", event.target.files);
    // console.log("image====2>", event.target.files[0]);
    if (event.target && event.target.files[0]) {
      setImage(event.target.files[0]);
      // formData.append("image", image);
    } else {
      console.log("Something went wrong");
    }

    // setImage(event.target.files[0]);
  };
  const saveHandler = async (e) => {
    // console.log("img===>", image);
    e.preventDefault();
    try {
      // let imageUrl = "";
      // if (image) {
      //   const formData = new FormData();
      //   formData.append("file", image.name);
      //   formData.append("upload_preset", "My_Machine_store");
      //   const dataRes = await axios.post(
      //     "cloudinary://622125536676225:VUv_Zv3IvbgNpkqZUT77xnYi_uM@dbql964re",
      //     formData
      //   );
      //   console.log("dataRes===>",dataRes)
      //   imageUrl = dataRes?.data.url;
      // }
      // const submitPost = {
      //   image: imageUrl,
      // };
      // console.log("submitPost===>",submitPost)
      formData.append("productName", productName);
      formData.append("discription", discription);
      formData.append("price", price);
      formData.append("image", image);
      // formData.append("_id", _id);

      const detail = await axios.post(ADD_PRODUCT, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("detail===>", detail.data.result);
      setResponse(detail.data.result);
    } catch (error) {
      console.log("error===>", error.message);
    }
    setProductName("");
    setDiscription("");
    setPrice("");
    setImage("");
    navigate("/vendorAdminPanel");
  };

  const enquiryDetail = async () =>
    await axios
      .get(`/enquiry/productList?id=${_id}`)
      .then((res) => {
        console.log(res?.data?.result);
        setResponse(res?.data?.result);
      })
      .catch((error) => {
        console.log(error.message);
      });

  useEffect(() => {
    enquiryDetail();
  }, []);
  // let data = [];
  // data.push(response);
  console.log("productListres===>", response);
  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <div className="card">
            <div className="card-header border-0 rounded">
              <div className="row g-2">
                <div className="col-xl-3">
                  <div className="page-title1-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">Product List</h4>
                  </div>
                </div>

                <div className="col-xl-2 ms-auto">
                  <div>
                    <select
                      className="form-control"
                      data-choices
                      data-choices-search-false
                    >
                      <option value="">Select Categories</option>
                      <option value="All">All</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Health & Medicine">
                        Health & Medicine
                      </option>
                      <option value="Manufacturer">Manufacturer</option>
                      <option value="Food Service">Food Service</option>
                      <option value="Computers & Electronics">
                        Computers & Electronics
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-auto">
                  <div className="hstack gap-2">
                    <button type="button" className="btn btn-danger">
                      <i className="ri-equalizer-fill me-1 align-bottom"></i>{" "}
                      Filters
                    </button>
                    <Link
                      className="btn btn-primary"

                     to={"/AddProduct"}
                    >
                      <i className="ri-add-fill me-1 align-bottom"></i> Add
                      Product
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <table
                    id="example"
                    className="table table-bordered dt-responsive nowrap table-striped align-middle"
                    style={{ width: "100%" }}
                  >
                    <thead className="bg-slight-white">
                      <tr className="border-slight-grey">
                        <th scope="col" style={{ width: "10px" }}>
                          <div className="form-check">
                            <input
                              className="form-check-input fs-15"
                              type="checkbox"
                              id="checkAll"
                              value="option"
                            />
                          </div>
                        </th>
                        {/* <th data-ordering="false">SR No.</th> */}
                        {/* <th data-ordering="false">ID</th> */}
                        <th data-ordering="false">Product Name</th>
                        <th data-ordering="false">Discription</th>
                        <th data-ordering="false">Price</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    {/* {response.length===null?<p>{}</p>:{}} */}
                    {response?.map((ele) => {
                      console.log("ele===>", ele.image);
                      {
                        return (
                          <tbody className="bg-slight-white" key={ele._id}>
                            <tr className="border-slight-grey">
                              <th scope="row">
                                <div className="form-check">
                                  <input
                                    className="form-check-input fs-15"
                                    type="checkbox"
                                    name="checkAll"
                                    value="option1"
                                  />
                                </div>
                              </th>
                              <td className="td-grey-col">
                                {ele.product_name}
                              </td>
                              <td className="td-grey-col">
                                {ele.discriptrion}
                              </td>
                              <td className="td-grey-col">{ele.price}</td>
                              {/* <td className="td-grey-col">{ele?.image}</td> */}
                              {/* <td className="td-grey-col">
                                <img
                                  src={`http://localhost:5001/${ele?.image}`}
                                  alt="img"
                                  style={{ height: "60px", width: "60px" }}
                                ></img>
                              </td> */}
                              <ProductImage image={ele?.image} />
                            </tr>
                          </tbody>
                        );
                      }
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-0 text-center text-sm-start align-items-center mb-3">
            <div className="col-sm-6">
              <div>
                <p className="mb-sm-0">Showing 1 to 8 of 12 entries</p>
              </div>
            </div>
            <div className="col-sm-6">
              <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                <li className="page-item disabled">
                  {" "}
                  <a href="#" className="page-link">
                    <i className="mdi mdi-chevron-left"></i>
                  </a>{" "}
                </li>
                <li className="page-item active">
                  {" "}
                  <a href="#" className="page-link">
                    1
                  </a>{" "}
                </li>
                <li className="page-item ">
                  {" "}
                  <a href="#" className="page-link">
                    2
                  </a>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <a href="#" className="page-link">
                    3
                  </a>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <a href="#" className="page-link">
                    4
                  </a>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <a href="#" className="page-link">
                    5
                  </a>{" "}
                </li>
                <li className="page-item">
                  {" "}
                  <a href="#" className="page-link">
                    <i className="mdi mdi-chevron-right"></i>
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>

          <div
            className="modal fade zoomIn"
            id="addSeller"
            tabIndex="-1"
            aria-labelledby="addSellerLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addSellerLabel">
                    Add Seller
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-content border-0 mt-3">
                  <ul
                    className="nav nav-tabs nav-tabs-custom nav-success p-2 pb-0 bg-light"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#personalDetails"
                        role="tab"
                        aria-selected="true"
                      >
                        Personal Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#businessDetails"
                        role="tab"
                        aria-selected="false"
                      >
                        Business Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#bankDetails"
                        role="tab"
                        aria-selected="false"
                      >
                        Bank Details
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="modal-body">
                  <div className="tab-content">
                    <div
                      className="tab-pane active"
                      id="personalDetails"
                      role="tabpanel"
                    >
                      {/* <form
                        className="form product-edit predit"
                        onSubmit={handleSubmit(submitHandler)}
                      >
                        <div className="form__half fhalf">
                          <div className="form__form-group fgroup">
                            <span className="form__form-group-label fgroup_label">
                              Product Name
                            </span>
                            <div className="form__form-group-field ffeild">
                              <Field
                                name="productname"
                                component="input"
                                type="text"
                                id="productname"
                                autoFocus
                                {...register("productname", {
                                  required: "Please enter productname",
                                })}
                              />
                              {errors.productname && (
                                <div className="text-danger">
                                  {errors.productname.message}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="form__form-group-id-category fcat">
                            <div className="form__form-group form__form-group-id fgroupid">
                              <span className="form__form-group-label fidspan">
                                Stock
                              </span>
                              <div className="form__form-group-field fidfeild">
                                <Field
                                  name="stock"
                                  component="input"
                                  type="text"
                                  id="stock"
                                  {...register("stock", {
                                    required: "Please enter stock",
                                  })}
                                />
                                {errors.stock && (
                                  <div className="text-danger">
                                    {errors.stock.message}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="form__form-group fcate">
                              <span className="form__form-group-label fidspan">
                                Category
                              </span>
                              <div className="form__form-group-field ffeild1">
                                <Field
                                  name="category"
                                  component={renderSelectField}
                                  type="text"
                                  options={[
                                    { value: "laser", label: "laser" },
                                    { value: "paper", label: "Paper" },
                                  ]}
                                  id="category"
                                  {...register("category", {
                                    required: "Please enter category",
                                  })}
                                />
                                {errors.category && (
                                  <div className="text-danger">
                                    {errors.category.message}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="form__form-group">
                            <span className="form__form-group-label">
                              Email-id
                            </span>
                            <div className="form__form-group-field">
                              <Field
                                name="email"
                                component="input"
                                type="text"
                                id="email"
                                {...register("email", {
                                  required: "Please enter email",
                                })}
                              />
                              {errors.email && (
                                <div className="text-danger">
                                  {errors.email.message}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="form__form-group fpho">
                            <span className="form__form-group-label fidspan">
                              Full description
                            </span>
                            <div className="form__form-group-field fidfeild">
                              <Field
                                name="description"
                                component="textarea"
                                type="text"
                                id="description"
                                {...register("description", {
                                  required: "Please enter description",
                                })}
                              />
                              {errors.description && (
                                <div className="text-danger">
                                  {errors.description.message}
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="card__title upper">
                            <h5 className="bold-text h5">Pricing</h5>
                          </div>
                          <div className="form__form-group-price-discount pricing">
                            <div className="form__form-group form__form-group-price fpho price">
                              <span className="form__form-group-label fidspan">
                                Price
                              </span>
                              <div className="form__form-group-field fidfeild">
                                <div className="form__form-group-icon fidicon">
                                  <CurrencyUsdIcon />
                                </div>
                                <Field
                                  name="price"
                                  component="input"
                                  type="text"
                                  id="price"
                                  {...register("price", {
                                    required: "Please enter price",
                                  })}
                                />
                                {errors.price && (
                                  <div className="text-danger">
                                    {errors.price.message}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="form__form-group fgroup">
                              <span className="form__form-group-label fidspan">
                                Rating
                              </span>
                              <div className="form__form-group-field fidfeild">
                                <div className="form__form-group-icon fidicon">
                                  <TagIcon />
                                </div>
                                <Field
                                  name="rating"
                                  component="input"
                                  type="text"
                                  id="rating"
                                  {...register("rating", {
                                    required: "Please enter rating",
                                  })}
                                />
                                {errors.rating && (
                                  <div className="text-danger">
                                    {errors.rating.message}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="card__title upper">
                            <h5 className="bold-text h5">
                              General information
                            </h5>
                          </div>
                          <div className="form form--horizontal predit">
                            <div className="form__form-group fpho grp">
                              <span className="form__form-group-label fidspan bn">
                                Brand Name
                              </span>
                              <div className="form__form-group-field fed fidfeild">
                                <Field
                                  name="brand"
                                  component="input"
                                  type="text"
                                  id="brand"
                                  {...register("brand", {
                                    required: "Please enter brand",
                                  })}
                                />
                                {errors.brand && (
                                  <div className="text-danger">
                                    {errors.brand.message}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="form__form-group fpho grp">
                              <span className="form__form-group-label fidspan bn">
                                Category
                              </span>
                              <div className="form__form-group-field fed fidfeild">
                                <Field
                                  name="general_category"
                                  component="input"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="form__form-group fpho grp">
                              <span className="form__form-group-label fidspan bn">
                                Delivery Condition
                              </span>
                              <div className="form__form-group-field fed fidfeild">
                                <Field
                                  name="delivery"
                                  component="input"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="form__form-group fpho grp">
                              <span className="form__form-group-label fidspan bn">
                                Weight
                              </span>
                              <div className="form__form-group-field fed fidfeild">
                                <Field
                                  name="weight"
                                  component="input"
                                  type="text"
                                />
                              </div>
                            </div>
                            <div className="form__form-group fpho grp">
                              <span className="form__form-group-label fidspan bn">
                                Size
                              </span>
                              <div className="form__form-group-field fed fidfeild">
                                <Field
                                  name="size"
                                  component="input"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form__half fhalf">
                          <div className="form__form-group fpho">
                            <span className="form__form-group-label fidspan">
                              Upload photo
                            </span>
                            <div className="form__form-group-field ffeild1">
                              <Field
                                name="files"
                                component={renderDropZoneMultipleField}
                                className="fe100"
                                id="files"
                                {...register("files", {
                                  required: "Please enter image",
                                })}
                              />
                              {errors.files && (
                                <div className="text-danger">
                                  {errors.files.message}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <ButtonToolbar className="form__button-toolbar btn-toolbar gcrzof dugaUB">
                          <Button
                            color="primary"
                            className="imbPV"
                            type="submit"
                          >
                            Save
                          </Button>
                          <Button
                            type="button"
                            className="eKRLWe btn-secondary"
                            onClick={reset}
                          >
                            Cancel
                          </Button>
                        </ButtonToolbar>
                      </form> */}
                      <form
                        action="/image"
                        encType="multipart/form-data"
                        method="POST"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="firstnameInput"
                                className="form-label"
                              >
                                Product Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="firstnameInput"
                                placeholder="Enter your product name"
                                onChange={(e) => {
                                  setProductName(e.target.value);
                                }}
                                value={productName}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="lastnameInput"
                                className="form-label"
                              >
                                Product Discription
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="lastnameInput"
                                placeholder="Enter your product's discription"
                                onChange={(e) => {
                                  setDiscription(e.target.value);
                                }}
                                value={discription}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="contactnumberInput"
                                className="form-label"
                              >
                                Price
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="contactnumberInput"
                                placeholder="Enter your product's price"
                                onChange={(e) => {
                                  setPrice(e.target.value);
                                }}
                                value={price}
                              />
                              {/* <label for="exampleFormControlFile1">
                              Product Image
                              </label>
                              <input
                                type="file"
                                class="form-control-file"
                                id="exampleFormControlFile1"
                                onChange={(e) => {
                                  setPrice(e.target.value);
                                }}
                                value={price}
                              ></input> */}
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                htmlFor="exampleFormControlFile1"
                                className="form-label"
                              >
                                Product Image
                              </label>
                              <input
                                type="file"
                                name="image"
                                className="form-control"
                                id="phonenumberInput"
                                accept=".png, .jpg, .jpeg"
                                placeholder="Submit your product's image"
                                // webkitdirectory ={true}
                                // onChange={(e) => {
                                //   setImage(e.target.files[0]);
                                //   // setImage(e.target.value);
                                // }}
                                onChange={imageHandler}
                                // value={image}
                              />
                            </div>
                          </div>
                          {/* <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="emailidInput" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="emailidInput" placeholder="Enter your email"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="mb-3">
                                                    <label htmlFor="birthdayidInput" className="form-label">Date of Birth</label>
                                                    <input type="text" id="birthdayidInput" className="form-control" data-provider="flatpickr" placeholder="Enter your date of birth"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label htmlFor="cityidInput" className="form-label">City</label>
                                                    <input type="text" className="form-control" id="cityidInput" placeholder="Enter your city"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label htmlFor="countryidInput" className="form-label">Country</label>
                                                    <input type="text" className="form-control" id="countryidInput" placeholder="Enter your country"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="mb-3">
                                                    <label htmlFor="zipcodeidInput" className="form-label">Zip Code</label>
                                                    <input type="text" className="form-control" id="zipcodeidInput" placeholder="Enter your zipcode"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="mb-3">
                                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter description"></textarea>
                                                </div>
                                            </div> */}
                          <div className="col-lg-12">
                            <div className="hstack gap-2 justify-content-end">
                              <button
                                className="btn btn-link link-success text-decoration-none fw-medium"
                                data-bs-dismiss="modal"
                              >
                                <i className="ri-close-line me-1 align-middle"></i>{" "}
                                Close
                              </button>
                              {/* <button  className="btn btn-primary"><i className="ri-save-3-line align-bottom me-1" onClick={saveHandler}></i> Save</button> */}
                              <button onClick={saveHandler}> Save</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <script>document.write(new Date().getFullYear())</script> ©
              MyMachineStore.
            </div>
            <div className="col-sm-6">
              <div className="text-sm-end d-none d-sm-block">
                Design & Develop by Glassberry
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainContent;
