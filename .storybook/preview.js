import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';

import customTheme from '../packages/react-components/src/theme/_theme';

const customViewports = {
  xSMobiles: {
    name: 'XSMobiles',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  mobiles: {
    name: 'Mobiles',
    styles: {
      width: '375px',
      height: '640px',
    },
  },
  tablets: {
    name: 'Tablets',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  largeDevices: {
    name: 'Large Devices (desktops / tablets)',
    styles: {
      width: '1024px',
      height: '700px',
    },
  },
  desktops: {
    name: 'Desktops',
    styles: {
      width: '1440px',
      height: '1024px',
    },
  },
};

export const decorators = [
  (Story) => (
    <StyledEngineProvider injectFirst>
      <EmotionThemeProvider theme={customTheme}>
        <ThemeProvider theme={customTheme}>
          <Box padding="16px 0">
            <CssBaseline />
            <Story />
          </Box>
        </ThemeProvider>
      </EmotionThemeProvider>
    </StyledEngineProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms'],
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#FFFFFF',
      },
      {
        name: 'dark',
        value: '#090910',
      },
    ],
  },
  viewport: {
    viewports: customViewports,
  },
};
