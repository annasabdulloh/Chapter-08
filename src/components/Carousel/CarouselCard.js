import React from "react";
import './CarouselCard.css'
import PropTypes from "prop-types";

const CarouselCard = (PropTypes) => {
    return (
      <div className="container mt-5">
        <div className="item d-flex align-items-center">
          <div className="row items">
            <div className="col-sm-3 py-5">
              <img src={PropTypes.imgSrc} className="img-fluid" style={{marginLeft: '30px', marginTop: '35px', width: '70%' }} alt="image" />
            </div>
            <div className="col-sm-9 ">
              <div className="star mt-5 px-2">
                <i className="bi bi-star-fill" style={{color: "#f9cc00"}} />
                <i className="bi bi-star-fill" style={{color: "#f9cc00"}} />
                <i className="bi bi-star-fill" style={{color: "#f9cc00"}} />
                <i className="bi bi-star-fill" style={{color: "#f9cc00"}} />
                <i className="bi bi-star-fill" style={{color: "#f9cc00"}} />
              </div>
              <div className="text mt-2 card-content">
                <p className="px-2">{PropTypes.testimonial}</p>
                <b className="px-2">{PropTypes.person}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CarouselCard;
  
