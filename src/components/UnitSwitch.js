import React from 'react'

export default function UnitSwitch({ setUnit }) {

    const unitChange = (e) => {
        const value = e.target.value;
        setUnit(value)
    }

    return (
        <div>
            <select onChange={unitChange}>
                <option value='F'>Fahrenheit</option>
                <option value='C'>Celcius</option>
                <option value='K'>Kelvin</option>
            </select>
        </div>
    )
}
