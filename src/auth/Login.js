import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
import { Button } from "@mui/material";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const context = useContext(userContext);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    if (!email || !password) {
      setErr("Please fill in all fields!");
    } else if (!validateEmail(email)) {
      setErr("Invalid email address!");
    } else if (password.length < 8) {
      setErr("Password must be at least 8 characters long!");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setErr("");
          context.setUserEmail(email);
          localStorage.setItem("userEmail", email); // save email in local storage
          navigate("/welcome");
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/wrong-password") {
            setErr("Wrong password!");
          } else if (error.code === "auth/user-not-found") {
            setErr("Email not registered!");
          } else {
            setErr("");
          }
        });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/welcome");
    }
  });

  return (
    <div className="bg-img-login">
      <div id="login">
        <div className="login">
          <h2 className="login">Login your account!</h2>
          <strong>User Email</strong>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />
          <strong>Password</strong>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />
          <p>{err}</p>

          <div
            className="footer"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <Link to="/signup" style={{ marginRight: "10px" }}>
                <strong>Create An Account?</strong>
              </Link>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={handleGoBack}
                style={{ marginRight: "10px" }}
              >
                Back
              </Button>
              <Button onClick={handleSubmit} className="login-btn">
                Login
              </Button>
            </div>
          </div>

          {/* <Button style={{ height: "40px" }} onClick={handleGoogleAuth}>
            <img src={GoogleIcon} alt="Google" />
            <span>Log in with Google</span>
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
