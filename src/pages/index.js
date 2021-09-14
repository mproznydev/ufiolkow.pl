import * as React from 'react';
import MainTemplate from '../components/templates/MainTemplate';
import Hero from '../components/templates/Hero/Hero';
import About from '../components/templates/About/About';
import Serve from '../components/templates/Serve/Serve';
import Order from '../components/templates/Order/Order';
import Cooperation from '../components/templates/Cooperation/Cooperation';
import WhereFind from '../components/templates/WhereFind/WhereFind';
import Contact from '../components/templates/Contact/Contact';

const IndexPage = () => {
  return (
    <>
      <MainTemplate>
        <Hero />
        <About />
        <Serve />
        <Order />
        <Cooperation />
        <WhereFind />
        <Contact />
      </MainTemplate>
    </>
  );
};

export default IndexPage;
