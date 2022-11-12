import { IRelatedGameCard } from "~/molecules/RelatedGameCard";
export declare type IScrollingGoodToKnow = {
    title: string;
    classSection?: string;
    isBlog?: boolean;
    viewMore?: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    listThumbnail: IRelatedGameCard[];
    stepScroll?: number;
    numberShow?: number;
};
