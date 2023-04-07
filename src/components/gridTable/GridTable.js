import React from "react";

function GridTable(props) {
  return (

          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0 flex-grow-1">{props.title}</h4>
                </div>
                <div className="card-body">
                  <div id="table-gridjs">
                    <div
                      role="complementary"
                      className="gridjs gridjs-container"
                      style={{ width: "100%" }}
                    >
                      {/* <div className="gridjs-head">
                        <div className="gridjs-search">
                          <input
                            type="search"
                            placeholder="Type a keyword..."
                            aria-label="Type a keyword..."
                            className="gridjs-input gridjs-search-input"
                          />
                        </div>

                      </div> */}
                      <div
                        className="gridjs-wrapper"
                        style={{ height: "auto" }}
                      >
                        <table
                          role="grid"
                          className="gridjs-table"
                          style={{ height: "auto" }}
                        >
                          <thead className="gridjs-thead">
                            <tr className="gridjs-tr">
                              <th
                                data-column-id="id"
                                className="gridjs-th gridjs-th-sort"
                                tabIndex="0"
                                style={{ minWidth: "44px", width: "47px" }}
                              >
                                <div className="gridjs-th-content">ID</div>
                                <button
                                  tabIndex="-1"
                                  aria-label="Sort column ascending"
                                  title="Sort column ascending"
                                  className="gridjs-sort gridjs-sort-neutral"
                                ></button>
                              </th>
                              <th
                                data-column-id="name"
                                className="gridjs-th gridjs-th-sort"
                                tabIndex="0"
                                style={{ minWidth: "78px" }}
                              >
                                <div className="gridjs-th-content">Name</div>
                                <button
                                  tabIndex="-1"
                                  aria-label="Sort column ascending"
                                  title="Sort column ascending"
                                  className="gridjs-sort gridjs-sort-neutral"
                                ></button>
                              </th>
                              <th
                                data-column-id="email"
                                className="gridjs-th gridjs-th-sort"
                                tabIndex="0"
                                style={{ minWidth: "169px", width: "183px" }}
                              >
                                <div className="gridjs-th-content">Email</div>
                                <button
                                  tabIndex="-1"
                                  aria-label="Sort column ascending"
                                  title="Sort column ascending"
                                  className="gridjs-sort gridjs-sort-neutral"
                                ></button>
                              </th>
                              <th
                                data-column-id="position"
                                className="gridjs-th gridjs-th-sort"
                                tabIndex="0"
                                style={{ minWidth: "219px", width: "238px" }}
                              >
                                <div className="gridjs-th-content">
                                  Position
                                </div>
                                <button
                                  tabIndex="-1"
                                  aria-label="Sort column ascending"
                                  title="Sort column ascending"
                                  className="gridjs-sort gridjs-sort-neutral"
                                ></button>
                              </th>
                              <th
                                data-column-id="company"
                                className="gridjs-th gridjs-th-sort"
                                tabIndex="0"
                                style={{ minWidth: "111px", width: "121px" }}
                              >
                                <div className="gridjs-th-content">Company</div>
                                <button
                                  tabIndex="-1"
                                  aria-label="Sort column ascending"
                                  title="Sort column ascending"
                                  className="gridjs-sort gridjs-sort-neutral"
                                ></button>
                              </th>
                              <th
                                data-column-id="country"
                                className="gridjs-th gridjs-th-sort"
                                tabIndex="0"
                                style={{ minWidth: "108px", width: "117px" }}
                              >
                                <div className="gridjs-th-content">Country</div>
                                <button
                                  tabIndex="-1"
                                  aria-label="Sort column ascending"
                                  title="Sort column ascending"
                                  className="gridjs-sort gridjs-sort-neutral"
                                ></button>
                              </th>
                              <th
                                data-column-id="actions"
                                className="gridjs-th gridjs-th-sort"
                                tabIndex="0"
                                style={{ width: "120px" }}
                              >
                                <div className="gridjs-th-content">Actions</div>
                                <button
                                  tabIndex="-1"
                                  aria-label="Sort column ascending"
                                  title="Sort column ascending"
                                  className="gridjs-sort gridjs-sort-neutral"
                                ></button>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="gridjs-tbody">
                            <tr className="gridjs-tr">
                              <td data-column-id="id" className="gridjs-td">
                                <span>
                                  <span className="fw-semibold">01</span>
                                </span>
                              </td>
                              <td data-column-id="name" className="gridjs-td">
                                Jonathan
                              </td>
                              <td data-column-id="email" className="gridjs-td">
                                <span>
                                  <a href="">jonathan@example.com</a>
                                </span>
                              </td>
                              <td
                                data-column-id="position"
                                className="gridjs-td"
                              >
                                Senior Implementation Architect
                              </td>
                              <td
                                data-column-id="company"
                                className="gridjs-td"
                              >
                                Hauck Inc
                              </td>
                              <td
                                data-column-id="country"
                                className="gridjs-td"
                              >
                                Holy See
                              </td>
                              <td
                                data-column-id="actions"
                                className="gridjs-td"
                              >
                                <span>
                                  <a
                                    href="#"
                                    className="text-reset text-decoration-underline"
                                  >
                                    Details
                                  </a>
                                </span>
                              </td>
                            </tr>
                            <tr className="gridjs-tr">
                              <td data-column-id="id" className="gridjs-td">
                                <span>
                                  <span className="fw-semibold">02</span>
                                </span>
                              </td>
                              <td data-column-id="name" className="gridjs-td">
                                Harold
                              </td>
                              <td data-column-id="email" className="gridjs-td">
                                <span>
                                  <a href="">harold@example.com</a>
                                </span>
                              </td>
                              <td
                                data-column-id="position"
                                className="gridjs-td"
                              >
                                Forward Creative Coordinator
                              </td>
                              <td
                                data-column-id="company"
                                className="gridjs-td"
                              >
                                Metz Inc
                              </td>
                              <td
                                data-column-id="country"
                                className="gridjs-td"
                              >
                                Iran
                              </td>
                              <td
                                data-column-id="actions"
                                className="gridjs-td"
                              >
                                <span>
                                  <a
                                    href="#"
                                    className="text-reset text-decoration-underline"
                                  >
                                    Details
                                  </a>
                                </span>
                              </td>
                            </tr>
                            <tr className="gridjs-tr">
                              <td data-column-id="id" className="gridjs-td">
                                <span>
                                  <span className="fw-semibold">03</span>
                                </span>
                              </td>
                              <td data-column-id="name" className="gridjs-td">
                                Shannon
                              </td>
                              <td data-column-id="email" className="gridjs-td">
                                <span>
                                  <a href="">shannon@example.com</a>
                                </span>
                              </td>
                              <td
                                data-column-id="position"
                                className="gridjs-td"
                              >
                                Legacy Functionality Associate
                              </td>
                              <td
                                data-column-id="company"
                                className="gridjs-td"
                              >
                                Zemlak Group
                              </td>
                              <td
                                data-column-id="country"
                                className="gridjs-td"
                              >
                                South Georgia
                              </td>
                              <td
                                data-column-id="actions"
                                className="gridjs-td"
                              >
                                <span>
                                  <a
                                    href="#"
                                    className="text-reset text-decoration-underline"
                                  >
                                    Details
                                  </a>
                                </span>
                              </td>
                            </tr>
                            <tr className="gridjs-tr">
                              <td data-column-id="id" className="gridjs-td">
                                <span>
                                  <span className="fw-semibold">04</span>
                                </span>
                              </td>
                              <td data-column-id="name" className="gridjs-td">
                                Robert
                              </td>
                              <td data-column-id="email" className="gridjs-td">
                                <span>
                                  <a href="">robert@example.com</a>
                                </span>
                              </td>
                              <td
                                data-column-id="position"
                                className="gridjs-td"
                              >
                                Product Accounts Technician
                              </td>
                              <td
                                data-column-id="company"
                                className="gridjs-td"
                              >
                                Hoeger
                              </td>
                              <td
                                data-column-id="country"
                                className="gridjs-td"
                              >
                                San Marino
                              </td>
                              <td
                                data-column-id="actions"
                                className="gridjs-td"
                              >
                                <span>
                                  <a
                                    href="#"
                                    className="text-reset text-decoration-underline"
                                  >
                                    Details
                                  </a>
                                </span>
                              </td>
                            </tr>
                            <tr className="gridjs-tr">
                              <td data-column-id="id" className="gridjs-td">
                                <span>
                                  <span className="fw-semibold">05</span>
                                </span>
                              </td>
                              <td data-column-id="name" className="gridjs-td">
                                Noel
                              </td>
                              <td data-column-id="email" className="gridjs-td">
                                <span>
                                  <a href="">noel@example.com</a>
                                </span>
                              </td>
                              <td
                                data-column-id="position"
                                className="gridjs-td"
                              >
                                Customer Data Director
                              </td>
                              <td
                                data-column-id="company"
                                className="gridjs-td"
                              >
                                Howell - Rippin
                              </td>
                              <td
                                data-column-id="country"
                                className="gridjs-td"
                              >
                                Germany
                              </td>
                              <td
                                data-column-id="actions"
                                className="gridjs-td"
                              >
                                <span>
                                  <a
                                    href="#"
                                    className="text-reset text-decoration-underline"
                                  >
                                    Details
                                  </a>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="gridjs-footer">
                        <div className="gridjs-pagination">
                          <div
                            role="status"
                            aria-live="polite"
                            className="gridjs-summary"
                            title="Page 2 of 2"
                          >
                            Showing <b>6</b> to <b>10</b> of <b>10</b> results
                          </div>
                          <div className="gridjs-pages">
                            <button
                              tabIndex="0"
                              role="button"
                              title="Previous"
                              aria-label="Previous"
                              className=""
                            >
                              Previous
                            </button>
                            <button
                              tabIndex="0"
                              role="button"
                              className=""
                              title="Page 1"
                              aria-label="Page 1"
                            >
                              1
                            </button>
                            <button
                              tabIndex="0"
                              role="button"
                              className="gridjs-currentPage"
                              title="Page 2"
                              aria-label="Page 2"
                            >
                              2
                            </button>
                            <button
                              tabIndex="0"
                              role="button"
                              title="Next"
                              aria-label="Next"
                              className=""
                              disabled=""
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

  );
}

export default GridTable;
