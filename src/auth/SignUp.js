import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
import { Button } from "@mui/material";
import signUpBackgroundImg from "../Assets/img/login.jpg";

const Signup = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const context = useContext(userContext);

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");

  let handleSubmit = () => {
    if (!name && !email && !password) {
      setErr("Fill the all details!");
    } else if (!name) {
      setErr("Enter your name!");
    } else if (!email) {
      setErr("Enter your email!");
    } else if (!password) {
      setErr("Enter your password!");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 character!");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            // Profile updated!
            setErr("");
            context.setUserEmail(email);
            navigate("/DashBoard");
          });
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/email-already-in-use") {
            setErr("Email already in use!");
          } else {
            setErr("");
          }
        });
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div
      className="bg-img-signup"
      style={{
        backgroundImage: `url(${signUpBackgroundImg})`,
      }}
    >
      <div id="signup">
        <div className="signup">
          <h2>Create a account!</h2>
          <form onClick={handleSubmit}>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter your username"
              autoComplete="username"
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </form>

          <p>{err}</p>
          <div
            className="footer"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <Link to="/login" style={{ marginRight: "10px" }}>
                <strong>Already Have An Account?</strong>
              </Link>
            </div>
            <div>
              <Button type="submit" className="signup-btn">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
