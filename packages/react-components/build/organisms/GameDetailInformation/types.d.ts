export declare type IGameDetailInformation = {
    listProps: Array<ListProps>;
    title?: string;
    id?: string;
};
export interface ListProps {
    id: number | string;
    title: string;
    detail: string;
}
