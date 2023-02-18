import React, { useEffect, useState } from "react";
import "./DotClock.css";

const DotClock = () => {

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

    const totalDashOffset = 285;
    setHourDashOffset(totalDashOffset - (totalDashOffset * Number(h)) / 12);
    setMinuteDashOffset(totalDashOffset - (totalDashOffset * Number(m)) / 60);
    setSecondDashOffset(totalDashOffset - (totalDashOffset * Number(s)) / 60);

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
    <div className="dot-clock-container">
      <div className="dot-clock-container">
        <div className="dot-clock-hand" style={{"--clr": "#ff2972"}}>
        <div className="dot-clock-dot" style={{"--dotRotationDeg": hourDotRotationDeg}}></div>
          <svg className="dot-clock-circle-container-svg">
            <circle className="dot-clock-circle-1"></circle>
            <circle
              className="dot-clock-circle-2"
              style={{
                "--strokeDashOffset": hourDashOffset,
              }}
            ></circle>
          </svg>
          <div className="dot-clock-hand-text-container">
            <div className="dot-clock-hand-text">{hour}</div>
            <div className="dot-clock-hand-identifier">Hours</div>
          </div>
        </div>

        <div className="dot-clock-hand" style={{"--clr": "#fee800"}}>
        <div className="dot-clock-dot" style={{"--dotRotationDeg": minuteDotRotationDeg}}></div>
          <svg className="dot-clock-circle-container-svg">
            <circle className="dot-clock-circle-1"></circle>
            <circle
              className="dot-clock-circle-2"
              style={{
                "--strokeDashOffset": minuteDashOffset,
              }}
            ></circle>
          </svg>
          <div className="dot-clock-hand-text-container">
            <div className="dot-clock-hand-text">{minute}</div>
            <div className="dot-clock-hand-identifier">Minutes</div>
          </div>
        </div>

        <div className="dot-clock-hand" style={{"--clr": "#04fc43"}}>
          <div className="dot-clock-dot" style={{"--dotRotationDeg": secondDotRotationDeg}}></div>
          <svg className="dot-clock-circle-container-svg">
            <circle className="dot-clock-circle-1"></circle>
            <circle
              className="dot-clock-circle-2"
              style={{
                "--strokeDashOffset": secondDashOffset,
              }}
            ></circle>
          </svg>
          <div className="dot-clock-hand-text-container">
            <div className="dot-clock-hand-text">{second}</div>
            <div className="dot-clock-hand-identifier">Seconds</div>
          </div>
        </div>

        <div className="dot-clock-ampm">
          <div className="dot-clock-ampm-text">{AMPM}</div>
        </div>
      </div>
    </div>
  );
};

export default DotClock;
