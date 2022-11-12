export declare type IEdition = {
    title?: string;
    titleCompare?: string;
    editionList?: {
        titleEdition?: string;
        valuePrice?: string;
        id: any;
    }[];
    itemSelectEdition?: {
        titleEdition?: string;
        id: any;
    };
    padding?: number;
    onSelectEdition?: (value: any) => void;
    isDisable?: boolean;
};
export default function Edition(props: IEdition): JSX.Element;
