import { ReactNode } from 'react';
declare type PropsBtn = {
    title: string;
    href: string;
};
export declare type IContent404Page = {
    mainImage: string;
    mainImageNext?: string | ReactNode;
    titleCode?: string;
    titleTop?: string;
    titleBottom?: string;
    description?: string;
    listPropsBtn: PropsBtn[];
};
export {};
