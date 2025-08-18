"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample image data using placeholder URLs for a working preview.
const images = [
  { src: "car1.png", alt: "First car" },
  { src: "car2.png", alt: "Second car" },
  { src: "car3.png", alt: "Third car" },
  { src: "car4.png", alt: "Fourth car" },
  { src: "car5.png", alt: "Fifth car" },
  { src: "car6.png", alt: "Sixth car" },
  { src: "car7.png", alt: "Seventh car" }
];

const App = () => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate to the next slide
  const goToNext = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Function to navigate to the previous slide
  const goToPrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // useEffect hook for automatic sliding of the carousel
  useEffect(() => {
    // Set an interval to call goToNext every 3000ms (3 seconds)
    const timer = setInterval(goToNext, 3000);
    // Cleanup function to clear the interval
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    
    <div className="relative w-ful mt-[-170px] sm:mt-[20px] rounded-xl h-[440px] sm:min-h-screen pt-10 overflow-hidden">
      {/*
        The background container now correctly uses `bg-gradient-to-l`
        for a gradient that fades from red on the right to black.
      */}
      <div
  className="hidden sm:block absolute inset-y-0 rounded-xl right-[-100px] w-full h-full
    bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.6)_0%,rgba(0,0,0,0.95)_30%,#000_100%)]
    before:content-[''] before:absolute before:inset-0
    before:bg-[linear-gradient(to_right,rgba(255,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.2)_1px,transparent_1px)]
    before:bg-[size:60px_60px]
    z-0"
/>

{/* //////////////////////////////////// */}
      {/* Foreground content stays centered */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
        {/* Heading section with responsive text sizes */}
        <div className="text-center -mt-40 z-30 sm:mt-2">
          <p className="  text-sm md:text-lg text-white font-semibold">PROOF</p>
          <h1 className="text-white text-xl sm:text-4xl md:text-5xl font-bold leading-tight">
            These Brands Stopped Discounting
          </h1>
          <p className="text-white font-spaceGrotesk uppercase mt-[4px]  text-xs sm:text-sm md:text-base max-w-3xl mx-auto">
            and made more money
          </p>
        </div>
        
        {/*
          New parent container for the carousel and arrows.
          This div is `relative` and stretches across the full width,
          allowing the absolutely positioned arrows to be at the extreme ends.
        */}
        <div className="relative w-full max-w-7xl  -mt-20 sm:mt-8">
          {/* Sliding carousel container */}
          <div className="relative w-full  max-w-4xl mx-auto sm:h-96 h-86 overflow-hidden rounded-xl shadow-2xl">
            {/*
              The inner div holds all the images and moves horizontally.
              The `transform` property controls the sliding animation.
            */}
            <div
              className="flex h-full  transition-transform mt-5 sm:mt-0 duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="flex-none w-full h-full relative">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex flex-col items-center">
  <img
    src={images[currentIndex].src}
    alt={images[currentIndex].alt}
    className="w-full h-auto"
  />

  {/* Dots below image */}
  <div className="flex space-x-2 mt-2">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`w-3 h-3 rounded-full transition-all ${
          currentIndex === index ? "bg-white scale-125" : "bg-white/50"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</div>

          </div>
          
          {/*
            Previous slide button (left arrow) now positioned at the extreme left.
            It is absolutely positioned relative to the new parent container.
            We use `inset-y-0` and `my-auto` to vertically center it.
          */}
          <button
  onClick={goToPrevious}
  className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/30 hover:bg-white/50 text-red-500 rounded-full transition-colors z-20"
  aria-label="Previous slide"
>
  <ChevronLeft size={32} />
</button>

<button
  onClick={goToNext}
  className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/30 hover:bg-white/50 text-red-500 rounded-full transition-colors z-20"
  aria-label="Next slide"
>
  <ChevronRight size={32} />
</button>

        </div>
      </div>
    </div>
  );
};

export default App;
