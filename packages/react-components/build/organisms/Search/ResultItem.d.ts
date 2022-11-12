import React from 'react';
export declare type LinkHrefResultItem = {
    href?: string;
    title?: string;
};
declare type ResultItemProps = {
    title?: string;
    listResult: LinkHrefResultItem[];
    isRecent?: boolean;
    onClearRecent?: () => void;
    hrefSeeAll?: string;
    valueSearch?: string;
};
declare const ResultItem: React.FC<ResultItemProps>;
export default ResultItem;
