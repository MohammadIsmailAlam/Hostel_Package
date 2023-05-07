import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

// import SinglePageImg from "../Assets/img/single.jpg";

const RoomDetails = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  const handleNextClick = () => {
    navigate("/Login");
  };

  return (
    <>
      <header id="main">
        <nav>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#444444", color: "white" }}
            onClick={handleGoBack}
          >
            Back
          </Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#444444", color: "white" }}
            onClick={handleNextClick}
          >
            Next
          </Button>
        </nav>
      </header>
      <div className="content row">
        <div className="image-single col-6">
          {/* <img src={SinglePageImg} alt="SinglePageImg" /> */}
        </div>
        <div className="main-text col-6">
          <h1>Single Room</h1>
          <h3>Details</h3>
          <p>
            <b>
              Here you can get 1 day, 3 days, 7 days, 15 and 1 month packages.
            </b>
            <br />
            <br />
            <b>Facilities</b>-You can choose your packages according to your
            choices like whether you wants to include hostel meal or not and
            services.
            <br />
            <br />
            <b>1 day package cost:</b> 500 bdt (<b>including meal: 800 bdt)</b>
            <br />
            <b>3 days package cost:</b> 500 bdt (<b>including meal: 800 bdt)</b>
            <br />
            <b>7 days package cost:</b> 500 bdt (<b>including meal: 800 bdt)</b>
            <br />
            <b>15 days package cost:</b> 500 bdt (
            <b>including meal: 800 bdt)</b>
            <br />
            <b>1 month package cost:</b> 500 bdt (
            <b>including meal: 800 bdt)</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;