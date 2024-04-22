import React from "react";
import Navbar from "./assets/Components/Navbar";
import Work from "./assets/Components/Work";
import Stripes from "./assets/Components/Stripes";
import Products from "./assets/Components/Products";
import Marques from "./assets/Components/Marques";
import Cards from "./assets/Components/Cards";
import Footer from "./assets/Components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='text-white w-full font-["satoshi"]'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marques />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
