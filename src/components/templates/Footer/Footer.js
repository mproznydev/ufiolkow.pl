import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.purple};

  p {
    color: ${({ theme }) => theme.white};
    padding: 0.5rem 0.5rem;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <p>
        Polityka prywatności <br />© 2021 Lodziarnia u Fiołków. All rights
        reserved
      </p>
    </Wrapper>
  );
}

export default Footer;
