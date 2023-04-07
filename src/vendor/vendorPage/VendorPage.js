import React from "react";
import { Link } from "react-router-dom";

function VendorPage() {
  return (
    <div
      className="layout-wrapper landing"
      style={{ backgroundColor: "#000000" }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-landing navbar-light fixed-top"
        id="navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="index.html">
            {/* <img
              src="assets/images/logo-dark.png"
              className="card-logo card-logo-dark"
              alt="logo dark"
              height={17}
            /> */}
            <img
              src="assets/images/logo3.png"
              className="card-logo card-logo-light"
              alt="logo light"
              style={{ height: "50px" }}
            />
          </a>
          <button
            className="navbar-toggler py-0 fs-20 text-body"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mt-2 mt-lg-0" id="navbar-example">
              {/* <li className="nav-item">
                <a className="nav-link active" href="#hero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#wallet">Wallet</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#marketplace">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#categories">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#creators">Creators</a>
              </li> */}
            </ul>
            <div className="gap-2">
              <Link to="/enquiryForm" className="btn btn-success">
                Start Selling
              </Link>
              <Link to="/vendorAuth" className="btn btn-success">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <section className="section nft-hero" id="hero">
        <div className="bg-overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-sm-10">
              <div className="text-center">
                <h1 className="display-4 fw-medium mb-4 lh-base text-white">
                  Let's grow TOGETHER & make your Brand Popular
                  {/* <span className="text-success">NFT Marketplace</span> */}
                </h1>
                {/* <p className="lead text-white-50 lh-base mb-4 pb-2">
                  Can artwork be NFT? NFTs (non-fungible tokens) are
                  one-of-a-kind digital assets. Given they're digital in nature,
                  can physical works of art be turned into NFTs?.
                </p> */}
                <div className=" gap-2 justify-content-center">
                  <Link to="/enquiryForm" className="btn btn-primary">
                    Start Selling
                    <i className="ri-arrow-right-line align-middle ms-1" />
                  </Link>
                  <Link to="/vendorAuth" className="btn btn-danger">
                    Log In
                    <i className="ri-arrow-right-line align-middle ms-1" />
                  </Link>
                </div>
              </div>
            </div>
            {/*end col*/}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
    </div>
  );
}

export default VendorPage;
