import React from 'react';
import { LinkHrefResultItem } from './ResultItem';
declare type ContentResultSearchProps = {
    valueSearch?: string;
    listResult?: LinkHrefResultItem[];
    recentList?: LinkHrefResultItem[];
    hrefSeeAll?: string;
    textTopTrending?: string;
    textRecent?: string;
};
declare const ContentResultSearch: React.FC<ContentResultSearchProps>;
export default ContentResultSearch;
