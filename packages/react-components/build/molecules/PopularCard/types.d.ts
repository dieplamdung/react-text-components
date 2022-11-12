import { ReactNode } from 'react';
import { ITagsProps } from '~/atoms/Tags';
export declare type IPopularCard = {
    mainImage?: string;
    mainImageNext?: string | ReactNode;
    linkHref?: string;
    title: string;
    tags: ITagsProps[];
    locale?: string;
};
