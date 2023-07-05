import { useState,  useRef, useMemo  } from "react";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { Mail } from "../api/apiEndpoints";
import axios from "../api/axios";
import MailData from "../data/MailData";
import JoditEditor from 'jodit-react';
import 'jodit/build/jodit.min.css';
const buttons = ["image"]
const editorConfig = {
  responsive: true,
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true
  },
 
}
function JoditEditorWrapper({ content, setContent, editorConfig }) {
  const editor = useRef(null);

  return useMemo(() => (
    <JoditEditor
      ref={editor}
      value={content}
      config={editorConfig}
      onChange={(newContent) => setContent(newContent)}
    />
  ), [content, setContent, editorConfig]);
}
function EnquiryMail() {
  const[image,setImage]=useState("");
  const [content, setContent] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imgHandler=(event)=>{
    if (event.target && event.target.files[0]) {
      setImage(event.target.files[0]);
    } else {
      console.log("Something went wrong");
    }
  }
console.log("img",image)
  const navigate = useNavigate();
  const submitHandler = async (data) => {
    console.log("data===>", data);
    const formData = new FormData();

   


    // formData.append('file', data.file[0]);
    try {
      formData.append("company_name", data.company_name);
      formData.append("address", data.address);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("country", data.country);
      formData.append("phoneNo", data.phoneNo);
      formData.append("mobileNo", data.mobileNo);
      formData.append("emailId", data.emailId);
      formData.append("ownerName", data.ownerName);
      formData.append("company_description", content);
      formData.append('logo', image);
      formData.append("regNo", data.regNo);
      formData.append("panNo", data.panNo);
      formData.append("discription", data.discription);
      formData.append("type", data.type);
      formData.append("userName", data.userName);
      formData.append("password", data.password);
      formData.append("machine", data.machine);
      formData.append("employees", data.employees);
      formData.append("engineer", data.engineer);
      formData.append("customer", data.customer);


      // const res = await axios.post(Mail, {...data});
      const res = await axios.post(Mail, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("res===>", res);
      if (res.status === 200) {
        navigate("/mail");
      }
    } catch (error) {
      console.log("post error===>", error.message);
    }
  };

  return (
    <div className="formcolor">
      <h1 className="text-center my-3">Complete your Registration</h1>
    <form className="paddingform"
      onSubmit={handleSubmit(submitHandler)}
      action="/image"
      encType="multipart/form-data"
      method="POST"

    >
      
      {MailData.map((data) => {
        return (
          <div className="row mb-3" key={data.idx}>
            <div className="col-lg-2">
              <label htmlFor={data.htmlFor} className="form-label">
                {data.title}
              </label>
            </div>
            <div className="col-lg-9">
              { 
                data.title ==="Company discription" ? (<textarea
                type={data.type}
                className="form-control"
                id={data.id}
                onChange={imgHandler}
                accept={data.accept}
                placeholder={data.placeholder}
                {...register(`${data.name}`, {
                  required: true,
                })}
                />):
               (  data.title === "company_description" ? (
                <JoditEditorWrapper
                  content={content}
                  setContent={setContent}
                  editorConfig={editorConfig}
                />
              ) : 
              (data.title === "Company logo") ?
              (
                <input
                type={data.type}
                className="form-control"
                id={data.id}
                onChange={imgHandler}
                accept={data.accept}
                placeholder={data.placeholder}
               
              />):
                (
                  <input
                  type={data.type === "file" ? "text" : data.type}
                  className="form-control"
                  id={data.id}
                  onChange={imgHandler}
                  accept={data.accept}
                  placeholder={data.placeholder}
                  {...register(`${data.name}`, {
                    required: true,
                  })}
                />
                ))
              }
              
            </div>
          </div>
        );
      })}

      <div className="text-center ">
        <button type="submit" className="btn btn-warning w-50">
          Add
        </button>
      </div>
    </form>
    </div>
  );
}

export default EnquiryMail;
