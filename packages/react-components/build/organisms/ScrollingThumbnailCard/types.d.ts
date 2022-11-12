import { IThumbnailNewsCard } from "~/molecules/ThumbnailNewsCard";
export declare type IScrollingThumbnailCard = {
    title: string;
    classSection?: string;
    locale?: string;
    viewMore?: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    listThumbnail: IThumbnailNewsCard[];
    stepScroll?: number;
    isReverse?: boolean;
};
