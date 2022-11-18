import React from 'react'

import './Jumbotron.css'
import {Link} from 'react-router-dom';

const Jumbotron = (props) => {
  return (
    <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="pl-7rem caption">
                <div className="mt-4 p-5">
                  <h2 className="font-weight-normal caption-normal">Sewa &amp; Rental Mobil Terbaik di kawasan Yogyakarta!</h2>
                  <p className="my-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                  {!props.button && (<div className="nav-item mt-4">
                    <Link to="/cars">
                        <button className="btn btn-success">Sewa Mobil</button>
                    </Link>
                  </div>)}
                </div>
              </div>
            </div> 
            <div className="col-lg-6 mt-4">
              <img src="./assets/img_car.png" className="img-fluid" alt="mobil" />
            </div>
          </div>
        </div>
      </div> 
  )
}

export default Jumbotron
