import styled from 'styled-components';

export const TitleDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-top: 0.85rem;
    margin-bottom: 0.65rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    align-self: start;
    max-width: 80%;
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 50%;
  }
`;

export default TitleDescriptionWrapper;
