import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
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

const Order = React.forwardRef((props, ref) => {
  const titleDescriptionRef = useRef(null);

  useEffect(() => {
    lazyLoading(titleDescriptionRef.current.children[0]);
    lazyLoading(titleDescriptionRef.current.children[1]);
    lazyLoading(ref.current.children[1]);
  }, []);

  return (
    <StyledSectionWrapper isGrid ref={ref}>
      <TitleDescriptionWrapper ref={titleDescriptionRef}>
        <TitleSection>Słodkości na zamówienie</TitleSection>
        <DescriptionSection>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
          impedit a, saepe cumque magni delectus mollitia, incidunt voluptatibus
          debitis, cum libero ipsa architecto dolorum sed itaque temporibus
          animi non officiis vitae ullam recusandae. Quam minima dolor,
          repudiandae deleniti autem a beatae magni numquam accusantium animi et
          amet aliquam quod cupiditate, molestiae corporis ea ex non esse
          quaerat hic pariatur temporibus!
        </DescriptionSection>
      </TitleDescriptionWrapper>
      <GridImages>
        <StaticImage
          src="../../../assets/images/photos/cake3.jpg"
          alt="image of boss"
          placeholder="none"
          className="GridImageWrapper"
        />
        <StaticImage
          src="../../../assets/images/photos/cake.jpg"
          alt="image of boss"
          placeholder="none"
          className="GridImageWrapper"
        />
        <StaticImage
          src="../../../assets/images/photos/cake2.jpg"
          alt="image of boss"
          placeholder="none"
          className="GridImageWrapper"
        />
        <StaticImage
          src="../../../assets/images/photos/cake5.jpg"
          alt="image of boss"
          placeholder="none"
          className="GridImageWrapper"
        />
      </GridImages>
    </StyledSectionWrapper>
  );
});

export default Order;
