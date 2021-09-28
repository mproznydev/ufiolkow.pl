import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.purple};
  color: white;
  align-self: center;
  border-radius: 13px;
  width: 130px;
  font-family: 'Montserrat', sans-serif;
  height: 32px;
  box-shadow: 0 3px 4px rgb(0 0 0 / 0.3);
  border: none;
  font-size: ${({ theme }) => theme.font.size.xs};
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;

export default Button;
