import { ReactNode } from 'react';
declare type Image = {
    href: string;
    alt?: string;
    nextImg?: ReactNode;
};
export declare type IComplexKeyFeatureCard = {
    titleMobile: string;
    titleContent: string;
    descriptionTop?: string;
    descriptionBottom?: string;
    imgCenter?: Image;
    imgLeftTop?: Image;
    imgLeftCenter1?: Image;
    imgLeftCenter2?: Image;
    imgLeftBottom?: Image;
    imgRightTop1?: Image;
    imgRightTop2?: Image;
    imgRightCenter?: Image;
    imgRightBottom?: Image;
};
export {};
