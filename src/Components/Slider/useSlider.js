import { React } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { Slider } from '/src/Components/Slider/Slider.jsx';

function useSlider() {
  const [slideNumber, setSlideNumber] = useState(0);

  const slideNext = () => {
    setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
  };

  const slidePrev = () => {
    setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
  };

  return [slideNumber, slideNext, slidePrev , Slider];
}

export { useSlider }