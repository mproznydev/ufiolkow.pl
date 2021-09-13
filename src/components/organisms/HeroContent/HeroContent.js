import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../../assets/styles/HeroImageStyle.css';

import {
  Wrapper,
  TitleWrapper,
  TitleUpper,
  TitleLower,
  ArrowWrapper,
  ArrowIcon,
  BackgroundRectangle,
} from './HeroContent.styles';

// ${({ theme }) => theme.tablet} {
//   display: inline-block;
//   grid-row: 2/3;
//   grid-column: 3/5;
// }

function Hero() {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleUpper>Witamy </TitleUpper>
        <TitleLower>u Fiołków</TitleLower>
      </TitleWrapper>
      <BackgroundRectangle />

      <StaticImage
        className="HeroImg"
        src="../../../assets/images/hero.png"
        alt="hand with icecream"
      />

      <ArrowWrapper>
        <ArrowIcon />
      </ArrowWrapper>
    </Wrapper>
  );
}

export default Hero;
