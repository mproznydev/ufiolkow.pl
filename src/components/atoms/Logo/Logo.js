import React from 'react';
import styled from 'styled-components';
import Image from '../../../assets/images/icons/logo.svg';

const LogoImg = styled(Image)`
  width: auto;
  height: 100%;
  max-height: 65px;
`;

function Logo() {
  return <LogoImg />;
}

export default Logo;
