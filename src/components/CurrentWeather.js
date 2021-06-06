import React, { useContext } from 'react'
import { UnitContext } from '../context/UnitContext'
import { getData } from '../util/getData'
import Loading from './Loading'
import '../styles/currentWeather.css'


export default function CurrentWeather({ weatherObj }) {
    const { unit } = useContext(UnitContext)

    return (
        <>
            {weatherObj ?
                <div className='currentWeatherCon'>
                    <div className='iconCon'>
                        <img src={getData.iconURL(weatherObj)} />

                    </div>
                    <p>{getData.description(weatherObj)}</p>
                    <div className='currentTemp'>
                        <h1>{getData.temp(weatherObj)}</h1> <span>{unit}</span>
                    </div>
                    <div className='highLowCon'>
                        <p>H: {getData.maxTemp(weatherObj)}</p>
                        <p>L: {getData.minTemp(weatherObj)}</p>
                    </div>

                </div>
                :
                <Loading />
            }
        </>
    )
}
