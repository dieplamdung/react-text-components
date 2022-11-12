import { MouseEventHandler, ReactNode } from 'react';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { SxProps } from '@mui/system';

// Custom theme
import theme from '../../theme';

export interface ButtonDisabledVariantStyle {
  getVariant(): MuiButtonProps['variant'] | null | string;
  getSxStyle(): SxProps<typeof theme>;
}

export interface ButtonProps extends MuiButtonProps {
  label?: string | ReactNode;
  externalLink?: string;
  target?: string;
  variant?: any;
}

export interface Handler<P, F> {
  (event: MouseEventHandler<HTMLButtonElement> | undefined, props: P, formData?: F): Promise<any>;
}

export type ButtonHandler<P, F = {}> = {
  handler?: Handler<P, F>;
};
