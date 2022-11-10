/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import CssBaseline from '@mui/material/CssBaseline';

import customTheme from '../packages/react-components/src/theme';
import * as customQueries from './custom-queries';

const AllTheProviders = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <EmotionThemeProvider theme={customTheme}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </EmotionThemeProvider>
    </StyledEngineProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, {
    wrapper: AllTheProviders,
    queries: { ...customQueries },
    ...options,
  });

export * from '@testing-library/react';
export { customRender as render };
