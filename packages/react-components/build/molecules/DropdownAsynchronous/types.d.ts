export interface IDropdown {
    title?: string;
    data: IData[];
    defaultValue?: string;
    required?: boolean;
    width?: number | string;
    resetInput?: any;
    register?: Function;
    name?: string;
    onBlur?: Function;
    onChange?: (value?: string) => void;
    helperText?: string;
    isMin?: boolean;
    isShowClose?: boolean;
    isCountryCode?: boolean;
    countryDefault?: string;
    onChangeCountry?: (value?: string) => void;
    inModal?: boolean;
}
export interface IData {
    label: string;
    value: string;
    country?: string;
}
