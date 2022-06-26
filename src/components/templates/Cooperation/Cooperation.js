import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import TitleSection from '../../atoms/TitleSection/TitleSection';
import DescriptionSection from '../../atoms/DescriptionSection/DescriptionSection';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import { TitleDescriptionWrapper } from '../../atoms/TitleDescriptionWrapper/TitleDescriptionWrapper';
import '../../../assets/styles/ImagesStyling.css';
import { lazyLoading } from '../../../assets/styles/animations';
// import BqImage from '../../../../static/fewBlobs3.svg';
import BqImage from '../../../../static/fewBlobsHoriz2.svg';

const StyledSectionWrapper = styled(SectionWrapper)`
  ::before {
    content: '';
    position: absolute;
    right: -200px;
    top: 10%;
    width: 100%;
    height: 80%;
    background-image: url(${BqImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
    ${({ theme }) => theme.mq.tablet} {
      top: 0;
      right: -30vw;
    }
    ${({ theme }) => theme.mq.desktop} {
      top: 15%;
      right: -2vw;
    }
  }
`;

const Cooperation = React.forwardRef(({ data }, ref) => {
  const titleDescriptionRef = useRef(null);

  const image = getImage(data.zdjecia[0].localFile);

  useEffect(() => {
    lazyLoading(titleDescriptionRef.current.children);
    lazyLoading(ref.current.children[1]);
  }, []);

  return (
    <StyledSectionWrapper isLeft ref={ref}>
      <TitleDescriptionWrapper ref={titleDescriptionRef}>
        <TitleSection isLeft>{data.tytul}</TitleSection>
        <DescriptionSection isLeft>
          {renderRichText(data.opis)}
        </DescriptionSection>
      </TitleDescriptionWrapper>
      <GatsbyImage
        image={image}
        alt={data.zdjecia[0].title}
        className="SectionImageWrapper"
      />
    </StyledSectionWrapper>
  );
});

export default Cooperation;
