import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SocialIcons from '../../atoms/SocialIcons/SocialIcons';

const Wrapper = styled.div`
  height: 91vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  top: 9vh;
  transform: ${({ isOpen }) =>
    isOpen ? 'traslateX(0)' : 'translateX(-100vw)'};
  transition: transform 0.5s ease-in-out;

  & ul {
    align-self: flex-start;
    list-style: none;
    height: 85vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }
`;

const NavigationEl = styled.li`
  list-style: none;
  text-align: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.s};
`;

function Navigation({ isOpen }) {
  return (
    <Wrapper isOpen={isOpen}>
      <ul>
        <NavigationEl>O nas</NavigationEl>
        <NavigationEl>co serwujemy?</NavigationEl>
        <NavigationEl>słodkości na zamówienie</NavigationEl>
        <NavigationEl>współpraca</NavigationEl>
        <NavigationEl>gdzie nas znaleźć?</NavigationEl>
        <NavigationEl>kontakt</NavigationEl>
        <NavigationEl>
          <SocialIcons />
        </NavigationEl>
      </ul>
    </Wrapper>
  );
}

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Navigation;
