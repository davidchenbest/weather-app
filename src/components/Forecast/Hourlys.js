import React from 'react'
import { getData } from '../../util/getData'
import '../../styles/hourlys.css'

export default function Hourlys({ hourlyArr }) {

    const formatTime = (time) => {
        const timeSplit = time.split(':')
        let hour = +timeSplit[0]
        let PM = false
        if (hour >= 12) {
            PM = true
            hour -= 12
        }

        if (hour === 0) hour = 12

        return `${hour} ${PM ? 'PM' : 'AM'}`
    }


    const render = (hourlyArr) => {
        const arr = []
        hourlyArr.forEach((hourlyObj, i) => {
            arr.push(
                <div key={i} className='hourlyCon'>
                    <p>{getData.temp(hourlyObj)} </p>
                    <img src={getData.iconURL(hourlyObj)} alt={getData.description(hourlyObj)} />
                    <p>{formatTime(hourlyObj.time)}</p>
                </div>
            )

        });

        return arr

    }
    return (
        <>
            {render(hourlyArr)}
        </>

    )
}
