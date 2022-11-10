import React from 'react';
import { Container as MuiContainer, ContainerProps as MuiContainerProps } from '@mui/material';

// Import viewport specification
import {
  DESKTOP_MAX_WIDTH,
  SMALL_DESKTOP_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  MOBILE_MAX_WIDTH,
} from '~/utils/viewport/constants';

// Types
export interface ContainerProps extends MuiContainerProps { }

/**
 * Wrapper for the component to set max-width and others common style
 */
const Container = React.forwardRef((props: ContainerProps, ref: any) => {
  const { children, sx } = props;
  return (
    <MuiContainer
      ref={ref}
      {...props}
      sx={{
        maxWidth: {
          xl: DESKTOP_MAX_WIDTH,
          lg: SMALL_DESKTOP_MAX_WIDTH,
          md: TABLET_MAX_WIDTH,
          xs: MOBILE_MAX_WIDTH,
        },
        padding: '0 16px',
        ...(sx || {}),
      }}
    >
      {children}
    </MuiContainer>
  );
});

export default Container;
