import * as React from 'react';
import { useRef } from 'react';
import MainTemplate from '../components/templates/MainTemplate';
import Hero from '../components/templates/Hero/Hero';
import About from '../components/templates/About/About';
import Serve from '../components/templates/Serve/Serve';
import Order from '../components/templates/Order/Order';
import Cooperation from '../components/templates/Cooperation/Cooperation';
import WhereFind from '../components/templates/WhereFind/WhereFind';
import Contact from '../components/templates/Contact/Contact';
import Footer from '../components/templates/Footer/Footer';

const IndexPage = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const serveRef = useRef(null);
  const OrderRef = useRef(null);
  const cooperationRef = useRef(null);
  const whereFindRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <MainTemplate>
        <Hero
          ref={[
            heroRef,
            aboutRef,
            serveRef,
            OrderRef,
            cooperationRef,
            whereFindRef,
            contactRef,
          ]}
        />
        <About ref={aboutRef} />
        <Serve ref={serveRef} />
        <Order ref={OrderRef} />
        <Cooperation ref={cooperationRef} />
        <WhereFind ref={whereFindRef} />
        <Contact ref={contactRef} />
        <Footer />
      </MainTemplate>
    </>
  );
};

export default IndexPage;
