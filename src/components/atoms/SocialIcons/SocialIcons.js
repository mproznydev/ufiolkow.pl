import React from 'react';
import styled from 'styled-components';
import FbIcon from '../../../assets/images/fb-icon.svg';
import InstaIcon from '../../../assets/images/insta-icon.svg';

const StyledFbIcon = styled(FbIcon)`
  margin: 0 10px;
`;
const StyledInstaIcon = styled(InstaIcon)`
  margin: 0 10px;
`;

function SocialIcons() {
  return (
    <>
      <StyledFbIcon />
      <StyledInstaIcon />
    </>
  );
}

export default SocialIcons;
