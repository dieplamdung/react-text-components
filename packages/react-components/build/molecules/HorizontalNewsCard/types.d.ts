import { ReactNode } from "react";
export declare type IHorizontalNewsCard = {
    mainImage?: string;
    title: string;
    tags: Array<{
        title: string;
        color?: string;
    }>;
    date: string;
    linkHref?: string;
    nextImage?: (src: string, width?: string | number, height?: string | number, alt?: string) => ReactNode;
    hrefTag?: string;
    mainImageNext?: ReactNode | string;
};
