import React from 'react';
import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    p1: true;
    p2: true;
    p3: true;
    p4: true;
    p5: true;
    p6: true;
    p7: true;
    p8: true;
    p9: true;
    l1: true;
    l2: true;
    h6_exploremore: true;
    h2_exploremore: true;
  }
}

export interface TypographyProps extends MuiTypographyProps {
  component?: string;
}

/**
 * Primary UI component for user interaction
 */
const Typography = React.forwardRef<HTMLInputElement, React.PropsWithChildren<TypographyProps>>(
  (props, ref) => {
    return <MuiTypography {...props} ref={ref} />;
  },
);

export default Typography;
