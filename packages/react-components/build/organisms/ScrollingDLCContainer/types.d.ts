import { IDLCCard } from "~/molecules/DLCCard";
export declare type IScrollingDLCContainer = {
    title: string;
    classSection?: string;
    listThumbnail: IDLCCard[];
    stepScroll?: number;
    alertShow?: string[];
    id?: string;
};
