// import React from 'react';
// import '../App.css';

// const Browse = () => {
//   const firstRowImages = [
//     { src: '/assets/browse-1.jpg', alt: 'Device 1', heading: 'Laptop', price: '$1,149.00' },
//     { src: '/assets/browse-2.jpg', alt: 'Device 2', heading: 'iPhone', price: '$1,599.00' },
//     { src: '/assets/browse-3.jpg', alt: 'Device 3', heading: 'Smartwatches', price: '$108.32' },
//     { src: '/assets/browse-4.jpg', alt: 'Device 4', heading: 'PC', price: '$1,871.99' },
//     { src: '/assets/browse-5.jpg', alt: 'Device 5', heading: 'Headphone', price: '$100.00' },
//   ];
//   const secondRowImages = [
//     { src: '/assets/browse-6.jpg', alt: 'Device 6', heading: 'Digital Camera', price: '$3,198.00' },
//     { src: '/assets/browse-7.jpg', alt: 'Device 7', heading: 'Hard drive', price: '$950.00' },
//     { src: '/assets/browse-8.jpg', alt: 'Device 8', heading: 'TV', price: '$24,999.99' },
//     { src: '/assets/browse-9.jpg', alt: 'Device 9', heading: 'Router', price: '$149,99' },
//     { src: '/assets/browse-10.jpeg', alt: 'Device 10', heading: 'Echo Dot', price: '$69.99' },
//   ];

//   return (
//     <div>
//       {/* First Row */}
//       <div className="row top">
//         {firstRowImages.map((image, index) => (
//           <div key={index} className="card-top">
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="item-img"
//               width={image.width}
//               height={image.height}
//             />
//             <div className="card-details">
//               <h3  className="card-heading">{image.heading}</h3>
//               <p className="card-price">{image.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Second Row */}
//       <div className="row">
//         {secondRowImages.map((image, index) => (
//           <div key={index} className="card-bottom">
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="card-img"
//               width={image.width}
//               height={image.height}
//             />
//             <div className="card-details">
//               <h3 className="card-heading">{image.heading}</h3>
//               <p className="card-price">{image.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
    
//   );
// }

// export default Browse;


import React, { useState, useEffect } from 'react';
import "../App.css";


const Browse = ({products}) => {
  
  return (

    <div className="-container">
      <section className="filtered-row">
      {products.map((product, index) => (
        <div key={index} className="filtered-card">
          <img
            src={product['image-url']}
            alt={product.name}
            className="filtered-img"
            width="300"
            height="200"
          />
          <button className='auction'>$</button>
          <div className="filtered-details">
            <h3>{product.name}</h3>
            <p>{`$${product.price}`}</p>
            <button>details</button>
          </div>
        </div>
      ))}
      </section>
    </div>
  );
};


export default Browse;
