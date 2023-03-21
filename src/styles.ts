// Import Third-Party Components
import { createGlobalStyle } from 'styled-components';

/**
 *  This module contains all the global style definationss
 */

export const globalColorsObject = {
  primaryColor: '#FFC93F',
};

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

    body {
        background: #222;
        color: #fff;
    }

    body, input {
      font-family: 'Roboto', sans-serif;
    }
`;
