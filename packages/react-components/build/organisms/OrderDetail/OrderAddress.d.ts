import React from 'react';
export declare type IOrderAddress = {
    title: string;
    titleShipping: string;
    contentShipping?: string;
    titleBilling: string;
    contentBilling?: string;
};
declare function OrderAddress(props: IOrderAddress): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof OrderAddress>;
export default _default;
