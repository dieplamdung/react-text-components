export declare type NavLink = {
    label: string;
    value: string;
};
export declare type ISubNavigationBarProps = {
    listNavigation: NavLink[];
    onBuy?: (value: string) => void;
    externalLink?: string;
    onSelectItem?: (value: string) => void;
    onSelectIdContent?: (id: string) => void;
    titleBtn?: string;
};
