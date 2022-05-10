import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../../assets/styles/ImagesStyling.css';
import ArrowButton from '../../atoms/ArrowButton/ArrowButton';
import { imageMovingOnScroll } from '../../../assets/styles/animations';
import {
  HeroContentWrapper,
  TitleWrapper,
  TitleUpper,
  TitleLower,
  ImageWrapper,
  StyledButton,
} from './HeroContent.styles';

const Hero = React.forwardRef((props, ref) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    imageMovingOnScroll(image);
  }, []);

  return (
    <HeroContentWrapper>
      <TitleWrapper>
        <TitleUpper>Witamy </TitleUpper>
        <TitleLower>u Fiołków</TitleLower>
        <StyledButton
          ref={ref}
          onClick={() => {
            ref[1].current.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          Zapraszamy!
        </StyledButton>
      </TitleWrapper>
      <ImageWrapper ref={imageRef}>
        <StaticImage
          className="HeroImgWrapper"
          imgClassName="HeroImg"
          src="../../../assets/images/photos/heroImage.png"
          alt="hand with icecream"
          placeholder="NONE"
          quality={100}
        />
      </ImageWrapper>
      <ArrowButton
        ref={ref}
        onClick={() => {
          ref[1].current.scrollIntoView({
            behavior: 'smooth',
          });
        }}
      />
    </HeroContentWrapper>
  );
});

export default Hero;
