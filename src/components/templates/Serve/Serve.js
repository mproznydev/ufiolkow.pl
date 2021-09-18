import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import DescriptionSection from '../../atoms/DescriptionSection/DescriptionSection';
import GridImages from '../../molecules/GridImages/GridImages';
import { TitleDescriptionWrapper } from '../../atoms/TitleDescriptionWrapper/TitleDescriptionWrapper';
import TitleSection from '../../atoms/TitleSection/TitleSection';

const descriptionText =
  'Ale muszę wam wytłumaczyć, jak narodziła się ta błędna koncepcja denuncjacji przyjemności i chwalebnego bólu, a ja dam wam kompletną relację z systemu i objaśnię prawdziwe nauki wielkiego odkrywcy prawdy, mistrza-budowniczego ludzkiego szczęścia. Nikt nie odrzuca, nie lubi lub unika przyjemności samej w sobie, ponieważ jest to przyjemność, ale dlatego, że ci, którzy nie wiedzą, jak dążyć do';

const titleText = 'Co serwujemy?';

function Serve() {
  return (
    <SectionWrapper isLeft isGrid>
      <TitleDescriptionWrapper>
        <TitleSection text={titleText} isLeft />
        <DescriptionSection text={descriptionText} isLeft />
      </TitleDescriptionWrapper>
      <GridImages>
        <StaticImage
          src="../../../assets/images/icecream1.jpg"
          alt="image of boss"
          placeholder="none"
        />
        <StaticImage
          src="../../../assets/images/icecream2.jpg"
          alt="image of boss"
          placeholder="none"
        />
        <StaticImage
          src="../../../assets/images/icecream4.jpg"
          alt="image of boss"
          placeholder="none"
        />
        <StaticImage
          src="../../../assets/images/icecream3.jpg"
          alt="image of boss"
          placeholder="none"
        />
      </GridImages>
    </SectionWrapper>
  );
}

export default Serve;
