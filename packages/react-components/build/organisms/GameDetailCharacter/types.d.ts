import { ReactNode } from "react";
export declare type ICharacterDetail = {
    thumbnailImg?: string;
    mainImageNext?: string | ReactNode;
    thumbnailAlt?: string;
    name: string;
    power?: string;
    serviceRecord?: ReactNode | string;
    quote?: string;
    history?: ReactNode | string;
};
export declare type IGameDetailCharacterProps = {
    title: string;
    characterDetailList: ICharacterDetail[];
    id?: string;
};
