import { React } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import { Slider } from '/src/Components/Slider/Slider.jsx';
import { ThumbnailGallery } from '/src/Components/Slider/ThumbnailGallery.jsx';

const useSlider = (totalSlides) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const sliderRef = useRef(null);
  
  const slideNext = () => {
    setSlideNumber((prev) => {
       const newSlideNumber = prev < totalSlides
        ? prev + 1 : prev % totalSlides;
      
        sliderRef.current.style.transform = `translateX(
      -${( newSlideNumber % totalSlides) * 100}%)`;

      return newSlideNumber;
    })
  } 

  const slidePrev = () => {
    setSlideNumber((prev) => {
      const newSlideNumber = prev === 0
        ? totalSlides - 1 : prev - 1;

      sliderRef.current.style.transform = `translateX(
      -${(newSlideNumber % totalSlides) * 100}%)`;

      return newSlideNumber;
    })
  }

  return [slideNext, slidePrev, Slider, ThumbnailGallery, 
            sliderRef, slideNumber, setSlideNumber];
}

export { useSlider };