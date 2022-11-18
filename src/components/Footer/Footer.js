import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className="container footer">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <p> Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000 </p>
              <p> binarcarrental@gmail.com </p>
              <p> 081-233-334-808 </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <ul className="footer-list">
                <li className="mb-2">
                  <a className="text-decoration-none text-reset" href="#our-service">
                    Our services
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-decoration-none text-reset" href="#why-us">
                    Why Us
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-decoration-none text-reset" href="#testimoni">
                    Testimonial
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-decoration-none text-reset" href="#faq">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-12">
              <p> Connect with us </p>
              <p> 
                <a href="#">
                  <img src="./assets/icon_facebook.svg" alt="icon_facebook" />
                </a>
                <a href="#"  style={{ marginLeft:"10px" }}>
                  <img src="./assets/icon_instagram.svg" alt="icon_instagram" />
                </a>
                <a href="#" style={{ marginLeft:"10px" }}>
                  <img src="./assets/icon_twitter.svg" alt="icon_twitter" />
                </a>
                <a href="#"style={{ marginLeft:"10px" }}>
                  <img src="./assets/icon_mail.svg" alt="icon_mail" />
                </a>
                <a href="#"style={{ marginLeft:"10px" }}>
                  <img src="./assets/icon_twitch.svg" alt="icon_twitch" />
                </a>
              </p>
            </div>
            <div className="col-md-3 col-sm-12">
              <p> Copyright Binar 2022 </p>
              <Link to="/">
                <a className="navbar-brand footer-logo py-1 px-5 text-white" href='#'> </a> 
              </Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
