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
import { formatForecastData } from '../util/formatForecastData'
import Forecast from './Forecast/Forecast'
import { getData } from '../util/getData'

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

                // current
                const url = getUrls[type](location, unit)
                setWeatherObj(await get(url))

                // forecast
                const forecastUrl = getUrls[type](location, unit, true)
                const data = formatForecastData(await get(forecastUrl))
                setForecastObj(data)
            } catch (error) {
                alert(error)
            }
        }
        runner()
    }, [unit, searchObj])

    const getLocation = (weatherObj) => {
        const name = getData.name(weatherObj)
        if (name) return name;
        return getData.coord(weatherObj)
    }



    return (
        <div className='weatherCon'>
            <UnitSwitch setUnit={setUnit}></UnitSwitch>
            <SwitchLocation setSearchObj={setSearchObj} searchObj={searchObj} setIsCurrentLocation={setIsCurrentLocation}></SwitchLocation>
            <CurrentLocation isCurrentLocation={isCurrentLocation} currentLocationClick={currentLocationClick} location={weatherObj && getLocation(weatherObj)} />
            <CurrentWeather weatherObj={weatherObj} />
            <Forecast forecastObj={forecastObj} />
        </div>
    )
}
