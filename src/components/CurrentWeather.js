import React, { useContext } from 'react'
import { UnitContext } from '../context/UnitContext'
import { getData } from '../util/getData'
import Loading from './Loading'
import '../styles/currentWeather.css'
import windowImg from '../assets/windowFrame.png'


export default function CurrentWeather({ weatherObj }) {
    const { unit } = useContext(UnitContext)

    return (
        <>
            {weatherObj ?
                <div className='currentWeatherCon'>
                    <div className='iconCon'>
                        <img src={windowImg} alt='window' />
                        <div id='weatherImgCon'>
                            <div className='currentTemp'>
                                <h1>{getData.temp(weatherObj)}</h1> <span>{unit}</span>
                            </div>
                            <div className='highLowCon'>
                                <p>H: {getData.maxTemp(weatherObj)}</p>
                                <p>L: {getData.minTemp(weatherObj)}</p>
                            </div>
                            <img src={getData.iconURL(weatherObj)} alt={getData.description(weatherObj)} />
                            <p>{getData.description(weatherObj)}</p>
                        </div>

                    </div>



                </div>
                :
                <Loading />
            }
        </>
    )
}
