import React from 'react';
import styled from 'styled-components';
import FbIcon from '../../../assets/images/icons/fb-icon.svg';
import InstaIcon from '../../../assets/images/icons/insta-icon.svg';

const StyledFbIcon = styled(FbIcon)`
  width: 30px;
  color: black;
  margin-right: 20px;
`;
const StyledInstaIcon = styled(InstaIcon)`
  width: 30px;
  color: black;
`;

function SocialIcons({ className }) {
  return (
    <div className={className}>
      <a
        href="https://pl-pl.facebook.com/lodziarniaufiolkowkawiarnia/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledFbIcon />
      </a>
      <a
        href="https://www.instagram.com/lodziarnia_u_fiolkow/"
        target="_blank"
        rel="noreferrer"
      >
        <StyledInstaIcon />
      </a>
    </div>
  );
}

export default SocialIcons;
