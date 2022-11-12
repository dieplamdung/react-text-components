import { SxProps } from '@mui/material';
import { CustomThemeType } from '../../theme';
export declare type IPopup = {
    theme?: string;
    maxWidth?: string;
    sxPopup?: SxProps<CustomThemeType>;
    ref?: any;
    isOpen?: boolean;
    isClosed?: Function;
    isHideIcon?: boolean;
    disableClickBackdrop?: boolean;
};
