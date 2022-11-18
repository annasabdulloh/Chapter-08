import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CarouselCard from "./CarouselCard";

const options = {
  items: 4,
};
class Carousel extends React.Component {
  render() {
    return (
      <>
        <div className="container mt-3 pt-5 d-flex flex-column justify-content-center">
          <a name="testimoni"> </a>
          <h2 className="text-center mb-3 font-weight-normal pt-4">Testimonial</h2>
          <p className="text-center mb-2">
            Berbagai review positif dari para pelanggan kami
          </p>
        </div>
        <OwlCarousel
          className="owl-theme"
          loop= {true}
          margin={35}
          autoHeight= {true}
          nav = {true}
          center={true}
          dots={false}
          navText={[
            "<img src='./assets/icon_left-btn.svg' alt='left-btn' style='height:32px; width:32px; '>",
            "<img src='./assets/icon_right-btn.svg' alt='right-btn' style='height:32px; width:32px; '>",
          ]}
          responsive={{
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            1000: {
              items: 2,
            },
          }}
        >
          <CarouselCard 
            imgSrc="./assets/img_photo2.png"
            testimonial='“Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi dolorem sed, asperiores ullam quia consequuntur repellat necessitatibus, cumque consequatur culpa in dolores officiis dicta. Nulla corrupti ducimus veniam molestiae!”'
            person="John Doe 33, Bromo"
          />
          <CarouselCard 
            imgSrc="./assets/img_photo3.png"
            testimonial='“Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi dolorem sed, asperiores ullam quia consequuntur repellat necessitatibus, cumque consequatur culpa in dolores officiis dicta. Nulla corrupti ducimus veniam molestiae!”'
            person="John Dee 31, Namex"
          />
          <CarouselCard 
            imgSrc="./assets/img_photo2.png"
            testimonial='“Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quasi dolorem sed, asperiores ullam quia consequuntur repellat necessitatibus, cumque consequatur culpa in dolores officiis dicta. Nulla corrupti ducimus veniam molestiae!”'
            person='John Doe 69, Saturn'
          />
        </OwlCarousel>
      </>
    );
  }
}

export default Carousel;
