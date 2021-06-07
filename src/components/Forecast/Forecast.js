import React from 'react'
import Days from './Days'
import '../../styles/forecast.css'
import Loading from '../Loading'

export default function Forecast({ forecastObj }) {
    return (
        <div className='forecastCon'>
            {forecastObj ? <Days forecastObj={forecastObj} />
                : <Loading />}
        </div>
    )
}
