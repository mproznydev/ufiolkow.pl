import React from 'react';
import { Wrapper, NavigationEl, StyledSocialIcons } from './Navigation.styles';

const Navigation = React.forwardRef(
  ({ isOpen, toggleMobileMenu, navigations }, ref) => {
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
    const navigationsTitles = navigations.map((navigation) => navigation.tytul);

    return (
      <Wrapper isOpen={isOpen} ref={ref}>
        <ul>
          {navigationsTitles.map((title, index) => (
            <NavigationEl
              onClick={() => {
                scrollInto(ref[index + 1]);
              }}
              key={title}
            >
              {title}
            </NavigationEl>
          ))}
          <NavigationEl>
            <StyledSocialIcons />
          </NavigationEl>
        </ul>
      </Wrapper>
    );
  }
);

export default Navigation;
