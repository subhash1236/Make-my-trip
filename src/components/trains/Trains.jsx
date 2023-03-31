import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../loader/Loader'
import TrainAvailable from './available/TrainAvailable'
import TrainSearch from './search/TrainSearch'
import './Trains.css'

const Trains = () => {
  const [trains, setTrains] = useState([])
  const [fetch, setFetch] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://content.newtonschool.co/v1/pr/63b85e152cabb8fdea2673ee/trains')
      .then(res => {
        setTrains(res.data)
        setTimeout(() => {
          setIsLoading(false)
        }, 300)
      })
      .catch(error => console.error(error))
  }, [fetch])
  return (
    <div className='trains'>
      <div className="search">
        <TrainSearch
          trains={trains}
          setTrains={setTrains}
          fetch={fetch}
          setFetch={setFetch}
        />
      </div>
      <div className="available">
        <h2 className="title">Available Tickets</h2>
        {isLoading ? <Loader /> : <TrainAvailable trains={trains} />}
      </div>

    </div>
  )
}

export default Trains