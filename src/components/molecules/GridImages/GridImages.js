import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;

  > * {
    border-radius: 8px;
    box-shadow: 5px 5px 6px rgb(0 0 0 / 0.3);
    max-width: 450px;
  }

  > :nth-child(2n) {
    display: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0;

    > * {
      max-width: 300px;
    }

    > :nth-child(2n) {
      display: unset;
    }
  }
  ${({ theme }) => theme.mq.desktop} {
    margin-top: 0;
    align-self: auto;
    margin-right: 0;
  }
`;

function GridImages({ children }) {
  return <Grid>{children}</Grid>;
}

export default GridImages;
