import React from 'react';
import Header from '../../organisms/Header/Header';
import HeroContent from '../../organisms/HeroContent/HeroContent';

const Hero = React.forwardRef((props, ref) => {
  return (
    <>
      <Header ref={ref} />
      <HeroContent ref={ref} />
    </>
  );
});

export default Hero;
