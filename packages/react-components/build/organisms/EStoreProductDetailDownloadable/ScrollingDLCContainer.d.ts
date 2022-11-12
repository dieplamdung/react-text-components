import { ReactNode } from 'react';
import { IDLCCard } from '~/molecules/DLCCard';
export declare type IScrollingDLCContainer = {
    title: string;
    listThumbnail: IDLCCard[];
    stepScroll?: number;
    alertShow?: string[];
    onClickBuyItem?: (idItem?: any) => void;
    titleSeeAll?: string;
    hrefSeeAll?: string;
    nextLink?: (href: string, child: ReactNode) => ReactNode;
};
declare const ScrollingDLCContainer: (props: IScrollingDLCContainer) => JSX.Element;
export default ScrollingDLCContainer;
