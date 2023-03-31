import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FlightAvailable from './available/FlightAvailable'
import FlightSearch from './search/FlightSearch'
import './Flights.css'
import Loader from '../loader/Loader'

const Flights = () => {
    const [flights, setFlights] = useState([])
    const [fetch, setFetch] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get('https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights')
            .then(res => {
                setFlights(res.data)
                setTimeout(() => {
                    setIsLoading(false)
                }, 300)
            })
            .catch(error => console.error(error))
    }, [fetch])
    return (
        <div className='flights'>
            <div className="search">
                <FlightSearch flights={flights} setFlights={setFlights} setFetch={setFetch} fetch={fetch} />
            </div>
            <div className="available">

                <h2 className='title'>Available Tickets</h2>

                {isLoading ? <Loader /> : <FlightAvailable flights={flights} />}

            </div>

        </div>
    )
}

export default Flights