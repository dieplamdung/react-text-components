import { ReactNode } from 'react';
export declare type IGameShortDescription = {
    variant?: "horizontal" | "vertical";
    title: string;
    description: string;
    mainImage: string;
    id?: string;
    nextImage?: ReactNode;
};
