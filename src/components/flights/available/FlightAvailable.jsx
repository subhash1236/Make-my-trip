import React from 'react'
import BookTicket from '../../bookTicket/BookTicket'
import './FlightAvailable.css'

const FlightAvailable = ({ flights }) => {

    return (
        <>
            {flights.length === 0 && <h3 className='message-no_flight'>Sorry! No flights available</h3>}

            {flights && flights.map((flight, index) => (
                <div className="flight_info" key={index}>
                    <table>
                        <thead>
                            <tr>
                                <th>FROM:</th>
                                <th>DEPARTURE</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{flight.from}</td>
                                <td>
                                    {`${flight.departure.departureTime} | ${flight.departure.departureDate}`}
                                </td>
                                <td>₹{flight.price}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>TO:</th>
                                <th>RETURN</th>
                                <th>Via</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{flight.to}</td>
                                <td>
                                    {`${flight.return.returnTime} | ${flight.return.returnDate}`}
                                </td>
                                <td>{flight.via != '' ? flight.via : '-'}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Airline:</th>
                                <th></th>
                                <th>Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{flight.airlineName}</td>
                                <td></td>
                                <td>{flight.duration}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="book-ticket">
                        <BookTicket price={flight.price} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default FlightAvailable