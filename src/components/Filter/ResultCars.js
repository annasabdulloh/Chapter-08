// eslint-disable-next-line
import React from 'react';
import './ResultCars.css'
import priceFormat from '../../utils/price.js'
import PropTypes from 'prop-types';

const ResultCars = (PropsTypes) => {
  return (
    <div className="container show-car">
      <div className="cars-container row my-2 px-1">
        {PropsTypes.items.map((car) => (
          <div className="col-md-4 my-2" key={car.id}>
            <div className="card h-100">
              <div className="card-body">
                <img src={`./assets/${car.image}`} className="card-img" />
                <h6 className="card-title mt-3 card-title-text">
                  {car.manufacture}/{car.model}
                </h6>
                <h5 className="card-title mt-3 card-title-text">Rp {priceFormat.insertDecimal(car.rentPerDay)} / hari</h5>
                <p className="card-text">
                  {car.description}
                </p>
                <h6>
                  <i className="bi bi-people" style={{ fontSize: 20 + "px" }}></i> {car.capacity} orang
                </h6>
                <h6>
                  <i className="bi bi-gear" style={{ fontSize: 20 + "px" }}></i> {car.transmission}
                </h6>
                <h6>
                  <i className="bi bi-calendar" style={{ fontSize: 20 + "px" }}></i> Tahun {car.year}
                </h6>
                <div className="d-flex flex-column mt-3 align-items-stretch">
                  <button className="btn btn-regis">Pilih Mobil</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultCars;
