import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from '../../../assets/brands/Brand1.png';
import image2 from '../../../assets/brands/Brand2.png';

const BrandCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
