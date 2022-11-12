/// <reference types="react" />
export interface IDropdown {
    title?: string;
    defaultValue?: string;
    disabled?: boolean;
    data: IData[];
    error?: boolean;
    helperText?: string;
    multiple?: boolean;
    width?: number | string;
    register?: Function;
    onBlur?: Function;
    required?: boolean;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    variant?: 'standard' | 'filled' | 'outlined';
    handleClickItem?: (e: string) => void;
    isScrollTop?: boolean;
}
export interface IData {
    label: string;
    value: string;
}
