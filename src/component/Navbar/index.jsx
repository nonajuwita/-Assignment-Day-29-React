import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="px-12 py-8 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="font-sans font-serif text-2xl font-semibold text-gray-800">
            Moshi Moshi Coffee
          </div>

          <nav>
            <ul className="flex space-x-6">
              <li><a href="#hero" className="text-lg font-medium text-gray-800 transition hover:text-gray-600">Home</a></li>
              <li><a href="#about" className="text-lg font-medium text-gray-800 transition hover:text-gray-600">About</a></li>
              <li><a href="#menu" className="text-lg font-medium text-gray-800 transition hover:text-gray-600">Menu</a></li>
              <li><a href="#contact" className="text-lg font-medium text-gray-800 transition hover:text-gray-600">Contact</a></li>
              <li><a href="#order" className="text-lg font-medium text-gray-800 transition hover:text-gray-600">Order</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
