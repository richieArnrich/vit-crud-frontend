import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewSingleUser() {
  const obj1 = useParams();
  console.log(obj1);
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get(
        "https://vit-crud-backend.onrender.com/users/getsingleuser/" + obj1.id
      )
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <h1>View Single user</h1>
      <p>id: {user._id}</p>
      <p>name: {user.username}</p>
      <p>email: {user.email}</p>
    </Layout>
  );
}

export default ViewSingleUser;
