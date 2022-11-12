import React from 'react';
export declare type IOrderPayment = {
    title: string;
    titlePayment: string;
    value: string;
    titleIcon?: string;
};
declare function OrderPayment(props: IOrderPayment): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof OrderPayment>;
export default _default;
