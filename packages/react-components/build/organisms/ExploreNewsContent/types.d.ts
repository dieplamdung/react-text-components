import { IFeaturedNewsCard } from "~/molecules/FeaturedNewsCard";
export declare type IExploreNewsContent = {
    title: string;
    classSection?: string;
    viewMore?: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    listThumbnail?: IFeaturedNewsCard[];
};
