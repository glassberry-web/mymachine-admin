import React, { useEffect, useState } from "react";

function ProductImage(props) {
  const [img, setImage] = useState("");
  useEffect(() => {
    setImage(props.image);
  }, [props.image]);
  return (
    <td className="td-grey-col">
      <img
        src={`http://localhost:5001/${img}`}
        alt="img"
        style={{ height: "60px", width: "60px" }}
      ></img>
    </td>
  );
}

export default ProductImage;
