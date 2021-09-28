import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import axios from 'axios';
import TitleSection from '../../atoms/TitleSection/TitleSection';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import { TitleDescriptionWrapper } from '../../atoms/TitleDescriptionWrapper/TitleDescriptionWrapper';
import '../../../assets/styles/imagesStyling.css';
import Button from '../../atoms/Button/Button';
import { lazyLoading } from '../../../assets/styles/animations';
import {
  StyledPhoneIcon,
  StyledEmailIcon,
  StyledHomeIcon,
  StyledFbIcon,
  StyledInstaIcon,
  StyledDescriptionSection,
  FormWrapper,
  StyledSubtitle,
  Input,
} from './Contact.style';
import BqImage from '../../../../static/fewBlobs1.svg';

const StyledSectionWrapper = styled(SectionWrapper)`
  ::before {
    content: '';
    position: absolute;
    left: -1%;
    top: 0;
    width: 100%;
    height: 80%;
    background-image: url(${BqImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
    ${({ theme }) => theme.mq.tablet} {
      top: 0;
    }
    ${({ theme }) => theme.mq.desktop} {
      top: 0;
    }
  }
`;

const Contact = React.forwardRef((props, ref) => {
  const titleDescriptionRef = useRef(null);

  useEffect(() => {
    lazyLoading(titleDescriptionRef.current.children);
    lazyLoading(ref.current.children[1]);
  }, []);

  return (
    <StyledSectionWrapper isLeft ref={ref}>
      <TitleDescriptionWrapper ref={titleDescriptionRef}>
        <TitleSection isLeft>Kontakt</TitleSection>
        <StyledDescriptionSection as="div">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            recusandae eveniet quaerat error optio. Maiores ab vel nisi,
            incidunt eaque expedita deleniti cupiditate quam, dolorem voluptates
            iusto nobis, eum cum rerum. Deserunt recusandae magnam harum eum
            eligendi. Dignissimos, beatae quod?
          </p>
          <ul>
            <li>
              <a href="tel:602178613">
                <StyledPhoneIcon />
                <p>do właściela +48 692 243 342</p>
              </a>
            </li>
            <li>
              <a href="tel:602178613">
                <StyledPhoneIcon />
                <p>do lodziarni +48 622 244 342</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.pl/maps/dir//Lodziarnia+U+Fio%C5%82k%C3%B3w+Kawiarnia,+Gliwicka+27%2F29,+41-902+Bytom/@50.4089754,18.9945165,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4716d32f6fe48955:0xe4b2ed1c5e47e6c2!2m2!1d18.9210191!2d50.3469171!3e0"
                target="_blank"
                rel="noreferrer"
              >
                <StyledHomeIcon />
                <p>gliwicka 27/29, 41-902 Bytom</p>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/lodziarniaufiolkowkawiarnia/"
                target="_blank"
                rel="noreferrer"
              >
                <StyledFbIcon />
                /lodziarniaufiolkowkawiarnia
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lodziarnia_u_fiolkow/"
                target="_blank"
                rel="noreferrer"
              >
                <StyledInstaIcon />
                /lodziarnia_u_fiolkow
              </a>
            </li>
            <li>
              <a href="mailto:ufiolkow@gmail.com">
                <StyledEmailIcon />
                /ufiolkow@gmial.com
              </a>
            </li>
          </ul>
        </StyledDescriptionSection>
      </TitleDescriptionWrapper>
      <Formik
        initialValues={{ email: '', message: '' }}
        onSubmit={(values, { resetForm }) => {
          axios.post('https://formspree.io/f/xvoddroz', {
            email: values.email,
            text: values.message,
          });
          resetForm();
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <StyledSubtitle>Napisz do nas</StyledSubtitle>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name="email"
              type="email"
              placeholder="twój email"
              autoComplete="off"
              required
            />
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              name="message"
              as="textarea"
              placeholder="wiadomość"
              height="200px"
              required
            />
            <Button type="submit">Wyślij</Button>
          </FormWrapper>
        )}
      </Formik>
    </StyledSectionWrapper>
  );
});

export default Contact;
