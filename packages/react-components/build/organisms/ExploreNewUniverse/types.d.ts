import { ReactNode } from 'react';
import { IPillsProps } from '~/atoms/Pills';
import { PropsExploreCard } from './ExploreCard';
export declare type ListBrand = {
    brand?: string;
    nextImage?: ReactNode;
    videoId?: string;
    image?: string;
    listCard?: PropsExploreCard[];
    videoDirectly?: boolean;
};
export declare type IExploreNewUniverse = {
    title?: string;
    image: string;
    listFilter: IPillsProps[];
    listBrand: ListBrand[];
    videoDirectly?: boolean;
};
