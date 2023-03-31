import React, { useRef, useState } from 'react'
import './HotelSearch.css'

const HotelSearch = ({ hotels, setHotels, fetch, setFetch }) => {
    const [city, setCity] = useState('Goa')
    const [guests, setGuests] = useState('2')
    const cityRef = useRef(null)
    const checkinRef = useRef(null)
    const checkoutRef = useRef(null)
    const guestsRef = useRef(null)
    const handleHotelSearch = () => {
        if (cityRef.current.value === '') {
            cityRef.current.focus()
        }
        else if (checkinRef.current.value === '') {
            checkinRef.current.focus()
        }
        else if (checkoutRef.current.value === '') {
            checkoutRef.current.focus()
        }
        else if (guestsRef.current.value === '') {
            guestsRef.current.focus()
        }
        else {
            const filter = hotels.filter((hotel) => hotel.city.toLowerCase() === city.toLowerCase())
            setHotels(filter)
        }

    }
    return (
        <>
            <div className='room-type'>
                <label htmlFor="room-type">Room type:</label>
                <select name="room-type" id="room-type">
                    <option value="single">Single</option>
                </select>
            </div>
            <div className="search-container">
                <div className="input">
                    <label htmlFor="from">CITY OR LOCATION</label>
                    <input
                        type="text"
                        id='city'
                        name='city'
                        onChange={(e) => {
                            setCity(e.target.value)
                            setFetch(!fetch)
                        }}
                        value={city}
                        ref={cityRef}
                    />
                </div>
                <div className="input">
                    <label htmlFor="check-in">CHECK-IN</label>
                    <input type="date" id='check-in' name='check-in' ref={checkinRef} />
                </div>
                <div className="input">
                    <label htmlFor="check-out">CHECK-OUT</label>
                    <input type="date" name="check-out" id="check-out" ref={checkoutRef} />
                </div>
                <div className="input">
                    <label htmlFor="guests">GUESTS</label>
                    <input
                        type="text"
                        name="guests"
                        id="guests"
                        ref={guestsRef}
                        value={guests}
                        onChange={(e) => {
                            setGuests(e.target.value)
                        }}
                    />
                </div>
                <div className='search-btn'>
                    <button onClick={handleHotelSearch}>Search</button>
                </div>
            </div>
        </>
    )
}

export default HotelSearch