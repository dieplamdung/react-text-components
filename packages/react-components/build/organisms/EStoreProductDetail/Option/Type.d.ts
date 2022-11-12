export declare type IType = {
    title?: string;
    typeList?: {
        titleType?: string;
        value?: string;
        id: any;
    }[];
    itemSelectType?: {
        titleType?: string;
        value?: string;
        id: any;
    };
    padding?: number;
    onSelectType?: (value: any) => void;
    isDisable?: boolean;
};
declare function Type(props: IType): JSX.Element;
export default Type;
