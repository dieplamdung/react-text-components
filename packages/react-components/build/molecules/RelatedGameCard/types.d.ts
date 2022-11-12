import { ReactNode } from "react";
export declare type IRelatedGameCard = {
    mainImage: string;
    title: ReactNode | string;
    mainImageNext?: ReactNode | string;
    tags: Array<Tags>;
    tagBg?: boolean;
    description?: ReactNode | string;
    date?: string;
    href?: string;
    hrefTag?: string;
    isBlog?: boolean;
    isIcon?: boolean;
};
export declare type Tags = {
    color: string;
    title: string;
    disabled: boolean;
};
