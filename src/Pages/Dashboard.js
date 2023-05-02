import React from "react";
import backgroundImage from "../Assets/img/hl3.jpg";
import { Button } from "@mui/material";

export default function Dashboard() {
  return (
    <div
      className="bg-img"
      style={{
        height: "100vh",
        width: "100vw",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
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
