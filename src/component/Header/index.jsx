import React from 'react';

const Header = () => {
  return (
    <div>
      <div 
        id="hero" 
        className="relative bg-center bg-cover h-96" 
        style={{ backgroundImage: "url('./image/coffee-shop-interior.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4 text-center">
          <div className="space-y-8 text-white">
            <h1 className="text-5xl font-bold leading-tight">Welcome to </h1>
            <h1 className="font-serif text-5xl bg-black">Moshi Moshi Coffee</h1>
            <p className="text-xl">A cozy place to enjoy your favorite coffee.</p>
            <a 
              href="#menu" 
              className="inline-block px-12 py-3 mt-8 text-lg font-medium text-white uppercase transition bg-gray-900 border border-gray-900 rounded-lg hover:bg-gray-800"
            >
              Our Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
