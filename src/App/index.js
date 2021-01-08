import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Banner from './layouts/Banner'
import SectionSale from './layouts/SectionSale';
import Sale from './layouts/Sale';
import Feelback from './layouts/Feelback';
import Intro from './layouts/Intro';
import Footer from './layouts/Footer';
import Infor from './layouts/Infor';

function HomePage() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Sale />
      <SectionSale />
      <Feelback />
      <Intro />
      <Infor />
      <Footer />
    </div>
  );
}

export default HomePage;
