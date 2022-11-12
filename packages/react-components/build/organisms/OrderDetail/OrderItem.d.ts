import React, { ReactNode } from 'react';
export declare type IOrderItem = {
    nextImage?: ReactNode;
    hrefImg?: string;
    alt?: string;
    titleGame: string;
    listPlatform?: string[];
    gift?: string;
    qty?: string;
    amount?: string;
    priceOld?: string;
    price?: string;
};
declare function OrderItem(props: IOrderItem): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof OrderItem>;
export default _default;
