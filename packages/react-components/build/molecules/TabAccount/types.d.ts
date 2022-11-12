export declare type Title = {
    title?: string;
    value?: string;
};
export declare type ITabAccount = {
    titleList: Title[];
    titleSelect?: string;
    onChangeTab: (value: any) => void;
};
