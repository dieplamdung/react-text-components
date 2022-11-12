import { ReactNode } from "react";
export declare type ISearchByCategory = {
    title: string;
    listThumbnail: ICategory[];
    propsTending: {
        title: string;
        locale: string;
        listItems: ITextTrending[];
    };
};
export declare type ICategory = {
    title: string;
    mainImage: string;
    mainImageNext: ReactNode | string;
    icon: string;
    href: string;
};
export declare type ITextTrending = {
    title: string;
    href: string;
};
