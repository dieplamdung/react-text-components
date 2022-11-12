import { ITrailerThumbnail } from "../VideoPopupSlider";
declare type Tag = {
    title: string;
    color: string;
};
declare type Price = {
    title?: string;
    value?: string;
};
export declare type IHomepageMasthead = {
    listTags: Tag[];
    title: string;
    backgroundImage: string;
    description: string;
    price: Price;
    idVideo?: string;
    titleButtonBuy?: string;
    hrefButtonBuy?: string;
    titleButtonWatch?: string;
    listTrailer: ITrailerThumbnail[];
    locale?: string;
    videoType?: string;
    videoDirectly?: boolean;
};
export {};
