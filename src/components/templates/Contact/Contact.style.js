import styled from 'styled-components';
import PhoneIcon from '../../../assets/images/icons/phone-icon.svg';
import EmailIcon from '../../../assets/images/icons/email-icon.svg';
import HomeIcon from '../../../assets/images/icons/home-icon.svg';
import FbIcon from '../../../assets/images/icons/fb-icon.svg';
import InstaIcon from '../../../assets/images/icons/insta-icon.svg';
import DescriptionSection from '../../atoms/DescriptionSection/DescriptionSection';

export const StyledDescriptionSection = styled(DescriptionSection)`
  visibility: hidden;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 500;
  line-height: 1.2;
  /* margin: 0 1rem; */
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.black};

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 1rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.s};
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
  }
  li {
    list-style: none;
    margin-top: 1.05rem;
    ${({ theme }) => theme.mq.desktop} {
      align-self: center;
    }
    svg {
      margin-right: 7px;
      color: #9127ce;
    }
  }
  a {
    text-decoration: none;
    display: flex;

    color: ${({ theme }) => theme.black};
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: calc(100% - 2rem);
  max-width: 450px;
  margin: 0 1rem;
`;
export const StyledSubtitle = styled.div`
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: 600;
  margin: 0.5rem 0;
  align-self: center;
`;
export const Input = styled.input`
  height: ${({ height }) => height};
  border: none;
  box-shadow: 0 2px 5px rgb(0 0 0 / 0.3);
  border-radius: 15px;
  padding: 0.5rem 0.5rem;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 0.5rem;
  background-color: rgba(209, 209, 209, 0.8);
  outline: none;
  resize: none;
`;

export const StyledPhoneIcon = styled(PhoneIcon)`
  width: 19px;
  height: 19px;
`;
export const StyledHomeIcon = styled(HomeIcon)`
  width: 23px;
  height: 21px;
`;
export const StyledEmailIcon = styled(EmailIcon)`
  width: 25px;
  height: 21px;
`;
export const StyledFbIcon = styled(FbIcon)`
  height: 25px;
  width: 21px;
`;
export const StyledInstaIcon = styled(InstaIcon)`
  height: 25px;
  width: 23px;
`;
