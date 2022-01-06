import React, { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

function Footer() {
  const [time, setTime] = useState("");
  const [dayTime, setDayTime] = useState("");
  const [hourTime, setHourTime] = useState("");
  const [minuteTime, setMinuteTime] = useState("");

  let date = new Date();
  let nextYear = date.getFullYear() + 1;

  useEffect(() => {
    let countDownDate = new Date("jan 01, " + nextYear + " 00:00:00").getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setDayTime(days);
      setHourTime(hours);
      setMinuteTime(minutes);

      if (distance < 0) {
        clearInterval(x);
        setTime("Happy New Year!!");
      }
    }, 1000);
  }, []);
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-countdown">
          <h3 className="newyear-title">New Year Countdown</h3>
          <div className="countdown-container">
            <div className="countdown-days">
              <span className="countdown-time">{dayTime}</span>
              <span className="countdown-span">Days</span>
            </div>
            <div className="countdown-hours">
              <span className="countdown-time">{hourTime}</span>
              <span className="countdown-span">Hours</span>
            </div>
            <div className="countdown-mins">
              <span className="countdown-time">{minuteTime}</span>
              <span className="countdown-span">Min</span>
            </div>
          </div>
          {time}
        </div>
        <div className="footer-update-info">📌Updates On Every December📌</div>
      </div>
      <div className="footer-right">
        <div className="footer-contact">
          <span className="contact-logo">
            <InstagramIcon />
          </span>
          <span className="contact-logo">
            <GitHubIcon />
          </span>
          <span className="contact-logo">
            <YouTubeIcon />
          </span>
          <span className="contact-logo">
            <FacebookIcon />
          </span>
        </div>
        <div className="footer-name">
          <img className="logo_img" src="img/mainlogo_web.png" alt="logo" />
          <p className="logo_name">Justin's Favorite</p>
        </div>
        <div className="footer-copy">
          <span className="copy-span">Movie - IMDB/</span>
          <span className="copy-span"> Music - Youtube/</span>
          <span className="copy-span">Item - COUPANG</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
