import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../atoms/Logo/Logo';
import Hamburger from '../../atoms/Hamburger/Hamburger';
import Navigation from '../../molecules/Navigation/Navigation';

const Wrapper = styled.div`
  padding: 0.6rem 0 0 0.8rem;
  z-index: 9999;
  position: relative;
  align-items: flex-start;
  height: 9vh;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mq.desktop} {
    align-items: center;
  }
`;

const setHiddenScroll = () => {
  if (document.body.style.overflow !== 'hidden') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }
};

const Header = React.forwardRef((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setHiddenScroll();
  };

  return (
    <Wrapper>
      <Logo />
      <Navigation
        isOpen={isMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        ref={ref}
      />
      <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
    </Wrapper>
  );
});

export default Header;
