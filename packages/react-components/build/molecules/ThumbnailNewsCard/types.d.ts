import { ReactNode } from "react";
import { ITagsProps } from "~/atoms/Tags";
export declare type IThumbnailNewsCard = {
    mainImage?: string;
    mainImageNext?: ReactNode | string;
    title: string;
    locale?: string;
    tags: ITagsProps[];
    linkHref?: string;
    fromDate?: {
        month?: string;
        day?: string;
    };
    toDate?: string;
    textDateRange?: string;
    dateRange?: boolean;
    noDate?: string;
    publicDate?: string;
    hideDateLeft?: boolean;
    isReverse?: boolean;
    hrefTag?: string;
    type?: string;
};
