import { IMediaGalleryCard } from '~/molecules/MediaGalleryCard';
export declare type IMediaGalleryContainer = {
    title: string;
    classSection?: string;
    seeMoreLabel?: string;
    seeLessLabel?: string;
    perPage?: number;
    blank?: {
        image: string;
        title: string;
        description: string;
    };
    viewMore?: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    listTabs: Array<{
        id: number;
        label: string;
    }>;
    listThumbnail?: Array<{
        id: number;
        mediaGalleryCard: IMediaGalleryCard[];
    }>;
    id?: string;
};
