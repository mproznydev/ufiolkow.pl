import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import TitleSection from '../../atoms/TitleSection/TitleSection';
import DescriptionSection from '../../atoms/DescriptionSection/DescriptionSection';
import SectionWrapper from '../../atoms/SectionWrapper/SectionWrapper';
import { TitleDescriptionWrapper } from '../../atoms/TitleDescriptionWrapper/TitleDescriptionWrapper';
import '../../../assets/styles/mapStyling.css';
import { lazyLoading } from '../../../assets/styles/animations';
import BqImage from '../../../../static/fewBlobs1.svg';

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
    ${({ theme }) => theme.mq.tablet} {
      top: 15%;
      left: 0;
    }
    ${({ theme }) => theme.mq.desktop} {
      top: 19%;
      left: -5vw;
    }
  }
`;

const MapWrapper = styled.div`
  width: calc(100% - 2rem);
  max-width: 450px;
  height: 400px;
  margin-top: 1rem;
  border-radius: ${({ theme }) => theme.radius};
  overflow: hidden;
  box-shadow: 5px 5px 6px rgb(0 0 0 / 0.3);
  position: relative;
  z-index: 500;

  ${({ theme }) => theme.mq.desktop} {
    height: 450px;
  }
`;

const WhereFind = React.forwardRef(({ data }, ref) => {
  const isBrowser = typeof window !== 'undefined';
  const titleDescriptionRef = useRef(null);

  useEffect(() => {
    lazyLoading(titleDescriptionRef.current.children);
    lazyLoading(ref.current.children[1]);
  }, []);

  return (
    <StyledSectionWrapper ref={ref}>
      <TitleDescriptionWrapper ref={titleDescriptionRef}>
        <TitleSection>{data.tytul}</TitleSection>
        <DescriptionSection>
          {renderRichText(data.opis)}
          {/* <a href="https://www.google.pl/maps/dir//Lodziarnia+U+Fio%C5%82k%C3%B3w+Kawiarnia,+Gliwicka+27%2F29,+41-902+Bytom/@50.4089754,18.9945165,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x4716d32f6fe48955:0xe4b2ed1c5e47e6c2!2m2!1d18.9210191!2d50.3469171!3e0" /> */}
        </DescriptionSection>
      </TitleDescriptionWrapper>
      {isBrowser ? (
        <MapWrapper>
          <MapContainer
            center={[50.347069, 18.920927]}
            zoom={18}
            scrollWheelZoom={false}
            className="MapStyling"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[50.34696558475493, 18.92099801961394]}>
              <Popup>Tutaj jesteśmy!</Popup>
            </Marker>
          </MapContainer>
        </MapWrapper>
      ) : (
        ''
      )}
    </StyledSectionWrapper>
  );
});

export default WhereFind;
