import React from "react";

export default function Contact() {
  return (
    <div className="container">
      <div className="content-details">
        <div className="left-side">
          <div className="address details">
            <i className="fa fa-map-marker-alt" />
            <div class="topic">Address</div>
            <div class="text-one">Dhanmondi 32</div>
            <div class="text-two">Dhaka</div>
          </div>

          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">Phone</div>
            <div class="text-one">+0198 9893 5647</div>
            <div class="text-two">+0196 3434 5678</div>
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div class="topic">Email</div>
            <div class="text-one">pritylata@gmail.com</div>
            <div class="text-two">info.@gmail.com</div>
          </div>
        </div>

        <div className="right-side">
          <div class="topic-text">Send us a message</div>
          <p>
            If you have any work from me or any types of quries related to my
            tutorial, you can send me message from here. It's my pleasure to
            help you.
          </p>
          <form action="#">
            <div className="input-box">
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className="input-box massage-box">
              <input type="text" placeholder="Add a message" />
            </div>

            <div class="button">
              <input type="button" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
