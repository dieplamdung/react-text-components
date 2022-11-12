import { IPopularCard } from "~/molecules/PopularCard";
export declare type IScrollingTwoGenreGames = {
    title: string;
    classSection?: string;
    viewMore?: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    listThumbnail: IPopularCard[];
    stepScroll?: number;
};
