import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

import Notfoundpage from './pages/Notfoundpage';
import Iventspage from './pages/Iventspage';
import Contact from './pages/Contact';
import Cartpage from './pages/Cartpage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/ivents" element={<Iventspage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cartpage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
