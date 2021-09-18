import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import TitleSection from '../../atoms/TitleSection/TitleSection';
import DescriptionSection from '../../atoms/DescriptionSection/DescriptionSection';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import { TitleDescriptionWrapper } from '../../atoms/TitleDescriptionWrapper/TitleDescriptionWrapper';
import '../../../assets/styles/ImagesStyling.css';

const descriptionText =
  'Ale muszę wam wytłumaczyć, jak narodziła się ta błędna koncepcja denuncjacji przyjemności i chwalebnego bólu, a ja dam wam kompletną relację z systemu i objaśnię prawdziwe nauki wielkiego odkrywcy prawdy, mistrza-budowniczego ludzkiego szczęścia. Nikt nie odrzuca, nie lubi lub unika przyjemności samej w sobie, ponieważ jest to przyjemność, ale dlatego, że ci, którzy nie wiedzą, jak dążyć do przyjemności, racjonalnie napotykają konsekwencje, które są niezwykle bolesne. I znowu nie ma kogoś, kto kocha lub dąży albo pragnie osiągnąć ból sam z siebie, ponieważ jest to ból, ale czasami pojawiają się okoliczności, w których trud i ból mogą przynieść mu wielką przyjemność. Aby wziąć';

const titleText = 'O nas';

function About() {
  return (
    <SectionWrapper>
      <TitleDescriptionWrapper>
        <TitleSection text={titleText} />
        <DescriptionSection text={descriptionText} />
      </TitleDescriptionWrapper>
      <StaticImage
        src="../../../assets/images/boss.jpg"
        alt="image of boss"
        placeholder="none"
        className="SectionImage"
      />
    </SectionWrapper>
  );
}

export default About;
