import { createContext, useState } from "react";

export const UserContextData = createContext();

function UserData({ children }) {
  let [user, setUser] = useState({});
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordConfirm, setPasswordConfirm] = useState("");
  let [photo, setPhoto] = useState("");
  let [error, setError] = useState("");

  return (
    <UserContextData.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        passwordConfirm,
        setPasswordConfirm,
        photo,
        setPhoto,
        error,
        setError,
        user,
        setUser,
      }}>
      {children}
    </UserContextData.Provider>
  );
}

export default UserData;
