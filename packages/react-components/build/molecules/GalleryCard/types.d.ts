import { ReactNode } from 'react';
import { ITagsProps } from '~/atoms/Tags';
export declare type IGalleryCard = {
    img?: string;
    nextImage?: ReactNode;
    alt?: string;
    tags?: ITagsProps | null;
    description?: string;
    href?: string;
    hrefShare?: string;
    play?: boolean;
    aspectRatio?: string;
    width?: number;
    color?: string;
    icon?: ReactNode;
    videoUrl?: string;
    iconText?: {
        label?: string;
        href?: string;
    };
};
