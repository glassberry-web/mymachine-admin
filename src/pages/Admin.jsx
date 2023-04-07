import React from "react";
import Charts from "../components/Charts";
import Counter from "../components/Counter";

const Admin = () => {
  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="h-100">
                <div className="row mb-3 pb-1">
                  <div className="col-12">
                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                      <div className="flex-grow-1">
                        <h4 className="fs-16 mb-1">Good Morning, Anna!</h4>
                        <p className="text-muted mb-0">
                          Here's what's happening with your store today.
                        </p>
                      </div>
                      <div className="mt-3 mt-lg-0">
                        <form action="">
                          <div className="row g-3 mb-0 align-items-center">
                            <div className="col-sm-auto">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control border-0 dash-filter-picker shadow"
                                  data-provider="flatpickr"
                                  data-range-date="true"
                                  data-date-format="d M, Y"
                                  data-deafult-date="01 Jan 2022 to 31 Jan 2022"
                                />
                                <div className="input-group-text bg-primary border-primary text-white">
                                  <i className="ri-calendar-2-line" />
                                </div>
                              </div>
                            </div>
                            {/*end col*/}
                            <div className="col-auto">
                              <button
                                type="button"
                                className="btn btn-soft-success"
                              >
                                <i className="ri-add-circle-line align-middle me-1" />
                                Add Product
                              </button>
                            </div>
                            {/*end col*/}
                            <div className="col-auto">
                              <button
                                type="button"
                                className="btn btn-soft-info btn-icon waves-effect waves-light layout-rightside-btn"
                              >
                                <i className="ri-pulse-line" />
                              </button>
                            </div>
                            {/*end col*/}
                          </div>
                          {/*end row*/}
                        </form>
                      </div>
                    </div>
                    {/* end card header */}
                  </div>
                  {/*end col*/}
                </div>
                <Counter />
                <div className="row">
                  <div className="col-xl-8">
                    <div className="card">
                      <div className="card-header border-0 align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">Revenue</h4>
                        <div>
                          <button
                            type="button"
                            className="btn btn-soft-secondary btn-sm"
                          >
                            ALL
                          </button>
                          <button
                            type="button"
                            className="btn btn-soft-secondary btn-sm"
                          >
                            1M
                          </button>
                          <button
                            type="button"
                            className="btn btn-soft-secondary btn-sm"
                          >
                            6M
                          </button>
                          <button
                            type="button"
                            className="btn btn-soft-primary btn-sm"
                          >
                            1Y
                          </button>
                        </div>
                      </div>
                      {/* end card header */}
                      <div className="card-header p-0 border-0 bg-soft-light">
                        <div className="row g-0 text-center">
                          <div className="col-6 col-sm-3">
                            <div className="p-3 border border-dashed border-start-0">
                              <h5 className="mb-1">
                                <span
                                  className="counter-value"
                                  data-target={7585}
                                >
                                  0
                                </span>
                              </h5>
                              <p className="text-muted mb-0">Orders</p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-6 col-sm-3">
                            <div className="p-3 border border-dashed border-start-0">
                              <h5 className="mb-1">
                                $
                                <span
                                  className="counter-value"
                                  data-target="22.89"
                                >
                                  0
                                </span>
                                k
                              </h5>
                              <p className="text-muted mb-0">Earnings</p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-6 col-sm-3">
                            <div className="p-3 border border-dashed border-start-0">
                              <h5 className="mb-1">
                                <span
                                  className="counter-value"
                                  data-target={367}
                                >
                                  0
                                </span>
                              </h5>
                              <p className="text-muted mb-0">Refunds</p>
                            </div>
                          </div>
                          {/*end col*/}
                          <div className="col-6 col-sm-3">
                            <div className="p-3 border border-dashed border-start-0 border-end-0">
                              <h5 className="mb-1 text-success">
                                <span
                                  className="counter-value"
                                  data-target="18.92"
                                >
                                  0
                                </span>
                                %
                              </h5>
                              <p className="text-muted mb-0">
                                Conversation Ratio
                              </p>
                            </div>
                          </div>
                          {/*end col*/}
                        </div>
                      </div>
                      {/* end card header */}
                      {/* <div className="card-body p-0 pb-2">
                        <div className="w-100">
                        <div id="customer_impression_charts" data-colors="[&quot;--vz-info&quot;, &quot;--vz-primary&quot;, &quot;--vz-danger&quot;]" className="apex-charts" dir="ltr" />

                        </div>
                      </div> */}
                      <Charts />
                      {/* end card body */}
                    </div>
                    {/* end card */}
                  </div>
                  {/* end col */}
                  <div className="col-xl-4">
                    {/* card */}
                    <div className="card card-height-100">
                      <div className="card-header align-items-center d-flex">
                        <h4 className="card-title mb-0 flex-grow-1">
                          Sales by Locations
                        </h4>
                        <div className="flex-shrink-0">
                          <button
                            type="button"
                            className="btn btn-soft-primary btn-sm"
                          >
                            Export Report
                          </button>
                        </div>
                      </div>
                      {/* end card header */}
                      {/* card body */}
                      <div className="card-body">
                        <div
                          id="sales-by-locations"
                          data-colors='["--vz-light", "--vz-info", "--vz-primary"]'
                          style={{ height: 269 }}
                          dir="ltr"
                        />
                        <div className="px-2 py-2 mt-1">
                          <p className="mb-1">
                            Canada <span className="float-end">75%</span>
                          </p>
                          <div className="progress mt-2" style={{ height: 6 }}>
                            <div
                              className="progress-bar progress-bar-striped bg-primary"
                              role="progressbar"
                              style={{ width: "75%" }}
                              aria-valuenow={75}
                              aria-valuemin={0}
                              aria-valuemax={75}
                            />
                          </div>
                          <p className="mt-3 mb-1">
                            Greenland <span className="float-end">47%</span>
                          </p>
                          <div className="progress mt-2" style={{ height: 6 }}>
                            <div
                              className="progress-bar progress-bar-striped bg-primary"
                              role="progressbar"
                              style={{ width: "47%" }}
                              aria-valuenow={47}
                              aria-valuemin={0}
                              aria-valuemax={47}
                            />
                          </div>
                          <p className="mt-3 mb-1">
                            Russia <span className="float-end">82%</span>
                          </p>
                          <div className="progress mt-2" style={{ height: 6 }}>
                            <div
                              className="progress-bar progress-bar-striped bg-primary"
                              role="progressbar"
                              style={{ width: "82%" }}
                              aria-valuenow={82}
                              aria-valuemin={0}
                              aria-valuemax={82}
                            />
                          </div>
                        </div>
                      </div>
                      {/* end card body */}
                    </div>
                    {/* end card */}
                  </div>
                  {/* end col */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
