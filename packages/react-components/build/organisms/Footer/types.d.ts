import { ReactNode } from 'react';
import { IDropdown } from '~/molecules/Dropdown';
import { ButtonHandler, ButtonProps } from '../../atoms/Button';
export declare type ISubscribe = {
    backgroundColor?: string;
    title: string;
    buttonProps?: ButtonProps & ButtonHandler<ISubscribe>;
    handleOpenModal?: Function;
};
export declare type IFooter = {
    srcLogo: string;
    listMenu: IColFooter[];
    dropdownProps: IDropdown;
    locale?: string;
    dropdownPropsLanguages?: IDropdown;
    rainbows?: Array<string>;
    listPolicy: {
        copyRight: ReactNode | string;
        list: IItemChildCol[];
    };
    modalConfirm: IModalConfirm;
    handleRedirectLanguage: Function;
    handleRedirectLocale?: Function;
};
export declare type IColFooter = {
    title: string;
    cols: IItemChildCol[];
};
export declare type IItemChildCol = {
    title: string;
    href: string;
    imgSrc?: string;
};
export declare type IModalConfirm = {
    isOpen?: boolean;
    titleFirst?: string;
    titleAfter?: string;
    descriptionFirst?: string;
    descriptionAfter?: string;
    defaultValueLocale?: string;
    valueRedirect?: string;
    buttonProps: ButtonProps & ButtonHandler<ISubscribe>[];
    handleCloseModalConfirm?: Function;
    handleRedirectLanguage?: Function;
    handleCloseModalConfirmRedirect?: Function;
    locale: string;
};
