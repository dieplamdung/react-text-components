import { ReactNode } from "react";
export declare type IQuantityCard = {
    mainImage: string;
    mainImageNext?: ReactNode;
    index?: number;
    title: string;
    edition?: string;
    linkHref?: string;
    originalPrice?: number;
    promoPrice?: number;
    freegift?: string;
    variant?: 'freegifts' | 'quantity';
    quantity?: number;
    onClickDelete?: Function;
    onSetQuantity?: Function;
};
