import { ReactNode } from "react";
import { ITagsProps } from "~/atoms/Tags";
import { ISocialShareProps } from "../SocialShare";
export declare type IDigitalDownloadCard = {
    mainImage?: string;
    mainImageNext?: ReactNode | string;
    title: string;
    description?: string;
    memberCard?: string;
    socialShare?: boolean;
    href?: string;
    target?: string;
    tags?: ITagsProps[];
    socialShareProps?: {
        title?: string;
        socialShareProps: ISocialShareProps;
    };
};
