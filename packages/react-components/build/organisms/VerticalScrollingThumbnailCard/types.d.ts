import { IHorizontalNewsCard } from "~/molecules/HorizontalNewsCard";
export declare type IVerticalScrollingThumbnailCard = {
    title: string;
    listThumbnail: IHorizontalNewsCard[];
    locale: string;
    handlerScroll: Function;
    dataQueryTags?: string[];
    setDataFilterSelected?: Function | null;
    dataQueryGame?: string;
    nextImage?: (src: string, width?: string | number, height?: string | number, alt?: string) => JSX.Element;
};
