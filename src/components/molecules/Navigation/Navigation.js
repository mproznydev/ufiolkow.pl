import React from 'react';
import { Wrapper, NavigationEl, StyledSocialIcons } from './Navigation.styles';

const Navigation = React.forwardRef(({ isOpen, toggleMobileMenu }, ref) => {
  const scrollInto = (referent) => {
    if (isOpen) {
      toggleMobileMenu(!isOpen);
      referent.current.scrollIntoView({
        behavior: 'smooth',
      });
    } else {
      referent.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Wrapper isOpen={isOpen} ref={ref}>
      <ul>
        <NavigationEl
          onClick={() => {
            scrollInto(ref[1]);
          }}
        >
          O nas
        </NavigationEl>
        <NavigationEl
          onClick={() => {
            scrollInto(ref[2]);
          }}
        >
          co serwujemy?
        </NavigationEl>
        <NavigationEl
          onClick={() => {
            scrollInto(ref[3]);
          }}
        >
          słodkości na zamówienie
        </NavigationEl>
        <NavigationEl
          onClick={() => {
            scrollInto(ref[4]);
          }}
        >
          współpraca
        </NavigationEl>
        <NavigationEl
          onClick={() => {
            scrollInto(ref[5]);
          }}
        >
          gdzie nas znaleźć?
        </NavigationEl>
        <NavigationEl
          onClick={() => {
            scrollInto(ref[6]);
          }}
        >
          kontakt
        </NavigationEl>
        <NavigationEl>
          <StyledSocialIcons />
        </NavigationEl>
      </ul>
    </Wrapper>
  );
});

export default Navigation;
