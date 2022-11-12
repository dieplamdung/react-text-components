import React from 'react';
export declare type ITab = {
    title: string;
    color: string;
};
declare type ITabs = {
    tabList: ITab[];
};
declare function Tabs(props: ITabs): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof Tabs>;
export default _default;
