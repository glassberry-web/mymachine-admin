// import { useEffect, useState } from "react";
import { TRADE_ENQUIRY } from "../api/apiEndpoints";
import axios from "../api/axios";
import SideBar from "../utils/SideBar";
import { ToastContainer, toast } from "react-toastify";

const EnquiryList = () => {
  // const [response, setResponse] = useState([]);
  // const [deleteData, setDeleteData] = useState("");

  // const enquiryDetail = async () =>
  //   await axios
  //     .get(TRADE_ENQUIRY)
  //     .then((res) => {
  //       // console.log(res?.data?.result);
  //       setResponse(res?.data?.result);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });

  // useEffect(() => {
  //   enquiryDetail();
  // }, []);
  const formUrl = "http://localhost:3001/mail";
  const statusHandler = async (id) => {
    localStorage.setItem("Approve", id);

    await axios
      .post(`/enquiry/mail?id=${id}&formUrl=${formUrl}`)
      .then((res) => {
        console.log("res====>", res);
      }) .then(() => {
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        })})
      .catch((error) => {
        console.log("error===>", error.message);
      });
  };

  return (
    <div className="page-content">
      <SideBar
        title="Enquiry List"
        onClick={statusHandler}
        URL={TRADE_ENQUIRY}
        searchItem="company_name"
      />
       <ToastContainer />
    </div>
  );
};

export default EnquiryList;
