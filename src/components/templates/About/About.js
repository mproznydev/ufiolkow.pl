import React, { useRef, useEffect } from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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

const About = React.forwardRef(({ data }, ref) => {
  const titleDescriptionRef = useRef(null);

  const image = getImage(data.zdjecia[0].localFile);
  useEffect(() => {
    lazyLoading(titleDescriptionRef.current.children);
    lazyLoading(ref.current.children[1]);
  }, []);

  return (
    <StyledSectionWrapper ref={ref}>
      <TitleDescriptionWrapper ref={titleDescriptionRef}>
        <TitleSection>{data.tytul}</TitleSection>
        <DescriptionSection>{renderRichText(data.opis)}</DescriptionSection>
      </TitleDescriptionWrapper>
      <GatsbyImage
        image={image}
        alt={data.zdjecia[0].title}
        className="SectionImageWrapper"
      />
    </StyledSectionWrapper>
  );
});

export default About;
