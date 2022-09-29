import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import Trainer from '../../trainer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import './Sports.css'

const Sports = () => {
    const [sports,setSports] = useState([]);
    const [list, setList] = useState([]);

    useEffect( () =>{
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setSports(data))
    }, []);

    const handleAddToList = (sport) =>{ 
        console.log(sport);
        const newList = [...list, sport];
        setList(newList);
    }
    

    return (
        <div className='sports-container'>
            <div className='activity-container'>
                {
                    sports.map(sport => <Display
                    key={sport.id}
                    sport={sport}
                    handleAddToList={handleAddToList}
                    ></Display>)
                }
            </div>

            <div className='task-bar'>
                
                <h2>Selected items: {list.length}</h2>

                <div className='trainer-info'>
                    <img src={Trainer} alt="" />
                    <h2>Ashfaq Hossain</h2>
                </div>
                <div className='trainer-location'>
                    <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                    <p><small>Sydney, Australia</small></p>
                </div>

            </div>
        </div>
    );
};

export default Sports;