import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import TitleSection from '../../atoms/TitleSection/TitleSection';
import DescriptionSection from '../../atoms/DescriptionSection/DescriptionSection';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import { TitleDescriptionWrapper } from '../../atoms/TitleDescriptionWrapper/TitleDescriptionWrapper';
import '../../../assets/styles/imagesStyling.css';
import { lazyLoading } from '../../../assets/styles/animations';
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
    background-position: top left;
    ${({ theme }) => theme.mq.tablet} {
      top: 0;
    }
    ${({ theme }) => theme.mq.desktop} {
      top: 0;
    }
  }
`;

const About = React.forwardRef((props, ref) => {
  const titleDescriptionRef = useRef(null);
  console.log(props);
  useEffect(() => {
    lazyLoading(titleDescriptionRef.current.children);
    lazyLoading(ref.current.children[1]);
  }, []);

  return (
    <StyledSectionWrapper ref={ref}>
      <TitleDescriptionWrapper ref={titleDescriptionRef}>
        <TitleSection>O nas</TitleSection>
        <DescriptionSection>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          doloribus, neque harum quae mollitia, nobis eum id ratione dolore
          sequi ullam voluptas eius optio illo dignissimos impedit tenetur, odio
          corporis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus id tempore ex eos repellendus error laudantium incidunt.
          Eaque, dignissimos odit!
        </DescriptionSection>
      </TitleDescriptionWrapper>
      <StaticImage
        src="../../../assets/images/photos/aboutPhoto.jpg"
        alt="image of boss"
        placeholder="none"
        className="SectionImageWrapper"
      />
    </StyledSectionWrapper>
  );
});

export default About;
