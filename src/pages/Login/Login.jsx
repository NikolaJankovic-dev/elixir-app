import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ce from "../../assets/ce.jpg";
import circle from "../../assets/circle.jpg";
import { loginRequest } from "../../getters/getters";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    loginRequest(email, password).then((res) => {
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/");
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <img
        src={ce}
        alt="ce"
        style={{ borderRadius: "50%", cursor: "pointer" }}
      />
      <Box
        sx={{
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          borderRadius: "10px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h5">Login</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            //   gap: 5,
            alignItems: "center",

            //   padding: "20px",
          }}
        >
          {/* <Box sx={{
            borderRight: "1px solid black",
        }}> */}
          <img
            src={circle}
            alt="circle"
            style={{
              width: "30%",
              padding: "20px",
              //   borderRight: "1px solid black",
            }}
          />
          {/* </Box> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 5,
              padding: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type={visible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
        </Box>
        <Button variant="contained" onPointerDown={handleLogin}
        sx={{ bgcolor: "#3A673C",}}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
