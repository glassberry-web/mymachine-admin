import React from "react";
import SideBar from "../utils/SideBar";

const ProductEnquiryList = () => {
  // const [response, setResponse] = useState([]);

  // const enquiryDetail = async () =>
  //   await axios
  //     .get(User_ENQUIRY)
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
  // console.log("enquiryRes===>", response);

  return (
    <div className="page-content">
      <SideBar title="User Enquiry" URL="/enquiry/getUserEnquiry" />
    </div>
  );
};

export default ProductEnquiryList;
