import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../../assets/styles/ImagesStyling.css';
import ArrowButton from '../../atoms/ArrowButton/ArrowButton';

import {
  HeroContentWrapper,
  TitleWrapper,
  TitleUpper,
  TitleLower,
} from './HeroContent.styles';

function Hero() {
  return (
    <HeroContentWrapper>
      <TitleWrapper>
        <TitleUpper>Witamy </TitleUpper>
        <TitleLower>u Fiołków</TitleLower>
      </TitleWrapper>
      <StaticImage
        className="HeroImgWrapper"
        imgClassName="HeroImg"
        src="../../../assets/images/hero.png"
        alt="hand with icecream"
        placeholder="NONE"
        quality={100}
      />

      <ArrowButton />
    </HeroContentWrapper>
  );
}

export default Hero;
