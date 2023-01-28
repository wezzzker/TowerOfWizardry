import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Banner from '../components/Home/Banner';
import Card from '../components/Home/Card';
import Games from '../components/Home/Games';
import Products from '../components/Home/Products';

const Homepage = () => {
  return (
    <>
      <Banner />
      <Card />
      <Games />
      <Products />
    </>
  );
};

export default Homepage;
