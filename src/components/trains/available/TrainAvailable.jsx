import React from 'react'
import BookTicket from '../../bookTicket/BookTicket'
import './TrainAvailable.css'

const TrainAvailable = ({ trains }) => {
    return (
        <>
            {trains.length === 0 && <h3 className='message-no_train'>Sorry! No tains available</h3>}

            {trains && trains.map((train, index) => (
                <div className="train_info" key={index}>
                    <table>
                        <thead>
                            <tr>
                                <th>FROM:</th>
                                <th>DEPARTURE</th>
                                <th>Price:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{train.from}</td>
                                <td>
                                    {`${train.departure.departureTime} | ${train.departure.departureDate}`}
                                </td>
                                <td>₹{train.price}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>TO:</th>
                                <th>TRAIN NUMBER</th>
                                <th>KILOMETERS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{train.to}</td>
                                <td>{train.train_number}</td>
                                <td>{train.kilometers} km</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Duration:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>{train.duration}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="book-ticket">
                        <BookTicket price={train.price} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default TrainAvailable