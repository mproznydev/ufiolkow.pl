import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import DescriptionSection from '../../atoms/DescriptionSection/DescriptionSection';
import GridImages from '../../molecules/GridImages/GridImages';
import { TitleDescriptionWrapper } from '../../atoms/TitleDescriptionWrapper/TitleDescriptionWrapper';
import TitleSection from '../../atoms/TitleSection/TitleSection';
import { lazyLoading } from '../../../assets/styles/animations';
import BqImage from '../../../../static/fewBlobs2.svg';

const StyledSectionWrapper = styled(SectionWrapper)`
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 10%;
    width: 100%;
    height: 80%;
    background-image: url(${BqImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top left;
    ${({ theme }) => theme.mq.desktop} {
      top: 20%;
      left: 1%;
    }
  }
`;

const Order = React.forwardRef(({ data }, ref) => {
  const titleDescriptionRef = useRef(null);

  const image = getImage(data.zdjecia[0].localFile);

  useEffect(() => {
    lazyLoading(titleDescriptionRef.current.children[0]);
    lazyLoading(titleDescriptionRef.current.children[1]);
    lazyLoading(ref.current.children[1]);
  }, []);

  return (
    <StyledSectionWrapper isGrid ref={ref}>
      <TitleDescriptionWrapper ref={titleDescriptionRef}>
        <TitleSection>{data.tytul}</TitleSection>
        <DescriptionSection>{renderRichText(data.opis)}</DescriptionSection>
      </TitleDescriptionWrapper>
      <GridImages>
        <GatsbyImage
          image={image}
          alt={data.zdjecia[0].title}
          className="GridImageWrapper"
        />
        <GatsbyImage
          image={image}
          alt={data.zdjecia[1].title}
          className="GridImageWrapper"
        />
        <GatsbyImage
          image={image}
          alt={data.zdjecia[2].title}
          className="GridImageWrapper"
        />
        <GatsbyImage
          image={image}
          alt={data.zdjecia[3].title}
          className="GridImageWrapper"
        />
      </GridImages>
    </StyledSectionWrapper>
  );
});

export default Order;
