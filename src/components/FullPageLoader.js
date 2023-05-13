import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import { CirclesWithBar } from 'react-loader-spinner'
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
const FullPageLoader = (props) => {
    const {loading} =props
  return (
    <div style={{ position: 'fixed', top: "60%", left:"50%", transform:"translate(-70%, -50%)", bottom: 0, backgroundColor:'rgba(0, 0, 0, 0.9)', zIndex: 9999 }}>
    <HashLoader cssOverride={override} size={50} loading={loading} color={"#36d7b7"} />
    {/* <CirclesWithBar
  height="100%"
  width="100%"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor=""
  innerCircleColor=""
  barColor=""
  ariaLabel='circles-with-bar-loading'
/> */}
  </div>
  )
}

export default FullPageLoader