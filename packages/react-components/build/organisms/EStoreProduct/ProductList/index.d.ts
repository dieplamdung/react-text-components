import React from 'react';
import { IProductItem } from '../ProductItem';
declare type IIProductList = {
    productList: IProductItem[];
    onLoadMore: () => void;
    hadLoadMore: boolean;
};
declare function ProductList(props: IIProductList): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof ProductList>;
export default _default;
