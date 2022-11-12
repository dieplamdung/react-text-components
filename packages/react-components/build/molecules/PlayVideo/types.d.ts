import { ReactNode } from "react";
export declare type IPlayVideo = {
    idVideo?: string;
    title?: string;
    imgUrl?: string;
    alt?: string;
    stop?: boolean;
    className?: string;
    nextImage?: ReactNode;
    disable?: boolean;
    dragging?: boolean;
    clickOnPlaying?: Function;
    index?: number;
    handleItemOnClick?: Function;
    selectedTrailer?: number;
    typeVideo?: string;
    imageSecond?: string;
    indexBeforeChange: number;
};
