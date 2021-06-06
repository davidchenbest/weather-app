import React, { useEffect, useState } from 'react'

export default function SwitchLocation({ searchObj, setSearchObj, setIsCurrentLocation }) {
    const [locationSearch, setLocationSearch] = useState('')
    const [typeSearch, setTypeSearch] = useState('')

    useEffect(() => {
        setTypeSearch(searchObj.type)
    }, [searchObj.type])

    const [typeOptions] = useState([
        { value: 'cord', name: 'Lat, Lon' },
        { value: 'zip', name: 'Zip' },
        { value: 'city', name: 'City' },
    ])

    const locationSubmit = (e) => {
        e.preventDefault()
        try {

            let location;
            if (!locationSearch) throw new Error('Invalid')
            if (typeSearch === 'cord') {
                const cord = locationSearch.split(',')
                if (cord.length < 2) throw new Error('Invalid')
                location = { lat: cord[0], lon: cord[1] }
            }
            else location = { [typeSearch]: locationSearch }
            setSearchObj({ location, type: typeSearch })
            setIsCurrentLocation(false)
        } catch (error) {
            alert(error)
        }



    }


    return (
        <form onSubmit={locationSubmit} >
            <select onChange={e => setTypeSearch(e.target.value)} value={typeSearch}>
                {typeOptions.map(t => <option value={t.value} key={t.value}>{t.name}</option>)}
            </select>
            <input type='text' value={locationSearch} onChange={e => setLocationSearch(e.target.value)} />
            <input type='submit' />
        </form>
    )
}
