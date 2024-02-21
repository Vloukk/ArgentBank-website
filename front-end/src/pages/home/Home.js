import React from 'react';
import Header from '../../components/header/Header';
import HeroBanner from '../../components/herobanner/HeroBanner';
import Features from '../../components/features/.Features';
import Footer from '../../components/footer/Footer';

function Home() {

  return (
    <div className='home'>
      <Header />
      <HeroBanner />
      <Features/>    
      <Footer />
    </div>
  );
}

export default Home;