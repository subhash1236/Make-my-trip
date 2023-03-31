import React, { useRef, useState } from 'react'
import './FlightSearch.css'

const FlightSearch = ({ flights, setFlights, setFetch, fetch }) => {
    const [from, setFrom] = useState('Delhi')
    const [to, setTo] = useState('Mumbai')
    const fromRef = useRef(null)
    const toRef = useRef(null)
    const departureRef = useRef(null)
    const returnRef = useRef(null)

    const handleFlightSearch = () => {
        if (fromRef.current.value === '') {
            fromRef.current.focus()
        }
        else if (toRef.current.value === '') {
            toRef.current.focus()
        }
        else if (departureRef.current.value === '') {
            departureRef.current.focus()
        }
        else if (returnRef.current.value === '') {
            returnRef.current.focus()
        }

        else {
            const filter = flights.filter((flight) => flight.from.toLowerCase() === from.toLowerCase() && flight.to.toLowerCase() === to.toLowerCase())
            setFlights(filter)
        }
    }
    return (
        <>
            <div className='trip-type'>
                <label htmlFor="trip-type">Trip type:</label>
                <select name="trip-type" id="trip-type">
                    <option value="oneway">Oneway</option>
                </select>
            </div>
            <div className="search-container">
                <div className="input">
                    <label htmlFor="from">FROM</label>
                    <input
                        type="text"
                        id='from'
                        value={from}
                        ref={fromRef}
                        onChange={(e) => {
                            setFrom(e.target.value)
                            setFetch(!fetch)
                        }}
                    />
                </div>
                <div className="input">
                    <label htmlFor="to">TO</label>
                    <input
                        type="text"
                        id='to'
                        value={to}
                        ref={toRef}
                        onChange={(e) => {
                            setTo(e.target.value)
                            setFetch(!fetch)
                        }}
                    />
                </div>
                <div className="input">
                    <label htmlFor="departure">DEPARTURE</label>
                    <input type="date" name="departure" id="departure" ref={departureRef} />
                </div>
                <div className="input">
                    <label htmlFor="return">RETURN</label>
                    <input type="date" name="return" id="return" ref={returnRef} />
                </div>
                <div className='search-btn'>
                    <button onClick={handleFlightSearch}>Search</button>
                </div>
            </div>
        </>
    )
}

export default FlightSearch