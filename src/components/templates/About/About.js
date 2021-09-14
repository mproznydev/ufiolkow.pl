import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import { Title, Description } from '../../atoms/SectionStyling/SectionStyling';
import '../../../assets/styles/ImagesStyling.css';

function About() {
  return (
    <SectionWrapper isLeft>
      <Title>O nas</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
        officiis dolorem odio itaque ad vero aut reprehenderit esse, recusandae
        illo accusantium numquam blanditiis distinctio culpa! Voluptatum harum
        in laudantium repellat?
      </Description>
      <StaticImage
        src="../../../assets/images/boss.jpg"
        alt="image of boss"
        placeholder="none"
        className="SectionImage"
      />
    </SectionWrapper>
  );
}

export default About;
