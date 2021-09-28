import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  visibility: hidden;
  display: inline-block;
  align-self: start;
  color: ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.font.size.s};
  position: relative;
  ${({ theme }) => theme.underlinePurple}

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.m};
    align-self: ${({ isLeft }) => (isLeft ? 'center' : 'start')};
  }
`;

function TitleSection({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
}

export default TitleSection;
