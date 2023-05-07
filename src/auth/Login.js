import React, { useContext, useEffect, useState } from "react";
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
  const context = useContext(userContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/welcome");
      }
    });
  }, [auth, navigate]);

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
          localStorage.setItem("userEmail", email);
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

  return (
    <div className="bg-img-login">
      <div id="login">
        <div className="login">
          <h2 className="login">Login your account!</h2>
          <form onSubmit={handleSubmit}>
            <strong>User Email</strong>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              autoComplete="username"
            />
            <strong>Password</strong>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            <p>{err}</p>
            <div className="footer">
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
                <Button type="submit" className="login-btn">
                  Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
