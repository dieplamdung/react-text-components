import { IDigitalDownloadCard } from "~/molecules/DigitalDownloadCard";
export declare type IScrollingFreeCollectiblesContainer = {
    title: string;
    description: string;
    classSection?: string;
    listThumbnail: IDigitalDownloadCard[];
    stepScroll?: number;
    isShowPopup?: boolean;
    id?: string;
};
