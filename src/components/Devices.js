import React from 'react';
import '../App.css';

const Device = () => {
  const devices = [
    { src: '/assets/device-1.jpeg', alt: 'Device 1', width: 48,  height:  48},
    { src: '/assets/device-2.jpeg', alt: 'Device 2', width: 48,  height:  48},
    { src: '/assets/device-3.jpeg', alt: 'Device 3', width: 48,  height:  48},
    { src: '/assets/device-4.jpeg', alt: 'Device 4', width: 48,  height:  48},
    { src: '/assets/device-5.jpeg', alt: 'Device 5', width: 48,  height:  48},
    { src: '/assets/device-6.jpeg', alt: 'Device 6', width: 48,  height:  48},
    { src: '/assets/device-7.jpeg', alt: 'Device 7', width: 48,  height:  48},
    { src: '/assets/device-8.jpeg', alt: 'Device 8', width: 48,  height:  48},
    { src: '/assets/device-9.jpeg', alt: 'Device 8', width: 48,  height:  48},
    { src: '/assets/device-10.jpeg',alt: 'Device 8', width: 48,  height:  48},
    { src: '/assets/device-11.png', alt: 'Device 8', width: 48,  height:  48},
  ];

  return (
    <section className="devices-container">
      {devices.map((device, index) => (
        <img
          key={index}
          src={device.src}
          alt={device.alt}
          width={device.width}
          height={device.height}
        />
      ))}
    </section>
  );
};

export default Device;
