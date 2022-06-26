import * as React from 'react';
import { useRef } from 'react';
import { graphql } from 'gatsby';
import MainTemplate from '../components/templates/MainTemplate';
import Hero from '../components/templates/Hero/Hero';
import About from '../components/templates/About/About';
import Serve from '../components/templates/Serve/Serve';
import Order from '../components/templates/Order/Order';
import Cooperation from '../components/templates/Cooperation/Cooperation';
import WhereFind from '../components/templates/WhereFind/WhereFind';
import Contact from '../components/templates/Contact/Contact';
import Footer from '../components/templates/Footer/Footer';

const IndexPage = ({ data }) => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const serveRef = useRef(null);
  const OrderRef = useRef(null);
  const cooperationRef = useRef(null);
  const whereFindRef = useRef(null);
  const contactRef = useRef(null);

  const sectionsDataInOrder = data.allContentfulSekcje.nodes.sort(
    (a, b) => a.pozycja - b.pozycja
  );

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
          data={sectionsDataInOrder}
        />
        <About ref={aboutRef} data={sectionsDataInOrder[0]} />
        <Serve ref={serveRef} data={sectionsDataInOrder[1]} />
        <Order ref={OrderRef} data={sectionsDataInOrder[2]} />
        <Cooperation ref={cooperationRef} data={sectionsDataInOrder[3]} />
        <WhereFind ref={whereFindRef} data={sectionsDataInOrder[4]} />
        <Contact ref={contactRef} />
        <Footer />
      </MainTemplate>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    allContentfulSekcje {
      nodes {
        opis {
          raw
        }
        tytul
        pozycja
        zdjecia {
          title
          url
        }
      }
    }
  }
`;

export default IndexPage;
