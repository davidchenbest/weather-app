import React, { useContext, useEffect, useRef, useState } from 'react'
import { getUrls } from '../util/urls'
import { get } from '../util/fetchAPI'

import UnitSwitch from './UnitSwitch'
import SwitchLocation from './SwitchLocation'
import { getCurrentLocation } from '../util/getCurrentLocation'
import CurrentLocation from './CurrentLocation'
import { UnitContext } from '../context/UnitContext'
import '../styles/weatherContainer.css'
import CurrentWeather from './CurrentWeather'

export default function WeatherContainer() {
    const count = useRef(0)
    console.log('container render: ' + count.current++);

    const [isCurrentLocation, setIsCurrentLocation] = useState(false)
    const { unit, setUnit } = useContext(UnitContext)

    const [weatherObj, setWeatherObj] = useState(null)
    const [forecastObj, setForecastObj] = useState(null)
    const [searchObj, setSearchObj] = useState({ location: '', type: '' })

    const currentLocationClick = () => {
        getCurrentLocation().then(data => {
            if (!data) return
            setSearchObj({ type: 'cord', location: data })
            setIsCurrentLocation(true)
        }
        )
    }


    useEffect(() => {
        currentLocationClick()
    }, [])

    useEffect(() => {
        const runner = async () => {
            try {
                const { location, type } = searchObj
                if (!location || !type) return
                setWeatherObj(null)
                setForecastObj(null)

                console.log(location);
                // current
                const url = getUrls[type](location, unit)
                setWeatherObj(await get(url))

                // forecast
                const forecastUrl = getUrls[type](location, unit, true)
                const data = await get(forecastUrl)
                console.log(data);

            } catch (error) {
                alert(error)
            }
        }
        runner()
    }, [unit, searchObj])



    return (
        <div>
            {isCurrentLocation ? <p>using current location</p> : <CurrentLocation currentLocationClick={currentLocationClick} />}
            <UnitSwitch setUnit={setUnit}></UnitSwitch>
            <SwitchLocation setSearchObj={setSearchObj} searchObj={searchObj} setIsCurrentLocation={setIsCurrentLocation}></SwitchLocation>
            <CurrentWeather weatherObj={weatherObj} />


        </div>
    )
}
