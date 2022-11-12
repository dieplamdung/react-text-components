import React, { ReactNode } from 'react';
declare type IMoreGameListingCard = {
    mainImage: string;
    title: string;
    tags: string[];
    locale?: string;
    mainImageNext?: ReactNode | string;
    href?: string;
};
export declare const ConvertPlatformToIcon: (title: string) => any;
declare const _default: React.MemoExoticComponent<(props: IMoreGameListingCard) => JSX.Element>;
export default _default;
