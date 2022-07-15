import React from 'react';
import Header from '../../organisms/Header/Header';
import HeroContent from '../../organisms/HeroContent/HeroContent';

const Hero = React.forwardRef(({ data }, ref) => {
  return (
    <>
      <Header ref={ref} data={data} />
      <HeroContent ref={ref} />
    </>
  );
});

export default Hero;
