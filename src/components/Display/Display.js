import React from 'react';
import './Display.css'

const Display = (props) => {
    const {sport, handleAddToList} = props;
    const {name, img, age, time, description} =props.sport;
    
    
    return (
        <div className='display-sport'>
            <img src={img} alt="" />
            <div className='sport-info'>
                <p className='sport-name'>{name}</p>
                <p> <small>{description}</small> </p>
                <p> <small>Age: {age} Years</small> </p>
                <p> <small>Time: {time} Min</small> </p>
            </div>
            <button onClick={ () => handleAddToList(sport)} className='btn-cart'>
                <p>Add to List</p>
            </button>
        </div>
    );
};

export default Display;