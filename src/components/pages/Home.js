import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      {/* Define the scrollable sections */}
      <div id="heroSection">
        <HeroSection />
      </div>

      <div id="cardsSection">
        <Cards />
      </div>

      <div id="footerSection">
        <Footer />
      </div>
    </>
  );
}

export default Home;
