import { React } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import { Slider } from '/src/Components/Slider/Slider.jsx';

const useSlider = (totalSlides) => {
  const [slideNumber, setSlideNumber] = useState(1);
  const sliderRef = useRef(null);

  const slideNext = () => {
    setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);

    sliderRef.current.style.transform = `translateX(
      -${(slideNumber % totalSlides) * 100}%)`;
  };

  const slidePrev = () => {
    setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);

    sliderRef.current.style.transform = `translateX(
      ${(slideNumber) * 100}%)`;
  };

  return [slideNumber, slideNext, slidePrev, Slider, sliderRef];
}

export { useSlider };