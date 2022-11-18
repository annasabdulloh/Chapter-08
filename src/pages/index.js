import React from 'react'

import Navbar from '../components/NavigationBar/NavigationBar';
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Services from '../components/Services/Services';
import WhyUs from '../components/WhyUs/WhyUs';
import Carousel from '../components/Carousel/Carousel';
import Rent from '../components/StartRent/StartRent';
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Services />
      <WhyUs />
      <Carousel />
      <Rent />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Index
