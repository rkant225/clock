import React, { useEffect, useState } from "react";
import "./DigitalDotClock.css";

const DigitalDotClock = () => {

  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const [second, setSecond] = useState('00');

  const [AMPM, setAMPM] = useState('AM');

  const [hourDashOffset, setHourDashOffset] = useState(0);
  const [minuteDashOffset, setMinuteDashOffset] = useState(0);
  const [secondDashOffset, setSecondDashOffset] = useState(0);

  const [hourDotRotationDeg, setHourDotRotationDeg] = useState('0deg');
  const [minuteDotRotationDeg, setMinuteDotRotationDeg] = useState('0deg');
  const [secondDotRotationDeg, setSecondDotRotationDeg] = useState('0deg');



  const updateTime = () => {
    const currentDate = new Date();
    const h =
      (currentDate.getHours() % 12 || 12) < 10
        ? `0${currentDate.getHours() % 12 || 12}`
        : currentDate.getHours() % 12 || 12;
    const m =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : currentDate.getMinutes();
    const s =
      currentDate.getSeconds() < 10
        ? `0${currentDate.getSeconds()}`
        : currentDate.getSeconds();
    const ampm = currentDate.getHours() <= 12 ? "AM" : "PM";

    setHour(h);
    setMinute(m);
    setSecond(s);
    setAMPM(ampm);

    const totalDashOffset_second = 754;
    setSecondDashOffset(totalDashOffset_second - (totalDashOffset_second * Number(s)) / 60);

    const totalDashOffset_minute = 628;
    setMinuteDashOffset(totalDashOffset_minute - (totalDashOffset_minute * Number(m)) / 60);

    const totalDashOffset_hour = 503;
    setHourDashOffset(totalDashOffset_hour - (totalDashOffset_hour * Number(h)) / 12);


    setHourDotRotationDeg(`${Number(h) * 30}deg`);
    setMinuteDotRotationDeg(`${Number(m) * 6}deg`);
    setSecondDotRotationDeg(`${Number(s) * 6}deg`);
  };

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="digital-dot-clock-container">
      <div className="digital-dot-clock">

        <div className="digital-dot-clock-hand-container" style={{"--clr" : "#04fc43", "--secondDashOffset" : secondDashOffset}}>
          <div className="digital-dot-clock-hand-dot" style={{"--dotRotationDegree" : secondDotRotationDeg, "--translateY": "0px"}}></div>
          <svg className="digital-dot-clock-hand-svg">
            <circle className="digital-dot-clock-second-hand"></circle>
          </svg>
        </div>

        <div className="digital-dot-clock-hand-container" style={{"--clr" : "#fee800", "--minuteDashOffset" : minuteDashOffset}}>
        <div className="digital-dot-clock-hand-dot" style={{"--dotRotationDegree" : minuteDotRotationDeg, "--translateY": "20px"}}></div>
          <svg className="digital-dot-clock-hand-svg">
            <circle className="digital-dot-clock-minute-hand"></circle>
          </svg>
        </div>

        <div className="digital-dot-clock-hand-container" style={{"--clr" : "#ff2972", "--hourDashOffset" : hourDashOffset}}>
          <div className="digital-dot-clock-hand-dot" style={{"--dotRotationDegree" : hourDotRotationDeg, "--translateY": "40px"}}></div>
          <svg className="digital-dot-clock-hand-svg">
            <circle className="digital-dot-clock-hour-hand"></circle>
          </svg>
        </div>

        <div className="digital-dot-clock-digital-clock">
          <span className="digital-dot-clock-digital-clock-digit" style={{"--clr" : "#ff2972"}}>{hour} : </span>
          <span className="digital-dot-clock-digital-clock-digit" style={{"--clr" : "#fee800"}}>{minute} : </span>
          <span className="digital-dot-clock-digital-clock-digit" style={{"--clr" : "#04fc43"}}>{second} </span>
          <span className="digital-dot-clock-digital-clock-ampm-digit">{AMPM} </span>
        </div>

      </div>
    </div>
  );
};

export default DigitalDotClock;
