import React from 'react';
import '../App.css';

const Browse = () => {
  const firstRowImages = [
    { src: '/assets/browse-1.jpeg', alt: 'Device 1', heading: 'Device 1', price: '$100' },
    { src: '/assets/browse-1.jpeg', alt: 'Device 6', heading: 'Device 6', price: '$150' },
    { src: '/assets/browse-1.jpeg', alt: 'Device 6', heading: 'Device 6', price: '$150' },
    { src: '/assets/browse-1.jpeg', alt: 'Device 6', heading: 'Device 6', price: '$150' },
    { src: '/assets/browse-1.jpeg', alt: 'Device 6', heading: 'Device 6', price: '$150' },
  ];

  const secondRowImages = [
    { src: '/assets/browse-1.jpeg', alt: 'Device 6', heading: 'Device 6', price: '$150' },
    { src: '/assets/browse-1.jpeg', alt: 'Device 6', heading: 'Device 6', price: '$150' },
    { src: '/assets/browse-1.jpeg', alt: 'Device 6', heading: 'Device 6', price: '$150' },
    { src: '/assets/browse-1.jpeg', alt: 'Device 6', heading: 'Device 6', price: '$150' },
    { src: '/assets/browse-1.jpeg', alt: 'Device 6', heading: 'Device 6', price: '$150' },
    
  ];

  return (
    <div>
      {/* First Row */}
      <div className="row top">
        {firstRowImages.map((image, index) => (
          <div key={index} className="card">
            <img
              src={image.src}
              alt={image.alt}
              className="item-img"
              width={image.width}
              height={image.height}
            />
            <div className="card-details">
              <h3>{image.heading}</h3>
              <p>{image.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="row bottom">
        {secondRowImages.map((image, index) => (
          <div key={index} className="card">
            <img
              src={image.src}
              alt={image.alt}
              className="card-img"
              width={image.width}
              height={image.height}
            />
            <div className="card-details">
              <h3>{image.heading}</h3>
              <p>{image.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Browse;

