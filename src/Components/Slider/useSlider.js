import { React } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

import { Slider } from '/src/Components/Slider/Slider.jsx';
import { ThumbnailGallery } from '/src/Components/Slider/ThumbnailGallery.jsx';

function useSlider(totalSlides) {
  const [slideNumber, setSlideNumber] = useState(0);
  const sliderRef = useRef(null);

  const styleThumbnails = (index) => {
    const thumbnailGallery = sliderRef.current.parentElement.nextElementSibling;

    if (!(thumbnailGallery.classList.contains("thumbnail-gallery"))) return;

    const thumbnails = Array.from(thumbnailGallery.children);

    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove("selected-thumbnail");
    });

    thumbnails[index % thumbnails.length].classList.add("selected-thumbnail");
  }

  const slideNext = () => {
    setSlideNumber((prev) => {
      const newSlideNumber = prev < totalSlides
        ? prev + 1 : prev % totalSlides;

      sliderRef.current.style.transform = `translateX(
      -${(newSlideNumber % totalSlides) * 100}%)`;

      styleThumbnails(newSlideNumber);

      return newSlideNumber;
    })
  }

  const slidePrev = () => {
    setSlideNumber((prev) => {
      const newSlideNumber = prev === 0
        ? totalSlides - 1 : prev - 1;

      sliderRef.current.style.transform = `translateX(
      -${(newSlideNumber % totalSlides) * 100}%)`;

      styleThumbnails(newSlideNumber);

      return newSlideNumber;
    })
  }

  return [slideNext, slidePrev, Slider, ThumbnailGallery,
    sliderRef, slideNumber, setSlideNumber];
}

export { useSlider };