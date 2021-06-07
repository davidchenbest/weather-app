import React from 'react'
import Hourlys from './Hourlys'
import '../../styles/days.css'
import { getData } from '../../util/getData';
import { getDay } from '../../util/date'

export default function Days({ forecastObj }) {

    const getMaxMinTemp = (hourlyArr) => {
        let max = null;
        let min = null;
        hourlyArr.forEach(hourlyObj => {
            const temp = getData.temp(hourlyObj)
            if (max === null && min === null) {
                max = temp
                min = temp
            }
            else {
                max = Math.max(max, temp)
                min = Math.min(min, temp)
            }
        });
        return { max, min }
    }

    const render = () => {
        const arr = []
        const keys = Object.keys(forecastObj)
        keys.forEach(key => {
            const hourlyArr = forecastObj[key]
            const { max, min } = getMaxMinTemp(hourlyArr)
            arr.push(
                <div key={key} className='dayCon'>
                    <div className='dayTempCon'>
                        <p id='date'>{getDay(key)}</p>
                        <div id='maxMinTemp'>
                            <span id='maxTemp'>{max}</span>
                            <span id='minTemp'>{min}</span>
                        </div>
                    </div>
                    <div className='hourlysCon'>
                        {<Hourlys hourlyArr={hourlyArr} />}
                    </div>

                </div>)
        });
        return arr
    }
    return (
        <>
            {render()}

        </>
    )
}
