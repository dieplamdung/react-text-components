import { ReactNode } from "react";
export declare type IExploreMore = {
    title: string;
    classSection?: string;
    viewMore?: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    isBlog?: boolean;
    listThumbnail: IThumbnailNewsCardExplore[];
};
export declare type IThumbnailNewsCardExplore = {
    mainImageNext?: ReactNode | string;
    mainImage: string;
    title: string;
    tags: Array<{
        title: string;
        color?: string;
    }>;
    linkHref: string;
    publicDate: string;
    hrefTag?: string;
    isBlog?: boolean;
};
