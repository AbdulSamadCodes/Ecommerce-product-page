import { React } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import { Slider } from '/src/Components/Slider/Slider.jsx';

const useSlider = (totalSlides) => {
  const slideNumber = useRef(0);
  const sliderRef = useRef();

  const slideNext = () => {
    slideNumber.current = slideNumber.current + 1;

    sliderRef.current.style.transform = `translateX(
      -${((slideNumber.current) % totalSlides) * 100}%)`;
  };

  const slidePrev = () => {
    slideNumber.current = slideNumber.current === 0 ? totalSlides - 1 :
                          slideNumber.current - 1;

    sliderRef.current.style.transform = `translateX(
      -${((slideNumber.current) % totalSlides) * 100}%)`;
  };

  return [slideNext, slidePrev, Slider,sliderRef];
};

export { useSlider };