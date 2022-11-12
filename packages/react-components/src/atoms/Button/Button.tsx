/** *
 * BUTTON
 *  >> types
 *  >> children
 *    >> text
 */

// import modules
import React from 'react';
import MuiButton from '@mui/material/Button';

// import children
import { ButtonDisabledVariantStyleFactory } from './children';

// types
import { ButtonProps } from './types';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    primaryDark: true;
    secondaryDark: true;
    tertiary: true;
    secondaryBlack: true;
  }
}

/**
 * @param props this props extend from MuiButtonProps and addition variants
 * @returns Button component with children as text
 */
// Render UI
const Button = (props: ButtonProps) => {
  const { disabled, children, externalLink, label, ...rest } = props;
  const { variant } = rest;
  const cls = ButtonDisabledVariantStyleFactory.create(disabled, variant);

  return (
    <MuiButton sx={{ ...cls.getSxStyle() }} disabled={disabled} {...rest} href={externalLink || ''}>
      {/* Text */}
      {label ?? children}
    </MuiButton>
  );
};

export default Button;
