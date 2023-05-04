import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="content">
        <div className="left-side">
          <div className="address details">
            <i className="fa fa-map-marker-alt" />
            <div className="topic">Address</div>
            <div className="text-one">Dhanmondi 32</div>
            <div className="text-two">Dhaka</div>
          </div>

          <div className="phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="topic">Phone</div>
            <div className="text-one">+0198 9893 5647</div>
            <div className="text-two">+0196 3434 5678</div>
          </div>
          <div className="email details">
            <i className="fas fa-envelope"></i>
            <div className="topic">Email</div>
            <div className="text-one">pritylata@gmail.com</div>
            <div className="text-two">info.@gmail.com</div>
          </div>
        </div>

        <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your NclassName" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="input-box massage-box">
            <input type="text" placeholder="Add a message" />
          </div>

          <div className="button">
          <input type="button" value="Send Now"/>
        </div>
        </form>
        </div>
      </div>
    </div>
  );
}
