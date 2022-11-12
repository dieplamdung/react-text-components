/// <reference types="react" />
export declare type ITextField = {
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
    type?: 'text' | 'password';
    ChangeHandler?: any;
    defaultCodeCountry?: any;
    onFocus?: (e?: any) => void;
    onBlur?: (e?: any) => void;
    defaultValue?: string;
};
