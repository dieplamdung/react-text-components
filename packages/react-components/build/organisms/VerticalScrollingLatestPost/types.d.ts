import { IFeaturedNewsCard } from "~/molecules/FeaturedNewsCard";
export declare type IVerticalScrollingLatestPost = {
    title: string;
    listThumbnail: IFeaturedNewsCard[];
    dataQueryTags?: string[];
    locale: string;
    handlerScroll: Function;
    mainImageNextProps?: any;
    nextImage?: (src: string, width?: string | number, height?: string | number, alt?: string) => JSX.Element;
    getNumberValue?: Function;
};
