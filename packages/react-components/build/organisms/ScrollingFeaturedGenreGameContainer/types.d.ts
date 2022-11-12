import { IPopularCard } from "~/molecules/PopularCard";
export declare type IScrollingFeaturedGenreGameContainer = {
    title: string;
    listPopularCard: IPopularCard[];
    viewMore?: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    description: string;
    ticker: string;
    classSection: string;
    stepScroll?: number;
};
