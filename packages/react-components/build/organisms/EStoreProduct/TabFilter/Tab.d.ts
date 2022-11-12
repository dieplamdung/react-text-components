export declare type ITab = {
    title: string;
    value: string;
};
declare type ITabs = {
    tabList: ITab[];
    titleSelect: string;
    onSelectTab: (v: string) => void;
};
declare function Tab(props: ITabs): JSX.Element;
export default Tab;
