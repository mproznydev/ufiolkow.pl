import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './typography.css';

const GlobalStyle = createGlobalStyle`

    body, p, ul, h1, h2, h3, button, textarea {
        padding:0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        
    }

    *, *::before, *::after{
        box-sizing: border-box;
    }
`;

function GlobalStyles() {
  return <GlobalStyle />;
}

export default GlobalStyles;
