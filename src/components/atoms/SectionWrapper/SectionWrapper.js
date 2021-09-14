import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 1rem 1rem;
  position: relative;

  ::before {
    content: '';
    top: 9%;
    right: 0;
    left: ${({ isLeft }) => (isLeft ? '0' : 'auto')};
    position: absolute;
    width: 45%;
    border-radius: ${({ isLeft }) =>
      isLeft ? '0px 10px 10px 0px' : '10px 0px 0 10px'};
    height: 60%;
    background-color: ${({ theme }) => theme.lightPurple};
    z-index: -3;
  }

  > * {
    margin: 0.6rem 0;
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
