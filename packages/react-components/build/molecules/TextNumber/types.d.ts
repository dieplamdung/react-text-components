/// <reference types="react" />
export declare type ITextNumber = {
    icon?: React.ReactElement;
    iconPosEnd?: boolean;
    handleBlur?: Function;
    label: string;
    error?: boolean;
    disabled?: boolean;
    success?: boolean;
    helperText?: string;
    hiddenLabel?: boolean;
    width?: number | string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    InputLabelProps?: any;
    defaultValue?: string | number;
};
