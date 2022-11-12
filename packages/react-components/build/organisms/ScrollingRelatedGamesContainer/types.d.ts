import { IRelatedGameCard } from "~/molecules/RelatedGameCard";
export declare type IScrollingRelatedGamesContainer = {
    title: string;
    classSection?: string;
    viewMore?: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    listThumbnail: IRelatedGameCard[];
    stepScroll?: number;
    id?: string;
};
