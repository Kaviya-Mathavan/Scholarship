import React from 'react'
import Carousel from './Carousel';


function LandingPage() {
    const images = [
        '/Images/image1.png',
        '/Images/image2.png', 
        '/Images/image3.png',
        '/Images/image4.png',  
        '/Images/image5.png',      
    ];

  return (
    <div>
       
        <Carousel images={images} />
      
    </div>
  )
}

export default LandingPage;
