import { toast } from "react-toastify";

export const notifyError = (text) => {
  toast.warn(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    closeButton: false,
    style: { background: "#D95C5C" },
  });
};

export const notifySuccess = (text) => {
  toast.success(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "colored",
    closeButton: false,
  });
};
