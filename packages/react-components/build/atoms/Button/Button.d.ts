/** *
 * BUTTON
 *  >> types
 *  >> children
 *    >> text
 */
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
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
