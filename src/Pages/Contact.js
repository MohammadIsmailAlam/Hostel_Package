import React from "react";
import { Mail, Phone } from "@material-ui/icons";
import { LocationCity } from "@mui/icons-material";

function Contact() {
  return (
    <div className="container">
      <div className="contents">
        <div className="left-side">
          <div className="address details">
            <LocationCity />
            <div className="topic">Address</div>
            <div className="text-one">Dhanmondi 32</div>
            <div className="text-two">Dhaka</div>
          </div>
          <div className="phone details">
            <Phone />
            <div className="topic">Phone</div>
            <div className="text-one">+0198 9893 5647</div>
            <div className="text-two">+0196 3434 5678</div>
          </div>
          <div className="email details">
            <Mail />
            <div className="topic">Email</div>
            <div className="text-one">pritylata@gmail.com</div>
            <div className="text-two">info.@gmail.com</div>
          </div>
        </div>
        <div className="right-side">
          <div className="topic-text">Send us a message</div>
          <p>
            If you have any work from me or any types of quries related to my
            tutorial, you can send me message from here. It's my pleasure to help
            you.
          </p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box message-box">
              <input type="text" placeholder="Write your comments" />
            </div>
            <div className="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;