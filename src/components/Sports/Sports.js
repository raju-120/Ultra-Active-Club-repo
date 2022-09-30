import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

import './Sports.css'
import List from '../List/List';

const Sports = () => {
    const breakTime = [
        {time: 120, id:1},
        {time: 180, id:2},
        {time: 240, id:3},
        {time: 300, id:4},
    ]
    

    const [sports,setSports] = useState([]);
    const [list, setList] = useState([]);

    

    useEffect( () =>{
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setSports(data))
    }, []);

    const handleAddToList = (sport) =>{
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
                <List 
                list= {list}></List>
            </div>
        </div>
    );
};

export default Sports;