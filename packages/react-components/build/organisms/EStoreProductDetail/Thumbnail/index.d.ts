import React from 'react';
export declare type ListItem = {
    id?: any;
    hrefImg?: string;
    alt?: string;
    typeImg?: "video" | "image";
    idVideo?: string;
    typeVideo?: string;
    title?: string;
};
declare type IThumbnail = {
    listItem: ListItem[];
    padding?: number;
};
declare function Thumbnail(props: IThumbnail): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Thumbnail>;
export default _default;
