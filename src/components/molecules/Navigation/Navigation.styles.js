import styled from 'styled-components';
import SocialIcons from '../../atoms/SocialIcons/SocialIcons';

export const Wrapper = styled.div`
  height: 91vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.white};
  position: fixed;
  display: flex;
  justify-content: center;
  left: 0;
  top: 9vh;
  transform: ${({ isOpen }) =>
    isOpen ? 'traslateX(0)' : 'translateX(-100vw)'};
  transition: transform 0.5s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    height: auto;
    width: auto;
    position: static;
    transform: none;
    background-color: transparent;
  }

  & ul {
    align-self: flex-start;
    list-style: none;
    height: 80vh;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    ${({ theme }) => theme.mq.desktop} {
      flex-direction: row;
      height: auto;
      align-self: center;
    }
  }
`;

export const NavigationEl = styled.li`
  list-style: none;
  text-align: center;
  font-weight: 700;
  font-size: ${({ theme }) => theme.font.size.s};
  color: ${({ theme }) => theme.black};

  ${({ theme }) => theme.mq.desktop} {
    margin: 0 0.6rem;
    font-size: ${({ theme }) => theme.font.size.xxs};
    &:hover {
      transform: scale(1.05);
      cursor: pointer;
      color: ${({ theme }) => theme.purple};
    }
  }
  ${({ theme }) => theme.mq.large} {
    margin: 0 1.5rem;
  }
`;

export const StyledSocialIcons = styled(SocialIcons)`
  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;
