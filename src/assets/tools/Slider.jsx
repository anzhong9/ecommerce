import React, { useState } from 'react';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg',
  'image5.jpg',
  'image6.jpg',
  'image7.jpg',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevState) => (prevState + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevState) => (prevState - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col mx-auto max-w-7xl">
      {/* Image Container */}
      <div className="h-96 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Image Description"
          className="object-cover h-full w-full transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          onClick={handlePreviousImage}
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          onClick={handleNextImage}
          disabled={currentIndex === images.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;
