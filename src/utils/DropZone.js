import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

function DropZone() {
  const [files, setFiles] = useState([]);

  // const { getRootProps, getInputProps } = useDropzone({
  //   accept: "image/*",
  //   onDrop,
  // });
  // const imageFiles = files.map((file) => (
  //   <div className="avatar-sm bg-light rounded">
  //     <img
  //       data-dz-thumbnail
  //       className="img-fluid rounded d-block"
  //       alt="Product-Image"
  //       src={file.preview}
  //       // style={img}
  //     />
  //   </div>
  // ));
  const { getRootProps, getInputProps, acceptedFiles, fileRejections } =
    useDropzone({
      maxFiles: 2,
      accept: {
        "image/png": [".png", ".jpg", ".jpeg"],
      },

      onDrop: (acceptedFiles) => {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          )
        );
      },
    });
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  console.log("img===>", files);
  return (
    <div>
      <h5 className="fs-14 mb-1">Product Gallery</h5>
      <p className="text-muted">Add Product Gallery Images.</p>

      <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()}/>
        {/* <div className="fallback">
          <input name="file" type="file" multiple="multiple" />
        </div> */}
        <div className="dz-message needsclick">
          <div className="mb-3">
            <i className="display-4 text-muted ri-upload-cloud-2-fill"></i>
          </div>

          <h5>Drop files here or click to upload.</h5>
        </div>
      </div>
{files?.map((file)=>{
  return(
    <ul className="list-unstyled mb-0" id="dropzone-preview">
        <li className="mt-2" id="dropzone-preview-list">
          {/* <!-- This is used as the file preview template --> */}
          <div className="border rounded">
            <div className="d-flex p-2">
              <div className="flex-shrink-0 me-3">
                <div className="avatar-sm bg-light rounded">
                  <img
                    data-dz-thumbnail
                    className="img-fluid rounded d-block"
                    src={file.preview}
                    alt="Product-Image"
                  />
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="pt-1">
                  <h5 className="fs-14 mb-1" data-dz-name>
                    {file.name}
                  </h5>
                  <p className="fs-13 text-muted mb-0" data-dz-size>{file.size}</p>
                  <strong
                    className="error text-danger"
                    data-dz-errormessage
                  ></strong>
                </div>
              </div>
              <div className="flex-shrink-0 ms-3">
                <button data-dz-remove className="btn btn-sm btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
  )
})}

      {/* <!-- end dropzon-preview --> */}
    </div>
  );
}

export default DropZone;
