export declare type TemplateAddAddress = {
    firstName?: {
        title?: string;
        valueDefault?: string;
        messageEmpty?: string;
        messageErrorType?: string;
    };
    lastName?: {
        title?: string;
        valueDefault?: string;
        messageEmpty?: string;
        messageErrorType?: string;
    };
    address?: {
        title?: string;
        valueDefault?: string;
        messageEmpty?: string;
        messageErrorType?: string;
    };
    apartment?: {
        title?: string;
        valueDefault?: string;
        messageEmpty?: string;
        messageErrorType?: string;
    };
    town?: {
        title?: string;
        valueDefault?: string;
        messageEmpty?: string;
        messageErrorType?: string;
    };
    postalCode?: {
        title?: string;
        valueDefault?: string | number;
        messageEmpty?: string;
        messageErrorType?: string;
    };
    location?: {
        title?: string;
        valueDefault?: string;
        messageEmpty?: string;
        messageErrorType?: string;
    };
    countryNumber?: {
        valueDefault?: string;
    };
    phoneNumber?: {
        title?: string;
        valueDefault?: string | number;
        messageEmpty?: string;
        messageErrorType?: string;
    };
    company?: {
        title?: string;
        valueDefault?: string;
        messageEmpty?: string;
        messageErrorType?: string;
    };
};
export declare type TAddressItem = {
    id: any;
    isDefault?: boolean;
    titleDefault?: string;
    titleBtnSetDefault?: string;
    firstName?: string;
    lastName?: string;
    address?: string;
    apartment?: string;
    town?: string;
    postalCode?: number;
    location?: string;
    countryNumber?: string;
    phoneNumber?: number | string;
    company?: string;
    titleBtnEdit?: string;
    titleBtnRemove?: string;
    titleBtnSave?: string;
    helperText?: string;
    typeQuery?: string;
    InputLabelProps?: any;
    title?: string;
    templateAdd?: TemplateAddAddress;
    titleModalUpdate?: string;
};
export declare type IAddressesAccount = {
    title?: string;
    emptyAddress: {
        title?: string;
        description?: string;
        titleBtn?: string;
    };
    titleModalAdd?: string;
    titleModalUpdate?: string;
    titleBtnAddAddress: string;
    titleBtnSave?: string;
    listAddress: TAddressItem[];
    onRemoveAddress: (id: any, callback?: (v?: any) => void) => void;
    templateAdd: TemplateAddAddress;
    onUpdateAddress: (id: any, value: any, callback?: (v?: any) => void) => void;
    onAddAddress: (value: any, callback?: (v: any) => void) => void;
    countryCode: {
        label: string;
        value: string;
        country: string;
    }[];
    countryName: {
        label: string;
        value: string;
    }[];
};
