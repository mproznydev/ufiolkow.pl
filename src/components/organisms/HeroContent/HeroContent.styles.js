import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

export const StyledButton = styled(Button)`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: unset;
    font-size: 1rem;
    margin-top: 0.8rem;
    font-weight: 600;
    box-shadow: 4px 3px 5px rgb(0 0 0 / 0.4);
  }
  ${({ theme }) => theme.mq.desktop} {
    font-weight: 600;
    width: 150px;
    height: 35px;
  }
`;

export const HeroContentWrapper = styled.div`
  height: 91vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-bottom: 5rem;
  }
  ${({ theme }) => theme.mq.desktop} {
    padding-bottom: 0;
  }
`;

export const ImageWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    width: fit-content;
    max-width: 525px;
    display: inline-block;
  }
  @media (min-width: 1540px) {
    max-width: 630px;
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
    margin-bottom: 5.5rem;
    margin-left: 1rem;
  }
`;

export const TitleUpper = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: 800;
  color: ${({ theme }) => theme.black};

  ${({ theme }) => theme.mq.desktop} {
    padding-right: 180px;
    font-size: ${({ theme }) => theme.font.size.xxxl};
  }
  ${({ theme }) => theme.mq.large} {
    font-size: ${({ theme }) => theme.font.size.xxxxl};
  }
`;

export const TitleLower = styled.h1`
  font-size: ${({ theme }) => theme.font.size.xxl};
  font-weight: 800;
  color: ${({ theme }) => theme.purple};
  position: relative;
  text-align: center;
  /* white-space: nowrap; */
  width: 100%;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.xxxl};
  }
  ${({ theme }) => theme.mq.large} {
    font-size: ${({ theme }) => theme.font.size.xxxxl};
  }

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
      height: 140px;
      top: calc(50% - 2.2rem);
      left: 50%;
      transform: translate(-50%, -50%);
    }

    ${({ theme }) => theme.mq.desktop} {
      height: 160px;
      top: calc(50% + 1rem);
    }
    ${({ theme }) => theme.mq.large} {
      height: 170px;
      top: calc(50% + 1.3rem);
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    position: static;
  }
`;
