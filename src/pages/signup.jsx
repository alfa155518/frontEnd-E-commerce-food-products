import { useContext } from "react";
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { UserContextData } from "../context/UserContext";
import img from "../images/blog-3.jpg";
import useHandler from "../hooks/useHandlerSignup";
import "../sass/pages/signup-login.css";
import { Link } from "react-router-dom";

function Signup() {
  const {
    name,
    email,
    password,
    passwordConfirm,
    photo,
    error,
    setName,
    setEmail,
    setPassword,
    setPasswordConfirm,
    setPhoto,
    setError,
    user,
    setUser,
  } = useContext(UserContextData);

  // Costume Hook To Handle Sign-up User
  let [handelSignUp, alertMessage] = useHandler(
    name,
    email,
    password,
    passwordConfirm,
    setError,
    photo,
    user,
    setUser
  );
  // console.log(user.data.status);
  function handleImage(e) {
    setPhoto(e.target.files[0]);
  }
  localStorage.setItem(
    "photo",
    user?.data?.data?.photo?.url ||
      "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/"
  );
  return (
    <section className="sign-up-section">
      <div className="container-img">
        <img src={img} alt="sign-up-imag" />
      </div>

      <div className="container-form">
        <form>
          <h2>Create Account</h2>
          <p>
            Create your account in our store so that you can enjoy all the
            features and be our distinguished customer, and everything will be
            safe
          </p>
          <div className="input-box">
            <input
              type="text"
              placeholder="First Name"
              id="name"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => {
                setName(() => e.target.value);
              }}
            />
            <FiUser className="user-icon" />
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              id="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setError(() => "");
                setEmail(() => e.target.value);
              }}
            />
            <MdOutlineMail className="mail-icon" />
            {error === "Email Already Exist" && (
              <p className="error-message">{error}</p>
            )}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              autoComplete="previous values"
              id="password"
              value={password}
              onChange={(e) => {
                setError(() => "");
                setPassword(() => e.target.value);
              }}
            />
            <RiLockPasswordLine className="pass-icon" />
            {error?.startsWith("User validation failed: password:") && (
              <p className="error-message">
                Password must be at least 8 characters
              </p>
            )}
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              autoComplete="previous values"
              id="c-password"
              value={passwordConfirm}
              onChange={(e) => {
                setError(() => "");
                setPasswordConfirm(() => e.target.value);
              }}
            />
            <RiLockPasswordLine className="pass-confirm-icon" />
            {error?.startsWith("You Must Confirm correct password") && (
              <p className="error-message">{error}</p>
            )}
          </div>
          <div className="input-box">
            <input type="file" onChange={handleImage} />
          </div>
          <button className="btn-sign-up" type="submit" onClick={handelSignUp}>
            Sign Up
          </button>
          {user?.data?.status === "success" && (
            <Link className="continue" to="/login">
              Click Here
            </Link>
          )}
          <p className="login-text">
            Already have an account?
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      {alertMessage}
    </section>
  );
}

export default Signup;
