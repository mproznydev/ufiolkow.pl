import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  display: inline-block;
  align-self: start;
  font-size: ${({ theme }) => theme.font.size.s};
  position: relative;
  ${({ theme }) => theme.underlinePurple}

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.m};
    align-self: ${({ isLeft }) => (isLeft ? 'flex-end' : 'flex-start')};
  }
`;

function TitleSection({ text, ...props }) {
  return <Title {...props}>{text}</Title>;
}

export default TitleSection;
