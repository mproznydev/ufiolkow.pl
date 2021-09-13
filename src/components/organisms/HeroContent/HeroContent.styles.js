import styled from 'styled-components';
import Arrow from '../../../assets/images/arrow-icon.svg';

export const Wrapper = styled.div`
  height: 91vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TitleWrapper = styled.div`
  grid-row: 2/3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    grid-row: 2/3;
    grid-column: 1/3;
  }
`;

export const TitleUpper = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: 800;
  color: ${({ theme }) => theme.black};
`;

export const TitleLower = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: 800;
  color: ${({ theme }) => theme.purple};
  position: relative;
  text-align: center;
  width: 100%;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.lightPurple};

    ${({ theme }) => theme.mq.tablet} {
      display: none;
    }
  }
`;

export const BackgroundRectangle = styled.div`
  display: none;
  align-self: flex-end;
  background-color: ${({ theme }) => theme.lightPurple};
  width: 100%;
  height: 50%;

  ${({ theme }) => theme.mq.tablet} {
    grid-column: 1/5;
    grid-row: 2/3;
    display: inline-block;
    display: none;
  }
`;

export const ArrowWrapper = styled.button`
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

export const ArrowIcon = styled(Arrow)`
  width: 100%;
  height: auto;
`;
