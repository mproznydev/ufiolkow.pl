import React, { useEffect, useRef, useState } from 'react';
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
  // CookiesWrapper,
} from './HeroContent.styles';

const Hero = React.forwardRef(({ data }, ref) => {
  const imageRef = useRef(null);
  // const [isCookiesConsent, setIsCookiesConsent] = useState(true);

  useEffect(() => {
    const image = imageRef.current;
    imageMovingOnScroll(image);
  }, []);

  // const handleAcceptCookies = () => {
  //   window.localStorage.setItem('cookiesConsent', 'true');
  //   setIsCookiesConsent(true);
  // };

  // useEffect(() => {
  //   setIsCookiesConsent(window.localStorage.getItem('cookiesConsent'));
  // }, []);

  return (
    <HeroContentWrapper>
      <TitleWrapper>
        <TitleUpper>Witamy</TitleUpper>
        <TitleLower>u Fiołków</TitleLower>
        <StyledButton
          ref={ref}
          onClick={() => {
            ref[1].current.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          Sprawdź nasze menu!
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
      {/* {!isCookiesConsent ? (
        <CookiesWrapper>
          <p>Ta strona wykorzystuję pliki cookie</p>
          <button type="button" onClick={handleAcceptCookies}>
            akceptuje
          </button>
        </CookiesWrapper>
      ) : null} */}
    </HeroContentWrapper>
  );
});

export default Hero;
