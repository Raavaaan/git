import { Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

const Home = () => {
  const [user, setUser] = useState(getUser);

  const handleLogout = () => {
    localStorage.removeItem('user')
    setUser(null)
  };
  return (
    <div
      style={{
        border: "1px solid red",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user ? <Button onClick={handleLogout}>LOGOUT</Button> : ""}
      {/* <Button>s</Button> */}
    </div>
  );
};

export default Home;
