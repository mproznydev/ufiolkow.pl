import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHamburger = styled.button`
  padding: 1rem 0.8rem;
  position: relative;
  border: none;
  display: flex;
  justify-content: center;
  align-content: center;
  background: none;
`;

const InnerHamburger = styled.div`
  width: 22px;
  height: 2px;
  background-color: ${({ theme, isOpen }) =>
    isOpen ? 'transparent' : theme.purple};
  transition: background-color 0.15s ease-in-out;
  position: relative;
  border-radius: 10px;

  ::after,
  ::before {
    content: '';
    position: absolute;
    background-color: ${({ theme }) => theme.purple};
    width: 22px;
    height: 2px;
    left: 0;
    border-radius: 10px;
    transition: transform 0.25s 0.15s ease-in-out;
  }
  ::after {
    top: 6px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-6px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }
  ::before {
    top: -6px;
    transform: translateY(${({ isOpen }) => (isOpen ? '6px' : '0')})
      rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }
`;

function Hamburger({ isOpen, ...props }) {
  return (
    <StyledHamburger {...props}>
      <InnerHamburger isOpen={isOpen} />
    </StyledHamburger>
  );
}

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Hamburger;
