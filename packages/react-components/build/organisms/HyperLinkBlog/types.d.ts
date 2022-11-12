import { ReactNode } from "react";
export declare type IHyperLink = {
    title: string;
    description: ReactNode | string;
    mainImage: string;
    mainImageNext: ReactNode | string;
    target: '_blank' | '_parent';
    link?: string;
};
