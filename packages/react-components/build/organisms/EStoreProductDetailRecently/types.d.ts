import { ReactNode } from "react";
import { IProductItem } from "../EStoreProduct/ProductItem";
export declare type IEStoreProductDetailRecently = {
    title: string;
    productList: IProductItem[];
    stepScroll?: number;
    titleSeeAll?: string;
    hrefSeeAll?: string;
    nextLink?: (href: string, child: ReactNode) => ReactNode;
};
