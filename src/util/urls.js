const API_KEY = '65268777c0a2ce29e16183bdb5717a8c'
const BASE_URL = (forecast) => `https://api.openweathermap.org/data/2.5/${forecast ? 'forecast' : 'weather'}`

const getUnits = (unit) => {
    // standard = kelvin
    // Fahrenheit = imperial
    // Celcius = metric
    if (!unit || unit === 'K') return ''
    const unitSwitch = { F: 'imperial', C: 'metric' }
    return `units=${unitSwitch[unit]}`

}

const getUrls = {
    zip: (param, unit, forecast) => `${BASE_URL(forecast)}?zip=${param.zip}&appid=${API_KEY}&${getUnits(unit)}`,
    city: (param, unit, forecast) => `${BASE_URL(forecast)}?q=${param.city}&appid=${API_KEY}&${getUnits(unit)}`,
    cord: (param, unit, forecast) => `${BASE_URL(forecast)}?lat=${param.lat}&lon=${param.lon}&appid=${API_KEY}&${getUnits(unit)}`
}

export { getUrls }