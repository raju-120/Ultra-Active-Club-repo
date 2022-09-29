import React from 'react';
import Trainer from '../../trainer.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import './List.css'

const List = ({list}) => {
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
                    <div className='break-time'>
                        <button>
                            <p>120s</p>
                        </button>
                        <button>180s</button>
                        <button>240s</button>
                        <button>300s</button>
                    </div>
                </div>
        </div>
    );
};

export default List;