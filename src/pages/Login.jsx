import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/userSloce/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const [inp, setInp] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    let userDetails = { inp, pass };
    dispatch(loginUser(userDetails)).then((result) => {
      if (result.payload) {
        setInp("");
        setPass("");
        navigation("/");
      }
    });
  };
  return (
    <div>
      <Input value={inp} onChange={(e) => setInp(e.target.value)} />
      <Input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        type="password"
      />
      <Button onClick={handleLogin}>{loading ? "Loding....." : Login}</Button>
    </div>
  );
};

export default Login;
