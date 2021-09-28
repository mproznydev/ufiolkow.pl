import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 1rem;
  display: flex;
  position: relative;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mq.tablet} {
  }

  ${({ theme }) => theme.mq.desktop} {
    gap: ${({ isGrid }) => (isGrid ? '2rem' : '0')};
    align-items: start;
    justify-content: space-between;
    padding: 5rem 6vw;
    flex-direction: ${({ isLeft }) => (isLeft ? 'row-reverse' : 'row')};
  }
  ${({ theme }) => theme.mq.large} {
    padding: 5rem 10vw;
  }
`;

const SectionWrapper = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <Wrapper {...props} ref={ref} className={className}>
        <>{children}</>
      </Wrapper>
    );
  }
);

export default SectionWrapper;
