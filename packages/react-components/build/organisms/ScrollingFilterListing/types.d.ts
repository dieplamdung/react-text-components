import { ListingType } from "~/molecules/FilterSelectionListing";
import { ButtonHandler, ButtonProps } from '../../atoms/Button';
export declare type TypeDataFilter = {
    title: string;
    dataFilter: ListingType[];
    countSelect: number;
    showMore?: boolean;
    value?: string;
};
export declare type IScrollingFilterListing = {
    title: string;
    sortByText: string;
    filterByText: string;
    showMoreText: string;
    showLessText: string;
    sortBy: ListingType[];
    dataFilter: TypeDataFilter[];
    defaultTags: any[];
    buttonPropsDone?: ButtonProps & ButtonHandler<IScrollingFilterListing>;
    buttonPropsClear?: ButtonProps & ButtonHandler<IScrollingFilterListing>;
    locale: string;
    onFilter: Function | any;
};
