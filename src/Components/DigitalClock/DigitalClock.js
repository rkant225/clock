import React, { useEffect, useState } from 'react'
import './DigitalClock.css';

const getCurrentTime =()=>{
    const currentDate = new Date();
    const second = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
    const minute = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
    const hour = (currentDate.getHours() % 12 || 12) < 10 ? `0${currentDate.getHours() % 12 || 12}` : currentDate.getHours() % 12 || 12;
    const AM_PM = currentDate.getHours() <= 12 ? 'AM' : 'PM';
    const currentTime = `${hour}:${minute}:${second} ${AM_PM}`;
    return currentTime;
}

const DigitalClock = () => {
    
    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    const updateCurrentTime = ()=>{
        const currentTime = getCurrentTime();
        setCurrentTime(currentTime);

    }
    
    useEffect(()=>{
        const intervalId = setInterval(updateCurrentTime, 1000);
        return ()=>{
            clearInterval(intervalId);
        }
    }, [])

    return (
        <div className="digital-clock-container">
            <div className="digital-clock-time">{currentTime}</div>
        </div>
    )
}

export default DigitalClock;