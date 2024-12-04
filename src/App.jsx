import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

function App() {
 

  return (
    <>
      
      <Navbar/>
      <Header/>
      <Content/>
      <Footer/>
    </>
  )
}

export default App
