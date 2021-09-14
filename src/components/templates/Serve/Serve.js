import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import { Title, Description } from '../../atoms/SectionStyling/SectionStyling';

function Serve() {
  return (
    <SectionWrapper>
      <Title>Co serwujemy?</Title>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, iste
        consectetur dolores nemo eveniet, voluptate, quod odio eaque vitae fugit
        aliquam laboriosam recusandae dignissimos quos.
      </Description>
      <StaticImage
        src="../../../assets/images/cake3.jpg"
        alt="image of boss"
        placeholder="none"
        className="SectionImage"
      />
    </SectionWrapper>
  );
}

export default Serve;
