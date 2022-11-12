import { ListingType } from "~/molecules/FilterSelectionListing";
import { ButtonHandler, ButtonProps } from '../../atoms/Button';
export declare type INewsFilter = {
    title: string;
    categories: Array<CategoriesProps>;
    dataFilter: ListingType[];
    buttonPropsDone?: ButtonProps & ButtonHandler<INewsFilter>;
    buttonPropsClear?: ButtonProps & ButtonHandler<INewsFilter>;
    locale: string;
    setDataQueryTags: Function | any;
    setDataQueryGame: Function | any;
};
export declare type CategoriesProps = {
    title: string;
    mainImage: string;
    mainImageNext: string;
    linkHref: string;
};
export declare type PillProps = {
    label: string;
    value?: string;
    active: boolean;
    numberFilter: number;
    iconMobile: boolean;
};
export declare type IScrollingNewsFilterData = {
    locale: string;
    handlerFilter: Function;
    dataQueryTags: string[];
};
