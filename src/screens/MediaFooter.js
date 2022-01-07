import React, { useState, useEffect } from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

function MediaFooter() {
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
    <div className="media-footer-container">
      <div className="media-countdown">
        {time}
        <span className="media-new-year">New Year Countdown</span>
        <div className="media-countdown-container">
          <div className="media-countdown-box">
            <span className="media-countdown-time">{dayTime}</span>
            <span className="media-countdown-span">Days</span>
          </div>
          <div className="media-countdown-box">
            <span className="media-countdown-time">{hourTime}</span>
            <span className="media-countdown-span">Hr</span>
          </div>
          <div className="media-countdown-box">
            <span className="media-countdown-time">{minuteTime}</span>
            <span className="media-countdown-span">Min</span>
          </div>
        </div>
        <span>📌Updates On Every December📌</span>
      </div>
      <div className="media-contact">
        <span>Contact</span>
        <div className="media-contact-box">
          <span className="media-contact-logo">
            <InstagramIcon />
          </span>
          <span className="media-contact-logo">
            <GitHubIcon />
          </span>
          <span className="media-contact-logo">
            <YouTubeIcon />
          </span>
          <span className="media-contact-logo">
            <FacebookIcon />
          </span>
        </div>
      </div>
      <div className="media-logo-name">
        <img src="img/mainlogo_web.png" alt="logo" className="media-logo-img" />
        <span className="media-logo-span">Justin's Favorite</span>
      </div>
    </div>
  );
}

export default MediaFooter;
