import React, { useEffect, useState } from 'react'
import './Clock.css';

const Clock = () => {
    const [rotate_hour_hand_by, setRotate_hour_hand_by] = useState('0');
    const [rotate_minute_hand_by, setRotate_minute_hand_by] = useState('0');
    const [rotate_second_hand_by, setRotate_second_hand_by] = useState('0');

    const updateHandsPosition = ()=>{
        const currentDate = new Date();

        const secondRatio = currentDate.getSeconds() / 60;
        const minuteRatio = ((secondRatio + currentDate.getMinutes()) / 60);
        const hourRatio = ((minuteRatio + currentDate.getHours() % 12 || 12) / 12);

        setRotate_second_hand_by(360 * secondRatio);
        setRotate_minute_hand_by(360 * minuteRatio);
        setRotate_hour_hand_by(360 * hourRatio);
    }

    useEffect(()=>{
        setInterval(updateHandsPosition, 1000);
    }, [])

    const getCurrentTime =()=>{
        const currentDate = new Date();
        const second = currentDate.getSeconds() < 10 ? `0${currentDate.getSeconds()}` : currentDate.getSeconds();
        const minute = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();
        const hour = currentDate.getHours() % 12 || 12;
        const AM_PM = currentDate.getHours() <= 12 ? 'AM' : 'PM';

        return `${hour}:${minute}:${second} ${AM_PM}`
    }

    return (
        <div className="clock-container">
            <div className="clock">

                <div className="hand hour-hand" style={{'--rotateBy' : `${rotate_hour_hand_by}deg`}}></div>
                <div className="hand minute-hand" style={{'--rotateBy' : `${rotate_minute_hand_by}deg`}}></div>
                <div className="hand second-hand" style={{'--rotateBy' : `${rotate_second_hand_by}deg`}}></div>

                <div className="number" style={{'--rotateBy' : '0deg', '--number' : 12}}>12</div>
                <div className="number" style={{'--rotateBy' : '30deg', '--number' : 1}}>1</div>
                <div className="number" style={{'--rotateBy' : '60deg', '--number' : 2}}>2</div>
                <div className="number" style={{'--rotateBy' : '90deg', '--number' : 3}}>3</div>
                <div className="number" style={{'--rotateBy' : '120deg', '--number' : 4}}>4</div>
                <div className="number" style={{'--rotateBy' : '150deg', '--number' : 5}}>5</div>
                <div className="number" style={{'--rotateBy' : '180deg', '--number' : 6}}>6</div>
                <div className="number" style={{'--rotateBy' : '210deg', '--number' : 7}}>7</div>
                <div className="number" style={{'--rotateBy' : '240deg', '--number' : 8}}>8</div>
                <div className="number" style={{'--rotateBy' : '270deg', '--number' : 9}}>9</div>
                <div className="number" style={{'--rotateBy' : '300deg', '--number' : 10}}>10</div>
                <div className="number" style={{'--rotateBy' : '330deg', '--number' : 11}}>11</div>
            </div>
            <div className="digital-time">{getCurrentTime()}</div>
        </div>
    )
}

export default Clock;