import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import DescriptionSection from '../../atoms/DescriptionSection/DescriptionSection';
import GridImages from '../../molecules/GridImages/GridImages';
import { TitleDescriptionWrapper } from '../../atoms/TitleDescriptionWrapper/TitleDescriptionWrapper';
import TitleSection from '../../atoms/TitleSection/TitleSection';

const descriptionText =
  'Ale muszę wam wytłumaczyć, jak narodziła się ta błędna koncepcja denuncjacji przyjemności i chwalebnego bólu, a ja dam wam kompletną relację z systemu i objaśnię prawdziwe nauki wielkiego odkrywcy prawdy, mistrza-budowniczego ludzkiego szczęśale dlatego, że ci, którzy nie wiedzą, jak dążyć do';

const titleText = 'Słodkości na zamówienie';

function Order() {
  return (
    <SectionWrapper isGrid>
      <TitleDescriptionWrapper>
        <TitleSection text={titleText} />
        <DescriptionSection text={descriptionText} />
      </TitleDescriptionWrapper>
      <GridImages>
        <StaticImage
          src="../../../assets/images/cake3.jpg"
          alt="image of boss"
          placeholder="none"
        />
        <StaticImage
          src="../../../assets/images/cake.jpg"
          alt="image of boss"
          placeholder="none"
        />
        <StaticImage
          src="../../../assets/images/cake2.jpg"
          alt="image of boss"
          placeholder="none"
        />
        <StaticImage
          src="../../../assets/images/cake5.jpg"
          alt="image of boss"
          placeholder="none"
        />
      </GridImages>
    </SectionWrapper>
  );
}

export default Order;
