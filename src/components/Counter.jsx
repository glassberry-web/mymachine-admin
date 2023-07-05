import React from "react";

import CountUp from "react-countup";
import LatestProduct from "../pages/LatestProduct";
import LatestTradeEnquiry from "../pages/LatestTradeEnquiry";
import LatestUserEnquiry from "../pages/LatestUserEnquiry";
import { Link } from "react-router-dom";

const Counter = () => {
  const data = [
    {
      id: 1,
      link: "View all products",
      linkk:"/Productlist",
      endValue: 560,
      percentage: 5000,
      para: "Total Machines",
    },
    {
      id: 2,
      linkk:"/Companylist",
      link: "View all vendors",
      endValue: 560,
      percentage: 500,
      para: "Vendors",
    },
    {
      id: 3,
      linkk:"/Enquirylist",
      link: "View trade enquiries",
      endValue: 560,
      percentage: 6000,
      para: "Trade Enquires",
    },
    {
      id: 4,
      linkk:"/Productenquirylist",
      link: "view customers enquiries",
      endValue: 560,
      percentage: 20,
      para: "Customers Enquires",
    },
  ];
  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            {data.map((val) => (
              <div className="col-xl-3 col-md-6" key={val.id}>
                <div className="card card-animate">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1 overflow-hidden">
                        <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                          {val.para}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <h5 className="text-success fs-14 mb-0">
                          <i className="ri-arrow-right-up-line fs-13 align-middle" />
                          {val.percentage}
                        </h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-end justify-content-between mt-4">
                      <div>
                        <h4 className="fs-22 fw-semibold ff-secondary mb-4">
                          
                          <CountUp
                            className="counter-value"
                            duration={4.75}
                            start={0}
                            end={val.endValue}
                          />
                        </h4>
                        <Link to={val.linkk} className="text-decoration-underline">
                          {val.link}
                        </Link>
                      </div>
                      {/* <div className="avatar-sm flex-shrink-0">
                        <span className="avatar-title bg-soft-primary rounded fs-3">
                          <i className="bx bx-dollar-circle text-primary" />
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <LatestProduct />
        <LatestTradeEnquiry />
        <LatestUserEnquiry />
      </div>
    </>
  );
};

export default Counter;
