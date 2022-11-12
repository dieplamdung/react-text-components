import { ReactNode } from "react";
import { IHorizontalNewsCard } from "~/molecules/HorizontalNewsCard";
import { IMoreGameListingCard } from "~/molecules/MoreGameListingCard";
import { IScrollingGoodToKnow } from "../ScrollingGoodToKnow";
export declare type ISearchResult = {
    listTabs: ITab[];
    onClose?: Function;
    propsInput: {
        placeholder: string;
    };
    textResult?: string;
    propsGame?: IPropsGame;
    propsStore?: IPropsGame;
    propsBlog?: IScrollingGoodToKnow;
    propsNewEvent?: IPropsNewsEvents;
};
export declare type ISearchResultFilterPill = {
    listTabs: ITab[];
    handleGetTabActive?: Function;
};
export declare type IPropsGame = {
    title: string;
    numberShow?: number;
    viewMore: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    listThumbnail: IMoreGameListingCard[];
};
export declare type IPropsNewsEvents = {
    title: string;
    numberShow?: number;
    mainImageNextProps?: ReactNode | string;
    clickViewMore?: Function;
    nextImage?: (src: string, width?: string | number, height?: string | number, alt?: string) => JSX.Element;
    viewMore: {
        title: string;
        href: string;
        target: '_blank' | '_parent';
    };
    listThumbnail: IHorizontalNewsCard[];
};
export declare type ISearchResultGame = {
    propsGame: IPropsGame;
    clickViewMore?: Function;
};
declare type ITab = {
    id: number;
    label: string;
    href: string;
    value: string;
    disable?: boolean;
};
export declare type ISearchResultStore = {
    propsStore: IPropsGame;
};
export declare type ISearchResultBlog = IScrollingGoodToKnow & {
    numberShow?: number;
    clickViewMore?: Function;
};
export {};
