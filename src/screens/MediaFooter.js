import React, { useState, useEffect } from "react";

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
        <span>New Year Countdown</span>
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
      </div>
      <div className="media-contact">
        <span>Contact</span>
      </div>
      <div className="media-logo-name">
        <span>Justin's Favorite</span>
      </div>
    </div>
  );
}

export default MediaFooter;
