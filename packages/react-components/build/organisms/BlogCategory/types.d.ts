import { ReactNode } from "react";
import { IHorizontalNewsCard } from "~/molecules/HorizontalNewsCard";
import { PillProps } from "../ScrollingNewsFilter";
export declare type IBlogCategory = {
    title: string;
    pillProps: Array<PillProps>;
    dataBlogCard: Array<IBlogCard>;
    pillSelected?: Function;
    hrefTag?: string;
    queryTag?: string[];
};
export declare type IBlogCard = IHorizontalNewsCard & {
    description: ReactNode | string;
    mainImageNext?: ReactNode | string;
    hrefTag?: string;
};
