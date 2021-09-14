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

  ${({ theme }) => theme.mq.desktop} {
    height: auto;
    width: auto;
    position: static;
    transform: none;
    background-color: transparent;
  }

  & ul {
    align-self: flex-start;
    list-style: none;
    height: 85vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    ${({ theme }) => theme.mq.desktop} {
      flex-direction: row;
      height: auto;
      align-self: center;
    }
  }
`;

const NavigationEl = styled.li`
  list-style: none;
  text-align: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.s};

  ${({ theme }) => theme.mq.desktop} {
    margin: 0 0.6rem;
    font-size: ${({ theme }) => theme.font.size.xxs};
  }
  ${({ theme }) => theme.mq.large} {
    margin: 0 1.5rem;
  }
`;

const StyledSocialIcons = styled(SocialIcons)`
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
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
          <StyledSocialIcons />
        </NavigationEl>
      </ul>
    </Wrapper>
  );
}

Navigation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Navigation;
