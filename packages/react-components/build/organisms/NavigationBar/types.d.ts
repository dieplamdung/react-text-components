import { ReactNode } from "react";
import { ILocationSelectionBannerProps } from "../LocationSelectionBanner";
import { ISearchProps } from "../Search";
import { LinkHrefResultItem } from "../Search/ResultItem";
export declare type INavigationBar = {
    theme: 'dark' | 'light' | 'transparent';
    logo: string;
    menuProps: MenuProps[];
    iconProps?: IconProps[];
    rainbows?: Array<string>;
    notify?: boolean;
    buttonProps?: any[];
    listLocation?: Location[];
    logged?: boolean;
    handleCloseBannerRevamp?: () => void;
    handleRedirectLanguage?: (v: string) => void;
    infoUser?: {
        avatarUrl: string;
        name: string;
        details: string;
        orders: string;
        address: string;
        account: string;
        logout: string;
    };
    languages?: IDropDown[];
    languagesDefault?: string;
    signInOut?: IDropDown[];
    locationPrompt: ILocationSelectionBannerProps;
    locale?: string;
    propsSearch?: ISearchProps;
    onSearch?: (v: string) => LinkHrefResultItem[];
    handleShowLayoutSearch?: () => Function;
    estore?: boolean;
};
declare type IDropDown = {
    href: string;
    label: string;
    link?: string;
};
export declare type INavigationBarDropDown = {
    data: IDropDown[];
    languagesDefault?: string;
};
export declare type IconProps = {
    id: number;
    name: string;
    href: string;
};
export declare type MenuProps = {
    id: number;
    link: string;
    label: string;
    subMenu?: ISubMenuProps[];
    ourPicks?: {
        title: string;
        items: ISubMenuItemProps[];
    };
    seeAll?: {
        title: string;
        href: string;
        titleMobile?: string;
    };
};
export declare type ISubMenuProps = {
    title: string;
    items: ISubMenuItemProps[];
};
declare type Location = {
    label: string;
    value: string;
    link?: string;
};
export declare type ISubMenuItemProps = {
    title: string;
    href: string;
    imageUrl?: string;
    mainImageNext?: ReactNode | string;
};
export {};
