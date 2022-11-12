import { IMediaGalleryCard } from '~/molecules/MediaGalleryCard';
export declare type IScrollingMediaGalleryContainer = {
    title: string;
    classSection?: string;
    blank?: {
        image: string;
        title: string;
        description: string;
    };
    listThumbnail?: IMediaGalleryCard[];
    id?: string;
};
