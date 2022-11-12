import { IFeaturedNewsCard } from "~/molecules/FeaturedNewsCard";
import { IPopularNewsCard } from '~/molecules/PopularNewsCard';
export declare type IExploreMoreContainer = {
    id?: string;
    title: string;
    classSection?: string;
    blank?: {
        image: string;
        'title-1'?: string;
        'title-2'?: string;
        'description-1'?: string;
        "description-2"?: string;
    };
    viewMore?: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    listTabs?: Array<{
        id: number;
        label: string;
    }>;
    listThumbnail?: Array<{
        id?: number;
        featuredNewsCard?: IFeaturedNewsCard;
        popularNewsCard?: IPopularNewsCard[];
        viewMore?: {
            title: string;
            href: string;
            target: '_blank' | '_parent';
        };
    }>;
};
