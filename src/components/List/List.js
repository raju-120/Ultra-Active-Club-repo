import React, { useState } from 'react';
import Trainer from '../../trainer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import './List.css'

const List = (props) => {
    const {list} = props;

    const {breakTime, setBreakTime} = useState();
    


    const handleBreakTime = () =>{
        const newBreakTime = breakTime ;
        setBreakTime(newBreakTime);
    }
        let total = 0;
    for(const display of list) {
        total = total + parseInt(display.time);
    }

    return (
        <div className='list-cart'>
            
            <h2>Selected items:{list.length} </h2>
            <div className='trainer-info'>
                    <img src={Trainer} alt="" /> 
                    <h2>Ashfaq Hossain</h2>
                </div>
                <div className='trainer-location'>
                    <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                    <p><small>Sydney, Australia</small></p>
                </div>

                <div className='personal-info'>
                    <div className='personal-details'>
                        <p>75 <small>kg</small> </p>
                        <p>Weight</p>
                    </div>

                    <div className='personal-details'>    
                        <p>5.5</p>
                        <p>Height</p>
                    </div>

                    <div className='personal-details'>
                        <p>25<small>year</small> </p>
                        <p>Age</p>
                    </div>
                </div>

                <div>
                    <h2>Add A Break</h2>
                    <div className='btn-breaktime'>

                        <button onClick={() => handleBreakTime} className='btn-break'>120s</button>
                        <button onClick={handleBreakTime} className='btn-break'>180s</button>
                        <button onClick={handleBreakTime} className='btn-break'>240s</button>
                        <button onClick={handleBreakTime} className='btn-break'>300s</button>
                    </div>
                </div>

                <div>
                    <h3>Exercise Details</h3>
                    <div>
                        <h4 className='exercise-head'>Exercise details: {total} Sec</h4>
                        <h4 className='exercise-head'>Break Time: </h4>
                    </div>
                    <button className='btn-complete'>Activity Completed</button>
                </div>

        </div>
    );
};

export default List;