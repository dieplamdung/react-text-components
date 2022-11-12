import { ReactNode } from "react";
export declare type ITrailerThumbnail = {
    trailerUrl: string;
    trailerTitle: string;
    thumbnailImg: string;
    thumbnailImgAlt?: string;
    videoType: string;
    nextImage?: ReactNode | string;
};
export declare type IGameDetailMastheadProps = {
    mastheadTitle: string;
    mastheadBgAsset?: string;
    mastheadBgEmbed?: string;
    videoType: string;
    mastheadDesc: string;
    platforms: string[] | ReactNode[];
    ipPublisher: string;
    fromPricing: string;
    price: string;
    currency: string;
    ctaButtonText?: string;
    trailers: ITrailerThumbnail[];
    hideNavibar?: any;
    externalLink?: string;
    target?: string;
    locale?: string;
    mainImageNext?: ReactNode | string;
    videoDirectly?: boolean;
};
