import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { user } from '../../constants'
import './Checkout.css'

const fee_n_surcharges = 740;
const Checkout = () => {

  const [isError, setIsError] = useState(false)
  const name_errorRef = useRef(null)
  const cardNumber_errorRef = useRef(null)
  const cvv_errorRef = useRef(null)
  const successRef = useRef(null)
  const navigate = useNavigate()

  const handleNameOnCard = (e) => {
    if (e.target.value.match(/\d+/g)) {
      name_errorRef.current.style.display = 'block'
      setIsError(true)
    }
    else {
      name_errorRef.current.style.display = 'none'
      setIsError(false)
    }
  }
  const handleCardNumber = (e) => {
    if (isNaN(+e.target.value)) {
      cardNumber_errorRef.current.style.display = 'block'
      setIsError(true)
    }
    else {
      cardNumber_errorRef.current.style.display = 'none'
      setIsError(false)
    }
  }
  const handleCVV = (e) => {
    if (isNaN(+e.target.value)) {
      cvv_errorRef.current.style.display = 'block'
      setIsError(true)
    }
    else {
      cvv_errorRef.current.style.display = 'none'
      setIsError(false)
    }
  }
  const handlePayment = (e) => {
    e.preventDefault();
    if (!isError) {
      successRef.current.style.display = 'block'
      setTimeout(() => {
        navigate('/')
      }, 10000)
    }
  }
  useEffect(() => {
    if (!(user?.islogged)) {
      navigate('/')
    }
  }, [user?.islogged])

  return (
    <div className="chekout-container">
      <h2 className='book-successful' ref={successRef}>Your ticket successfully booked</h2>
      <div className='checkout'>
        <div className="left">
          <h2 className='title'>Fare Summary</h2>
          <div className="fare-container">
            <div className="base-fare d-flex">
              <span className="title">Base Fare</span>
              <span className="price"> ₹{user?.price}</span>
            </div>
            <div className="fee-surcharges d-flex">
              <span className='title'>Fee & Surcharges</span>
              <span className="price">₹{fee_n_surcharges}</span>
            </div>
            <div className="total d-flex">
              <span className="title">Total</span>
              <span className="price">₹{+user?.price + +fee_n_surcharges}</span>
            </div>
          </div>
        </div>

        <div className="right">
          <h2 className='title'>Payment Method</h2>
          <div className="payment-container">
            <form action="#" method='post' onSubmit={handlePayment}>
              <input
                type="text"
                placeholder='Name on card*'
                maxLength={25}
                minLength={6}
                onChange={handleNameOnCard}
                required
              />
              <div className="error" ref={name_errorRef} >Please enter a valid name</div>
              <input
                type="text"
                name="" id=""
                maxLength={16}
                minLength={16}
                placeholder='Card Number*'
                onChange={handleCardNumber}
                required
              />
              <div className="error" ref={cardNumber_errorRef} >Please enter a valid number</div>
              <input type="month" required />
              <input
                type="text"
                name='cvv'
                placeholder='CVV*'
                minLength={3}
                maxLength={3}
                onChange={handleCVV}
                required
              />
              <div className="error" ref={cvv_errorRef} >Please enter a valid CVV</div>
              <input type="submit" value="Pay" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout