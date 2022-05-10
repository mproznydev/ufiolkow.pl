import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
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

const Cooperation = React.forwardRef((props, ref) => {
  const titleDescriptionRef = useRef(null);
  useEffect(() => {
    lazyLoading(titleDescriptionRef.current.children);
    lazyLoading(ref.current.children[1]);
  }, []);

  return (
    <StyledSectionWrapper isLeft ref={ref}>
      <TitleDescriptionWrapper ref={titleDescriptionRef}>
        <TitleSection isLeft>Współpraca</TitleSection>
        <DescriptionSection isLeft>
          {' '}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum qui
          accusantium, error ab fugiat provident dolorum iure repudiandae ut!
          Tempore nihil in soluta. Impedit adipisci temporibus facilis unde
          deserunt perspiciatis quasi tempora ipsa aliquam iusto eveniet ducimus
          recusandae laudantium fugiat minima labore, qui vel soluta excepturi
          aspernatur nesciunt. Assumenda, quo!
        </DescriptionSection>
      </TitleDescriptionWrapper>
      <StaticImage
        src="../../../assets/images/photos/cooperation.jpg"
        alt="image of boss"
        placeholder="none"
        className="SectionImageWrapper"
      />
    </StyledSectionWrapper>
  );
});

export default Cooperation;
