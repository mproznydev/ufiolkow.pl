import React, { useRef, useEffect } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import DescriptionSection from '../../atoms/DescriptionSection/DescriptionSection';
import GridImages from '../../molecules/GridImages/GridImages';
import { TitleDescriptionWrapper } from '../../atoms/TitleDescriptionWrapper/TitleDescriptionWrapper';
import TitleSection from '../../atoms/TitleSection/TitleSection';
import { lazyLoading } from '../../../assets/styles/animations';
import BqImage from '../../../../static/fewBlobsHoriz.svg';

const StyledSectionWrapper = styled(SectionWrapper)`
  position: relative;
  ::before {
    content: '';
    position: absolute;
    right: 0;
    top: 15%;
    width: 100%;
    height: 80%;
    background-image: url(${BqImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
    ${({ theme }) => theme.mq.desktop} {
      top: 20%;
    }
  }
`;

const Serve = React.forwardRef(({ data }, ref) => {
  const titleDescriptionRef = useRef(null);

  const getImageByNumber = (number) => {
    return getImage(data.zdjecia[number].localFile);
  };

  useEffect(() => {
    lazyLoading(titleDescriptionRef.current.children);
    lazyLoading(ref.current.children[1]);
  }, []);

  return (
    <StyledSectionWrapper isLeft isGrid ref={ref}>
      <TitleDescriptionWrapper ref={titleDescriptionRef}>
        <TitleSection isLeft>{data.tytul}</TitleSection>
        <DescriptionSection isLeft>
          {renderRichText(data.opis)}
        </DescriptionSection>
      </TitleDescriptionWrapper>
      <GridImages>
        <GatsbyImage
          image={getImageByNumber(0)}
          alt={data.zdjecia[0].title}
          className="GridImageWrapper"
        />
        <GatsbyImage
          image={getImageByNumber(2)}
          alt={data.zdjecia[1].title}
          className="GridImageWrapper"
        />
        <GatsbyImage
          image={getImageByNumber(1)}
          alt={data.zdjecia[2].title}
          className="GridImageWrapper"
        />
        <GatsbyImage
          image={getImageByNumber(3)}
          alt={data.zdjecia[3].title}
          className="GridImageWrapper"
        />
      </GridImages>
    </StyledSectionWrapper>
  );
});

export default Serve;
