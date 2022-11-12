import { ReactNode } from "react";
export declare type IScreenshotThumbnail = {
    mainImage?: string;
    mainImageNext?: ReactNode | string;
    alt?: string;
    title?: string;
    description?: string;
    icon?: ReactNode;
    iconText?: {
        label?: string;
        href?: string;
    };
};
export declare type IImagePopupSlider = {
    screenshotItems?: IScreenshotThumbnail[];
    handleOpenPopup: Function;
    initialItem: number;
    trailerItems?: any;
};
