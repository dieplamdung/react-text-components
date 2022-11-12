import { LinkHrefResultItem } from "./ResultItem";
export declare type ISearchProps = {
    placeholder?: string;
    href: string;
    listResultDefault?: LinkHrefResultItem[];
    onClose: () => void;
    isShowSearch?: boolean;
    onSearch?: (v: string) => LinkHrefResultItem[];
    hrefSeeAll?: string;
    handleRemoveSearch?: Function;
    textTopTrending?: string;
    textRecent?: string;
    handleShowTrending?: Function;
    locale: string;
};
