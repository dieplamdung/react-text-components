import { ReactNode } from "react";
export declare type IPopularNewsCard = {
    mainImage?: string;
    mainImageNext?: ReactNode;
    title: string | ReactNode;
    linkHref: string;
    tags: Array<{
        title: string;
        color?: string;
        disabled?: boolean;
    }>;
    date: string;
    hrefTag?: string;
};
