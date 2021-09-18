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

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <Logo />
      <Navigation isOpen={isMenuOpen} />
      <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
    </Wrapper>
  );
}

export default Header;
