import React from 'react';
import BsCarousel from 'react-bootstrap/Carousel';
import { TEAM_NAME } from '../../constants';

const displayName = 'Carousel';

const Carousel = ({ images }) => {
  if (!images.length) {
    return null;
  }

  return (
    <BsCarousel>
      {images.map((image, idx) => (
        <BsCarousel.Item key={image}>
          <img
            className="d-block w-100"
            src={image}
            alt={`${TEAM_NAME}-${idx}`}
          />
        </BsCarousel.Item>
      ))}
    </BsCarousel>
  );
};

Carousel.displayName = displayName;

export default Carousel;
