import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    if (!localStorage.getItem("name")) {
      navigate("/");
    } else {
      setName(localStorage.getItem("name"));
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear local storage and redirect to login
    localStorage.clear();
    navigate("/dashboard");
  };
  const handleBook = () => {
    navigate("/booking");
  };
  const handlePackages = () => {
    navigate("/packages");
  };
  const handleChangePassword = () => {
    // Clear local storage and redirect to login
    localStorage.clear();
    navigate("/change-password");
  };

  return (
    <div>
      <h1>
        Hello, {name}
        <br />
        <br />
        Cordially Welcoming you to our Pritylata Hostel🌺
      </h1>
      <br />
      <nav className="home-nav">
        <Button onClick={handleLogout}>Logout</Button>
        <Button onClick={handleBook}>Bookings</Button>
        <Button onClick={handlePackages}>Packages</Button>
        <Button onClick={handleChangePassword}>Change Password</Button>
      </nav>
    </div>
  );
}

export default Welcome;
