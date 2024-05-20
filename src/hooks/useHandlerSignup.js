import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

// Alert Message
const message = (message, status) => {
  if (status === "success") {
    toast.success(message, {
      duration: 4000,
    });
  } else {
    toast.error(message, {
      duration: 4000,
    });
  }
};

// useHandleSubmit
function useHandleSubmit(
  name,
  email,
  password,
  passwordConfirm,
  setError,
  photo,
  user,
  setUser
) {
  async function handelSignUp(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("passwordConfirm", passwordConfirm);
    try {
      await axios
        .post(
          // "http://localhost:8000/api/v1/users/signup",
          "https://backend-e-commerce-food-products.onrender.com/api/v1/users/signup",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then(async (res) => {
          await setUser(res);
          if (res.data.status === "success") {
            localStorage.setItem("token", res.data.token);
          }
          if (res.data.status === "success") {
            message("Account Created Successfully", "success");
          }
          setTimeout(() => {
            setUser("");
          }, 3000);
        });
    } catch (error) {
      if (error.response?.data?.status === "error") {
        message("Account Not Created", "error");
      }
      setError(() => error?.response?.data?.message);
    }
  }
  return [handelSignUp, <Toaster />];
}

export default useHandleSubmit;
