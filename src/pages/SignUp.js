import React, { useState } from "react";
import Layout from "../components/Layout";
import "../styles/SignUp.css";
import axios from "axios";
function SignUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event) => {
    let inputObj = { username, email, password };
    let url = "https://vit-crud-backend.onrender.com:4000/users/createuser";
    axios
      .post(url, inputObj)
      .then((res) => {
        if (res.status === 200) {
          alert("User Created Successfully");
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    event.preventDefault();
  };
  return (
    <Layout>
      <h1>SignUp page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Sign Up" />
      </form>
    </Layout>
  );
}
//useState() and useEffect() : react hooks
// react hooks helps us to use class based components into functional components
export default SignUp;
