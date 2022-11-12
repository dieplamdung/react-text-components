import { ReactNode } from "react";
export declare type ITrailerThumbnail = {
    nextImage?: ReactNode;
    trailerUrl: string;
    trailerTitle?: string;
    trailerImg?: string;
    trailerImgAlt?: string;
    trailerDescription?: string;
    hrefShare?: string;
    videoType?: string;
    imgSecond?: string;
};
export declare type IVideoPopupSlider = {
    trailerItems: ITrailerThumbnail[] | undefined;
    handleOpenPopup: Function;
    initialItem: number;
};
