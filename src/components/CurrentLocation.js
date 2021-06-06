import React from 'react'

export default function CurrentLocation({ currentLocationClick }) {
    return (
        <div>
            <button onClick={currentLocationClick}>Use Current Location</button>
        </div>
    )
}
