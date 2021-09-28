import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/styles/theme';
import GlobalStyles from '../../assets/styles/GlobalStyles';
import SEO from '../SEO';

function MainTemplate({ children }) {
  return (
    <>
      <SEO />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
    </>
  );
}

export default MainTemplate;
