import React from 'react';
import styled from 'styled-components';

export const Description = styled.p`
  visibility: hidden;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 500;
  line-height: 1.2;
  margin: 0 1rem;
  color: ${({ theme }) => theme.black};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
    text-align: ${({ isLeft }) => (isLeft ? 'center' : 'start')};
  }
`;

function DescriptionSection({ children, ...props }) {
  return <Description {...props}>{children}</Description>;
}

export default DescriptionSection;
