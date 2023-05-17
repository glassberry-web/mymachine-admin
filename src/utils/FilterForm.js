import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import axios from "../api/axios";
import { FILTER } from "../api/apiEndpoints";
import { responseDataActions } from "../reducers/filter/FilterSlice";

function Filter({ hideShow }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.data.data;
  });
  console.log("array of data====>", products);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = async (data) => {
    console.log("data====>", data);
    try {
      const product = await axios.get(`${FILTER}?brand=${data.brand}&category=${data.category}`);
      console.log("brand--->", product);
      if (product.status === 200) {
        console.log("successfully get---->", product?.data?.result);
        dispatch(responseDataActions.brand(product?.data?.result));

        // setData(product?.data?.result)
      }
    } catch (error) {
      console.log("error===>", error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="row g-3">
          <div className="col-xxl-6">
            <div>
              <label htmlFor="brandName" className="form-label">
                Brand Name
              </label>

              {/* <input
                id="brandName"
                name="brand"
                className="form-control"
                {...register("brand", {
                  required: false,
                })}
              /> */}

              {/* <select
                className="form-select"
                hidden
                id="select"
                name="brand"
                data-choices
                data-choices-search-false
                {...register("brand", {
                  required: false,
                })}
              >
                {products?.map((ele) => {
                  console.log("ele.brand====>", ele.brand);
                  return (
                    <option defaultValue={ele.brand} key={ele._id}>
                      {ele.brand}
                    </option>
                  );
                })}
              </select> */}
              <select
                className="form-select"
                id="choices-category-input"
                name="brand"
                data-choices
                data-choices-search-false
                placeholder="Search for brand"
                {...register("brand", {
                  required: false,
                })}
              >
                {products?.map((ele) => {
                  return (
                    <option  key={ele._id}>
                      {ele.brand}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-xxl-6">
            <div>
              <label htmlFor="productName" className="form-label">
                Product
              </label>
              <select
                className="form-select"
                id="choices-category-input"
                name="product_name"
                data-choices
                data-choices-search-false
                placeholder="Search for brand"
                {...register("product_name", {
                  required: false,
                })}
              >
                {products?.map((ele) => {
                  return <option key={ele._id}>{ele.product_name}</option>;
                })}
              </select>
            </div>
          </div>

          <div className="col-xxl-6">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="choices-category-input"
              name="category"
              data-choices
              data-choices-search-false
              placeholder="Search for brand"
              {...register("category", {
                required: false,
              })}
            >
              {products?.map((ele) => {
                return <option key={ele._id}>{ele.category}</option>;
              })}
            </select>
          </div>
          <div className="col-xxl-6">
            <label htmlFor="sCategory" className="form-label">
              Sub-category
            </label>
            <input
              type="text"
              className="form-control"
              id="sCategory"
              placeholder="Enter your subcategory category"
            />
          </div>
          <div className="col-xxl-6">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <input
              type="text"
              className="form-control"
              id="sCategory"
              placeholder="Status"
            />
          </div>
        </div>
        <div className="offcanvas-foorter border-top p-3 text-center">
        <button
          type="button"
          onClick={hideShow}
          className="btn btn-light"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="submit" className="btn btn-primary" onClick={hideShow}>
          Save changes
        </button>
      </div>
      </form>

    </>
  );
}

export default Filter;
