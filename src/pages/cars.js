import React from 'react';
import Navbar from '../components/NavigationBar/NavigationBar'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import Footer from '../components/Footer/Footer'
import FilterBar from '../components/Filter/FilteringBar'
import {carsData} from '../utils/cars.js'

const Cars = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron button='false'/>
      <FilterBar
        input={carsData}
      />
      <Footer />
    </div>
  )
}
export default Cars
