import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/styles/theme';
import GlobalStyles from '../../assets/styles/GlobalStyles';

function MainTemplate({ children }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <>{children}</>
      </ThemeProvider>
    </>
  );
}

export default MainTemplate;
