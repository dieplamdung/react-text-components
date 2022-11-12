import { ReactNode } from "react";
import { ITagsProps } from "~/atoms/Tags";
import { ISocialShareProps } from "~/molecules/SocialShare";
export declare type IPopupShare = {
    tags?: ITagsProps[];
    title?: ReactNode | string;
    isOpen: boolean;
    onClose: () => void;
    socialShareProps: {
        title?: string;
        socialShareProps?: ISocialShareProps;
    };
};
