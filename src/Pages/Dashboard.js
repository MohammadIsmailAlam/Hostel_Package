import React from "react";
import backgroundImage from "../Assets/img/hl3.jpg";
import Logo from "../Assets/img/logo.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function Dashboard() {
  
  const navigate = useNavigate();

  const handleRoomDetails = () => {
    navigate("/roomDetails")
  }

  const handleSignUpClick = () => {
    navigate("/SignUp");
  };

  const handleLoginClick = () => {
    navigate("/Login");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div
      className="bg-img"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <img className="logo" src={Logo} alt="PrityLata Hostel Logo" />
      <div className="text-overlay">
        <h1 className="title-name">PrityLata Hostel</h1>
        <p className="title-des">Book Your Package,</p>
        <p className="title-des">According To Your Choice🌺</p>
      </div>
      <div className="dashboard-btn">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#444444", color: "white" }}
          onClick={handleRoomDetails}
        >
          Room Details
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#444444", color: "white" }}
          onClick={handleSignUpClick}
        >
          Sign Up
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#444444", color: "white" }}
          onClick={handleLoginClick}
        >
          Log In
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#444444", color: "white" }}
          onClick={handleContactClick}
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
