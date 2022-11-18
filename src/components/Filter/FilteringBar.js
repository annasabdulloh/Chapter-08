import React from 'react';
import { useEffect, useState, useRef } from "react";
import FilterCars from './FilteringCar'
import CarsList from './ResultCars'
import './FilteringBar.css'
// import ResultCar from "./ResultCar";

const FilterBar = (props) => {
  const [cars, setCars] = useState([]);
  const [type, setType] = useState('Pilih Tipe Driver');
  const [isLoading, setIsLoading] = useState(false);

  const typeRef = useRef('');
  const dateRef = useRef('');
  const timeRef = useRef('');
  const passengerRef = useRef('')

  const typeChangeHandler = (selectedType) => {
    setType(selectedType);
  }

  function submitHandler(event) {
    event.preventDefault();

    const carFilter = {
      type: typeRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      passenger: passengerRef.current.value,
    };

    //Extract Year, Month, and Day From User Input
    const dateArray = carFilter.date.split("-");
    console.log('lwat sini', dateArray)
    const pickupTime = carFilter.time;

    // Instance date Class for user input date
    const dateRent = new Date(dateArray[0], dateArray[1], dateArray[2], pickupTime, '00', '00', '00');

    var filteredCars = props.input.filter((car) => {
      //Check all available cars
      const availableCheck = car.available;
      const availableAtCar = new Date(car.availableAt);
 
      //Check all cars that is can be rent at specific time input by use. Assume that car.availableAt is the time when the car is ready to be rent.
      const isReadyToRent = availableAtCar < dateRent;
    
      //Check again that capacity of the car is greater than passenger. If yes, return true.
      const comparePersonAndCar = car.capacity > carFilter.passenger;

      return availableCheck && isReadyToRent && comparePersonAndCar;
    });

    setCars(filteredCars)
  };
    
  let content = (<div className='container justify-content-center'> 
      <p style = {{fontSize : '24px', textAlign: 'center'}}>No Cars Found.</p>
    </div>
    );

  if (cars.length > 0) {
    content = <CarsList items={cars} />;
  }

  return (
    <>
      <div className="container filter filter-container">
        <h6 className="fw-bold"></h6>
        <form onSubmit={submitHandler}>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-3 my-1">
              <label htmlFor="typeDriver" className='label'>Tipe Driver</label>
              <br />
              <select value={type} onChange={typeChangeHandler} ref={typeRef} className="form-select type" required name="typeDriver" id="typeDriver">
                <option disabled hidden>
                  Pilih Tipe Driver
                </option>
                <option value="Dengan Sopir">Dengan Sopir</option>
                <option value="Tanpa Sopir">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </div>
            <div className="col-lg-3 my-1">
              <label htmlFor="date" className='label'>Pilih Tanggal</label>
              <br />
              <input className="form-control" required type="date" name="date" ref={dateRef} id="date" />
            </div>
            <div className="col-md-2 my-1">
              <label htmlFor="time" className='label'>Waktu Ambil</label>
              <br />
              <select ref={timeRef} className="form-select time" required name="time" id="time">
                <option value="8">08.00 WIB</option>
                <option value="9">09.00 WIB</option>
                <option value="10">10.00 WIB</option>
                <option value="11">11.00 WIB</option>
                <option value="12">12.00 WIB</option>
              </select>
            </div>
            <div className="col-md-2 my-1">
              <label htmlFor="passenger" className='label'>Penumpang</label>
              <br />
              <input ref={passengerRef} className="form-control" required type="text" name="passenger" id="passenger" />
            </div>
            <div className="col-md-2 mt-2 d-flex flex-column justify-content-center">
              <p></p>
              <button className="btn btn-regis submit">Cari Mobil</button>
            </div>
          </div>
        </form>
      </div>

      <FilterCars 
          onContent={content}
        />
    </>
  );
};

export default FilterBar;


