import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

import './Sports.css'
import List from '../List/List';

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
                <List 
                list= {list}></List>
            </div>
        </div>
    );
};

export default Sports;