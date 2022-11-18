import React from 'react'
import './StartRent.css'
import {Link} from 'react-router-dom';

const Rent = () => {
  return (
    <div className="container p-5 rounded rent-now">
    <div className="row">
      <div className="text-center text-white pt-5 px-5">
        <h2 className="font-weight-normal mb-4"> Sewa Mobil di Yogyakarta Sekarang </h2>
        <p className='caption-rent mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas quos aliquid alias accusantium odit est voluptatem necessitatibus ipsam molestiae.</p>
        <div className="button">
          <Link to="/cars">
            <button type="button" className="btn btn-success">Mulai Sewa Mobil</button>
          </Link>
        </div>
      </div>
    </div>   
  </div>
  )
}

export default Rent
