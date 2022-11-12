import { ReactNode } from "react";
export declare type IMoreGameListingCard = {
    mainImage: string;
    title: string;
    tags: Array<Tags>;
    locale?: string;
    mainImageNext?: ReactNode | string;
    href?: string;
};
export declare type Tags = {
    color: string;
    title: string;
    disabled: boolean;
};
