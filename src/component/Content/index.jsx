import React from "react";

const Content = ({ menuItems }) => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="px-12 py-16">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-700">
            Cafe is where simplicity meets quality. We serve freshly brewed coffee and delicious pastries, all in a minimalistic and cozy space.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="px-12 py-16 bg-gray-50">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800"> Menu</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Iterate through menu items */}
            {menuItems.map((item, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <img src={item.image} alt={item.name} className="object-cover w-full h-48 rounded-md sm:h-56 md:h-64 lg:h-72" />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
                <p className="mt-4 text-lg font-semibold text-gray-800">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-12 py-16 bg-gray-100">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-700">We'd love to hear from you! Reach out to us if you have any questions or want to place an order.</p>
          <form className="max-w-lg mx-auto mt-8 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white uppercase transition-all bg-gray-900 border border-gray-900 rounded-lg hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="px-12 py-16 bg-gray-50">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Place Your Order</h2>
          <p className="text-lg text-gray-700">Fill out the form below to place your order. We'll contact you soon!</p>

          <form className="max-w-lg mx-auto mt-8 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <select className="w-full p-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500">
              <option value="" disabled selected>
                Select Your Item
              </option>
              {menuItems.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name} - {item.price}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Special Requests or Instructions"
              rows="4"
              className="w-full p-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white uppercase transition-all bg-gray-900 border border-gray-900 rounded-lg hover:bg-gray-800"
            >
              Place Order
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Content;
