declare type Title = string;
declare type Name = string;
declare type IsCheck = boolean;
declare type TypesFilter = "checkbox" | "radio";
export declare type ListSub = {
    title: Title;
    name: Name;
    isChecked: IsCheck;
};
export declare type ListingType = {
    title: Title;
    name: Name;
    isChecked: IsCheck;
    listSub?: any;
};
export declare type IFilterSelectionListing = {
    dataDefault: ListingType[];
    onChange: (value: ListingType[]) => void;
    types?: TypesFilter;
    hadShowMore?: boolean;
    showMore?: boolean;
    toggleDisplayListSub?: boolean;
};
export {};
