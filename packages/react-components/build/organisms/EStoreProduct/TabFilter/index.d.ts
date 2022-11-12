import React from 'react';
import { ITab } from './Tab';
export declare type ITabFilter = {
    title: string;
    labelPill: string;
    active?: boolean;
    onClickPill?: () => void;
    tabList?: ITab[];
    titleSelect?: string;
    onSelectTab?: (v: string) => void;
};
declare function TabFilter(props: ITabFilter): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof TabFilter>;
export default _default;
