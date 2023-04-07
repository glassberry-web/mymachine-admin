import { Link } from "react-router-dom";

function CompanyProfile(props) {
  console.log("props.res===>",props.response)

    return (
      props.response?.map((ele)=>{
        return(
          <div id="layout-wrapper">
          <div className="page-content">
            <div className="container-fluid">
              <div className="profile-foreground position-relative mx-n4 mt-n4">
                <div className="profile-wid-bg">
                  <img
                    src="assets/images/offer2.png"
                    alt=""
                    className="profile-wid-img"
                  />
                </div>
              </div>
              <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                <div className="row g-4">
                  <div className="col-auto">
                    <div className="avatar-lg">
                      <img
                        // src={ele.logo}
                        src={`http://localhost:5001/${ele.logo}` || ""}
                        alt="user-img"
                        className="img-thumbnail rounded-circle"
                      />
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col">
                    <div className="p-2">
                      <h3 className="text-white mb-1">{ele.userName}</h3>
                      <p className="text-white-75">Owner &amp; Founder</p>
                      <div className="hstack text-white-50 gap-1">
                        <div className="me-2">
                          <i className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle" />
                         {ele.city},{ele.state}{ele.country}
                        </div>
                        <div>
                          <i className="ri-building-line me-1 text-white-75 fs-16 align-middle" />
                          {ele.country}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                  <div className="col-12 col-lg-auto order-last order-lg-0">
                    <div className="row text text-white-50 text-center">
                      <div className="col-lg-6 col-4">
                        <div className="p-2">
                          <h4 className="text-white mb-1">24.3K</h4>
                          <p className="fs-14 mb-0">Followers</p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-4">
                        <div className="p-2">
                          <h4 className="text-white mb-1">1.3K</h4>
                          <p className="fs-14 mb-0">Following</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div>
                    <div className="d-flex">
                      {/* Nav tabs */}
                      <ul
                        className="nav nav-pills animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link fs-14 active"
                            data-bs-toggle="tab"
                            href="#overview-tab"
                            role="tab"
                          >
                            <i className="ri-airplay-fill d-inline-block d-md-none" />
                            <span className="d-none d-md-inline-block">
                              Overview
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link fs-14"
                            data-bs-toggle="tab"
                            href="#activities"
                            role="tab"
                          >
                            <i className="ri-list-unordered d-inline-block d-md-none" />
                            <span className="d-none d-md-inline-block">
                              Activities
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link fs-14"
                            data-bs-toggle="tab"
                            href="#projects"
                            role="tab"
                          >
                            <i className="ri-price-tag-line d-inline-block d-md-none" />
                            <span className="d-none d-md-inline-block">
                              Projects
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link fs-14"
                            data-bs-toggle="tab"
                            href="#documents"
                            role="tab"
                          >
                            <i className="ri-folder-4-line d-inline-block d-md-none" />
                            <span className="d-none d-md-inline-block">
                              Documents
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="flex-shrink-0">
                        <Link to={"/editProfile"} className="btn btn-info">
                          <i className="ri-edit-box-line align-bottom" /> Edit
                          Profile
                        </Link>
                      </div>
                    </div>
                    {/* Tab panes */}
                    <div className="tab-content pt-4 text-muted">
                      <div
                        className="tab-pane active"
                        id="overview-tab"
                        role="tabpanel"
                      >
                        <div className="row">
                          <div className="col-xxl-3">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title mb-5">
                                  Complete Your Profile
                                </h5>
                                <div className="progress animated-progress custom-progress progress-label">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    style={{ width: "30%" }}
                                    aria-valuenow={30}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  >
                                    <div className="label">30%</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title mb-3">Info</h5>
                                <div className="table-responsive">
                                  <table className="table table-borderless mb-0">
                                    <tbody>
                                      <tr>
                                        <th className="ps-0" scope="row">
                                          Company Name :
                                        </th>
                                        <td className="text-muted">{ele.company_name}</td>
                                      </tr>
                                      <tr>
                                        <th className="ps-0" scope="row">
                                          Owner Name :
                                        </th>
                                        <td className="text-muted">
                                        {ele.ownerName}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="ps-0" scope="row">
                                          E-mail :
                                        </th>
                                        <td className="text-muted">
                                        {ele.emailId}

                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="ps-0" scope="row">
                                          Mobile Number :
                                        </th>
                                        <td className="text-muted">
                                        {ele.mobileNo}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="ps-0" scope="row">
                                          Address :
                                        </th>
                                        <td className="text-muted">
                                        {ele.address}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="ps-0" scope="row">
                                          City :
                                        </th>
                                        <td className="text-muted">
                                        {ele.city}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="ps-0" scope="row">
                                          State :
                                        </th>
                                        <td className="text-muted">
                                        {ele.state}

                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="ps-0" scope="row">
                                          Registration Number :
                                        </th>
                                        <td className="text-muted">
                                        {ele.regNo}
                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="ps-0" scope="row">
                                          Pan Card Number :
                                        </th>
                                        <td className="text-muted">
                                        {ele.panNo}

                                        </td>
                                      </tr>
                                      <tr>
                                        <th className="ps-0" scope="row">
                                          Type :
                                        </th>
                                        <td className="text-muted">
                                        {ele.type}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              {/* end card body */}
                            </div>
                            {/* end card */}
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title mb-4">Portfolio</h5>
                                <div className="d-flex flex-wrap gap-2">
                                  <div>
                                    <a
                                      href="javascript:void(0);"
                                      className="avatar-xs d-block"
                                    >
                                      <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                        <i className="ri-github-fill" />
                                      </span>
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      href="javascript:void(0);"
                                      className="avatar-xs d-block"
                                    >
                                      <span className="avatar-title rounded-circle fs-16 bg-primary">
                                        <i className="ri-global-fill" />
                                      </span>
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      href="javascript:void(0);"
                                      className="avatar-xs d-block"
                                    >
                                      <span className="avatar-title rounded-circle fs-16 bg-success">
                                        <i className="ri-dribbble-fill" />
                                      </span>
                                    </a>
                                  </div>
                                  <div>
                                    <a
                                      href="javascript:void(0);"
                                      className="avatar-xs d-block"
                                    >
                                      <span className="avatar-title rounded-circle fs-16 bg-danger">
                                        <i className="ri-pinterest-fill" />
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              {/* end card body */}
                            </div>
                            {/* end card */}
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title mb-4">Skills</h5>
                                <div className="d-flex flex-wrap gap-2 fs-15">
                                  <a
                                    href="javascript:void(0);"
                                    className="badge badge-soft-primary"
                                  >
                                    Photoshop
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="badge badge-soft-primary"
                                  >
                                    illustrator
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="badge badge-soft-primary"
                                  >
                                    HTML
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="badge badge-soft-primary"
                                  >
                                    CSS
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="badge badge-soft-primary"
                                  >
                                    Javascript
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="badge badge-soft-primary"
                                  >
                                    Php
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="badge badge-soft-primary"
                                  >
                                    Python
                                  </a>
                                </div>
                              </div>
                              {/* end card body */}
                            </div>
                            {/* end card */}
                            {/*end card*/}
                            {/*end card*/}
                          </div>
                          {/*end col*/}
                          <div className="col-xxl-9">
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title mb-3">About</h5>
                                <p>
                                {ele.discription}
                                </p>


                                {/*end row*/}
                              </div>
                              {/*end card-body*/}
                            </div>
                            {/* end card */}
                          </div>
                          {/*end col*/}
                        </div>
                        {/*end row*/}
                      </div>
                      {/*end tab-pane*/}
                      {/*end tab-pane*/}
                      {/*end tab-pane*/}
                    </div>
                    {/*end tab-content*/}
                  </div>
                </div>
                {/*end col*/}
              </div>
              {/*end row*/}
            </div>
            {/* container-fluid */}
          </div>
          {/* End Page-content */}

        {/* end main content*/}
      </div>
        )

       })
    );


}

export default CompanyProfile;
