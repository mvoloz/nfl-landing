import React from 'react';
import { useSelector } from 'react-redux';
import { getCarouselImages } from '../../app.selectors';
import Carousel from './carousel';

const displayName = 'CarouselContainer';

const CarouselContainer = () => {
  const images = useSelector((state) => getCarouselImages(state));
  return <Carousel images={images} />;
};

CarouselContainer.displayName = displayName;

export default CarouselContainer;
