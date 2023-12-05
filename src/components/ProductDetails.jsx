import React from 'react'
import './ProductDetails.css'

export default function ProductDetails() {
  return (
    <div className="parent">
        <div className='productDetails'>
            <secction className="pDisplay">
                <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70" alt="unable to load" />
                <button>Add to Cart</button>
            </secction>
            <section className="pDetails">
                <h4 className="pName">APPLE iPhone 15 (Black, 256 GB)</h4>
                <h2>$1450</h2>
                <p>256 GB ROM
                    15.49 cm (6.1 inch) Super Retina XDR Display
                    48MP + 12MP | 12MP Front Camera
                    A16 Bionic Chip, 6 Core Processor Processor
                </p>
                <h5>Current value is greater than your value</h5>
            </section>
        </div>
    </div>
  )
}
