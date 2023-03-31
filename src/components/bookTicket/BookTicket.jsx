import React from 'react'
import { useNavigate } from 'react-router-dom'
import { user } from '../../constants'
import './BookTicket.css'

const BookTicket = ({ price }) => {
    const navigate = useNavigate()
    const handleBookTicket = (fare) => {
        if (user?.islogged) {
            localStorage.setItem('user', JSON.stringify({ ...user, price: fare }))
            navigate('/checkout')
            window.location.reload()
        }
        else {
            navigate('/login')
        }
    }
    return (
        <button
            className='btn-book_ticket'
            type='button'
            onClick={() => handleBookTicket(price)}
        >Book</button>
    )
}

export default BookTicket