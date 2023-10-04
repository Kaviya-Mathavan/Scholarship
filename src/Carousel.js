import React, { useState, useEffect } from 'react';
import './Carousel.css';
const Carousel = ({ images }) => {
const [currentIndex, setCurrentIndex] = useState(0);
const nextImage = () => {
setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
};
const prevImage = () => {
setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
};
useEffect(() => {
  const interval = setInterval(() => {
nextImage();
}, 2000); // Change image every 3 seconds (adjust as needed)
return () => clearInterval(interval); 
}, []);
return (
<div className="image-slider">
<img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
</div>

  );

};

 

export default Carousel;

