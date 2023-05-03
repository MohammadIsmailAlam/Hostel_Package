import React from "react";
import backgroundImage from "../Assets/img/hl3.jpg";
import { Button } from "@mui/material";
import Logo from "../Assets/img/logo.png";

export default function Dashboard() {
  return (
    <div
      className="bg-img"
      style={{
        backgroundImage: `url(${backgroundImage})`,
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
        >
          Room Details
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#444444", color: "white" }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#444444", color: "white" }}
        >
          Log In
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#444444", color: "white" }}
        >
          Contact
        </Button>
      </div>
    </div>
  );
}
