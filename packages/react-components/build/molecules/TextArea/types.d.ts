/// <reference types="react" />
import { TextFieldProps } from '@mui/material/TextField';
export declare type ITextField = TextFieldProps & {
    icon?: React.ReactElement;
    iconPosEnd?: boolean;
    dataName?: Function;
    limitText: number;
    color?: string;
    width?: number | string;
    label?: string;
    error?: boolean;
    helperText?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    register?: Function;
    required?: boolean;
    name?: string;
    onFocus?: Function;
    focuslabel?: string;
};
