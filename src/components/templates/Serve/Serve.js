import React, { useRef, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
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

const Serve = React.forwardRef((props, ref) => {
  const titleDescriptionRef = useRef(null);

  useEffect(() => {
    lazyLoading(titleDescriptionRef.current.children);
    lazyLoading(ref.current.children[1]);
  }, []);

  return (
    <StyledSectionWrapper isLeft isGrid ref={ref}>
      <TitleDescriptionWrapper ref={titleDescriptionRef}>
        <TitleSection isLeft>Co serwujemy?</TitleSection>
        <DescriptionSection isLeft>
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius eligendi
          temporibus consectetur molestias perspiciatis illum in hic quos earum
          recusandae dolor voluptatibus inventore excepturi quibusdam corrupti
          porro magnam, vero, mollitia, veniam natus dignissimos aliquam. Quos,
          voluptates quaerat totam in error sunt id sit perferendis incidunt
          molestias maxime aperiam earum veritatis.
        </DescriptionSection>
      </TitleDescriptionWrapper>
      <GridImages>
        <StaticImage
          src="../../../assets/images/photos/icecream1.jpg"
          alt="image of boss"
          placeholder="none"
          className="GridImageWrapper"
        />
        <StaticImage
          src="../../../assets/images/photos/icecream2.jpg"
          alt="image of boss"
          placeholder="none"
          className="GridImageWrapper"
        />
        <StaticImage
          src="../../../assets/images/photos/icecream4.jpg"
          alt="image of boss"
          placeholder="none"
          className="GridImageWrapper"
        />
        <StaticImage
          src="../../../assets/images/photos/icecream3.jpg"
          alt="image of boss"
          placeholder="none"
          className="GridImageWrapper"
        />
      </GridImages>
    </StyledSectionWrapper>
  );
});

export default Serve;
