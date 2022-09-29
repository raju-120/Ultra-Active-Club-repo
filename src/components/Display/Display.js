import React from 'react';
import './Display.css'

const Display = (props) => {
    const {name, img, age, time, description} =props.sport;
    return (
        <div className='sport-info'>
            <img src={img} alt="" />
            <p className='sport-name'>{name}</p>
            <p> <small>{description}</small> </p>
            <p> <small>Age: {age}</small> </p>
            <p> <small>Time: {time}</small> </p>
        </div>
    );
};

export default Display;