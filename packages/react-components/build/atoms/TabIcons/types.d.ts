import { ReactNode } from "react";
export declare type ListTabIcons = {
    id: number;
    label: string;
    icon: ReactNode;
};
export declare type ITabIcons = {
    listTabs?: ListTabIcons[];
    onChangeTab?: Function;
};
