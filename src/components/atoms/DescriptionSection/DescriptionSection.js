import React from 'react';
import styled from 'styled-components';

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 500;
  line-height: 1.2;
  margin: 0 1rem;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
    text-align: ${({ isLeft }) => (isLeft ? 'end' : 'start')};
  }
`;

function DescriptionSection({ text, ...props }) {
  return <Description {...props}>{text}</Description>;
}

export default DescriptionSection;
