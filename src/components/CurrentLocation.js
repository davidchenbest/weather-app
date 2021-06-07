import React, { useState } from 'react'
import '../styles/currentLocation.css'
import { FaLocationArrow } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';

export default function CurrentLocation({ currentLocationClick, isCurrentLocation, location }) {
    const [showHelper, setShowHelper] = useState(false)

    const toggleShowHelper = () => setShowHelper(pre => !pre)

    return (
        <div className='currentLocationCon'>
            {location && <p id='name'>{location}</p>}
            {isCurrentLocation ?
                <div onMouseEnter={toggleShowHelper} onMouseLeave={toggleShowHelper} className='useCurrentCon'>
                    <FaLocationArrow />
                    {showHelper && <span className='helper'>Using Location</span>}
                </div>
                :
                <div onMouseEnter={toggleShowHelper} onMouseLeave={toggleShowHelper} className='useCurrentCon'>
                    <button onClick={currentLocationClick}><BiCurrentLocation /></button>
                    {showHelper && <span className='helper'>Use Location</span>}
                </div>
            }
        </div>
    )
}
