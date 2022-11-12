import { ReactNode } from "react";
import { ITagsProps } from "~/atoms/Tags";
import { ISocialShareProps } from "~/molecules/SocialShare";
export declare type IHeaderArticle = {
    title: ReactNode | string;
    store?: {
        url?: string;
        title?: string;
    };
    tags: ITagsProps[];
    timeRange?: string | ReactNode;
    date: {
        text: string | ReactNode;
        value: string | ReactNode;
    };
    isProtect?: boolean;
    layoutBlog?: boolean;
    fbShare: string;
    instaShare: string;
    twShare: string;
    weiboShare: string;
    kakaoShare: string;
    socialShareProps?: ISocialShareProps;
    mainImage?: string;
    mainImageNext?: ReactNode | string;
    idVideo?: string;
    hideMasthead?: boolean;
    downloadTitle?: string;
    mainImageAvatarNext?: string | ReactNode;
    mainImageAvatar?: string;
    onDownload?: () => void;
    userInfo?: {
        name: string;
        position: string;
    };
};
