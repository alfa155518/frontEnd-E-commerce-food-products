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

function useHandleSubmit(email, password, setUser, setError) {
  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          // "http://localhost:8000/api/v1/users/login",
          "https://backend-e-commerce-food-products.onrender.com/api/v1/users/login",
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          if (res.data.status === "success") {
            message("Login Successfully", "success");
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("status", "success");
            setUser(res);
            setTimeout(() => {
              setUser("");
            }, 10000);
          }
        });
    } catch (error) {
      if (error.response.data.status === "error") {
        message("Login Failed", "error");
      }
      setError(() => error.response.data.message);
    }
  };
  return [handelLogin, <Toaster />];
}

export default useHandleSubmit;
