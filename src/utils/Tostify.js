import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successMessage = () => {
  toast.success("Success Notification !", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const errorMessage = () => {
  toast.error("Error Notification !", {
    position: toast.POSITION.TOP_CENTER,
  });
};
export const pendingMessage = () => {};
