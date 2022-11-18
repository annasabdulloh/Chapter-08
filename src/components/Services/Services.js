import React from 'react'
import './Services.css'

const Service = () => {
  return (
      <div className="container our-services">
        <a name="our-service"></a>
        <div className="row mt-3">
          <div className="col-lg-6 text-center">
            <img className="img-fluid p-5" src="./assets/img_service.png" alt="img-services"/>
          </div>           
          <div className="col-lg-6 p-4">
            <h2 className="font-weight-normal mb-3">Best Car Rental for any kind of trip in Yogyakarta!</h2>
            <p className="my-4">Sewa mobil di Yogyakarta bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <div className="d-flex">
              <img className="form-check-inline" src="./assets/img_check.svg" style={{maxWidth: '26px', maxHeight: '30px'}} alt="Checklist" />
              <p className="text-sm">Sewa Mobil Dengan Supir di Yogyakarta 12 Jam</p>
            </div>
            <div className="d-flex">
              <img className="form-check-inline" src="./assets/img_check.svg" style={{maxWidth: '26px', maxHeight: '30px'}} alt="Checklist" />
              <p className="text-sm">Sewa Mobil Lepas Kunci di Yogyakarta 24 Jam</p>
            </div>
            <div className="d-flex">
              <img className="form-check-inline" src="./assets/img_check.svg" style={{maxWidth: '26px', maxHeight: '30px'}} alt="Checklist" />
              <p className="text-sm">Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="d-flex">
              <img className="form-check-inline" src="./assets/img_check.svg" style={{maxWidth: '26px', maxHeight: '30px'}} alt="Checklist" />
              <p className="text-sm">Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div className="d-flex">
              <img className="form-check-inline" src="./assets/img_check.svg" style={{maxWidth: '26px', maxHeight: '30px'}} alt="Checklist" />
              <p className="text-sm">Layanan Airport Transfer / Drop In Out</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Service
