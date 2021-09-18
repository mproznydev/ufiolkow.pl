import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 2rem 1rem;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ::before {
    content: '';
    top: 28%;
    right: 0;
    left: ${({ isLeft }) => (isLeft ? 'auto' : '0')};
    position: absolute;
    width: 29%;
    max-width: 35%;
    border-radius: ${({ isLeft }) =>
      isLeft ? '10px 0px 0px 10px' : '0px 10px 10px 0px'};
    height: 40%;
    background-color: ${({ theme }) => theme.lightPurple};
    z-index: -3;
  }

  ${({ theme }) => theme.mq.tablet} {
  }

  ${({ theme }) => theme.mq.desktop} {
    gap: ${({ isGrid }) => (isGrid ? '2rem' : '0')};
    align-items: start;
    justify-content: space-between;
    padding: 5rem 9vw;
    flex-direction: ${({ isLeft }) => (isLeft ? 'row-reverse' : 'row')};
  }
`;

function SectionWrapper({ children, ...props }) {
  return (
    <Wrapper {...props}>
      <>{children}</>
    </Wrapper>
  );
}

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionWrapper;
