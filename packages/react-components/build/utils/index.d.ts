export declare const formatCurrency: (num: number, precision: number) => string;
export interface Item {
    key: number;
    value: string;
}
export declare const useLoadItems: () => {
    loading: boolean;
    items: Item[];
    hasNextPage: boolean;
    error: Error | undefined;
    loadMore: () => Promise<void>;
};
export declare const convertCustomTagForFilter: (tag: string, isBlog?: boolean | undefined) => any;
