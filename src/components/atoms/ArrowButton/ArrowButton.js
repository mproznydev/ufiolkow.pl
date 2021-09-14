import React from 'react';
import styled from 'styled-components';
import Arrow from '../../../assets/images/arrow-icon.svg';

const ArrowWrapper = styled.button`
  grid-row: 4/5;
  justify-self: center;
  align-self: flex-start;
  background: none;
  border: none;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  animation: ArrowBounce 2s infinite;

  @keyframes ArrowBounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  ${({ theme }) => theme.mq.tablet} {
    display: none;
  }
`;

const ArrowIcon = styled(Arrow)`
  width: 100%;
  height: auto;
`;

function ArrowButton() {
  return (
    <ArrowWrapper>
      <ArrowIcon />
    </ArrowWrapper>
  );
}

export default ArrowButton;
