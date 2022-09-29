import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';
import './Sports.css'

const Sports = () => {
    const [sports,setSports] = useState([]);

    useEffect( () =>{
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setSports(data))
    }, [])

    return (
        <div className='sports-container'>
            <div className='activity-container'>
                {
                    sports.map(sport => <Display
                    key={sport.id}
                    sport={sport}
                    ></Display>)
                }
            </div>

            <div className='task-bar'>
                <h2>Information Task Bar</h2>
            </div>
        </div>
    );
};

export default Sports;