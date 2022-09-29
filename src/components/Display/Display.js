import React from 'react';
import './Display.css'

const Display = (props) => {
    const {name, img, age, time, description} =props.sport;
    return (
        <div className='sport-info'>
            <img src={img} alt="" />
            <p className='sport-name'>{name}</p>
            <p></p>
        </div>
    );
};

export default Display;