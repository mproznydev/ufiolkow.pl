import styled from 'styled-components';

export const Title = styled.h1`
  display: inline-block;
  font-size: ${({ theme }) => theme.font.size.s};
  position: relative;
  ${({ theme }) => theme.underlinePurple}
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 500;
  line-height: 1.2;
`;
