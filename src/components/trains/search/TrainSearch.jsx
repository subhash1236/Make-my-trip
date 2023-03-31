import React, { useRef, useState } from 'react'
import './TrainSearch.css'

const TrainSearch = ({ trains, setTrains, fetch, setFetch }) => {
    const [from, setFrom] = useState('Delhi')
    const [to, setTo] = useState('Mumbai')
    const [_class, setClass] = useState('All')
    const fromRef = useRef(null)
    const toRef = useRef(null)
    const traveldateRef = useRef(null)
    const classRef = useRef(null)
    const handleTrainSearch = () => {
        if (fromRef.current.value === '') {
            fromRef.current.focus()
        }
        else if (toRef.current.value === '') {
            toRef.current.focus()
        }
        else if (traveldateRef.current.value === '') {
            traveldateRef.current.focus()
        }
        else if (classRef.current.value === '') {
            classRef.current.focus()
        }
        else {
            const filter = trains.filter((train) => train.from.toLowerCase() === from.toLowerCase() && train.to.toLowerCase() === to.toLowerCase())
            setTrains(filter)
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
                        name='from'
                        ref={fromRef}
                        value={from}
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
                        name='to'
                        ref={toRef}
                        value={to}
                        onChange={(e) => {
                            setTo(e.target.value)
                            setFetch(!fetch)
                        }}

                    />
                </div>
                <div className="input">
                    <label htmlFor="travel-date">TRAVEL DATE</label>
                    <input type="date" name="travel-date" id="travel-date" ref={traveldateRef} />
                </div>
                <div className="input">
                    <label htmlFor="class">CLASS</label>
                    <input
                        type="text"
                        name="class"
                        id="class"
                        ref={classRef}
                        value={_class}
                        onChange={(e) => {
                            setClass(e.target.value)
                        }}
                    />
                </div>
                <div className='search-btn'>
                    <button onClick={handleTrainSearch}>Search</button>
                </div>
            </div>
        </>
    )
}

export default TrainSearch