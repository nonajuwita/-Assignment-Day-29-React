import { useState } from "react";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import coffeeLatteImg from "./assets/coffee-latte.jpg";
import coffeeCappuccinoImg from "./assets/coffee-cappuccino.jpg";
import croissantImg from "./assets/croissant.jpg";

function App() {
  const menuItems = [
    {
      name: "Coffee Latte",
      description: "A rich and smooth espresso with steamed milk, perfect for any time of the day.",
      price: "Rp.50.000",
      image: coffeeLatteImg,
    },
    {
      name: "Cappuccino",
      description: "A balanced mix of espresso, steamed milk, and frothy foam.",
      price: "Rp.50.000",
      image: coffeeCappuccinoImg,
    },
    {
      name: "Croissant",
      description: "Buttery, flaky, and freshly baked – a perfect snack with your coffee.",
      price: "Rp.50.000",
      image: croissantImg,
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <Content menuItems={menuItems} />
      <Footer />
    </>
  );
}

export default App;
