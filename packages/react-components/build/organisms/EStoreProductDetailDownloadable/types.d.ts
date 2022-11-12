import { IScrollingDLCContainer } from "./ScrollingDLCContainer";
export declare type IEStoreProductDetailDownloadable = {
    listItemDLC: IScrollingDLCContainer;
    platformList?: {
        titleIcon?: string;
        value?: string;
        id: any;
    }[];
    titleModalSelectPlatform?: string;
    titleButtonBuyNowDigital?: any;
    onClickBuy?: (value?: any) => void;
};
