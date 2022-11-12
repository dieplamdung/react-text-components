export declare type IEStoreProductDetailCompareEditions = {
    titleCompareEdition?: string;
    editionHeaderList: {
        titleEdition?: string;
        valuePrice?: string;
        id: any;
    }[];
    labelButton?: string;
    listEditionContentItem: {
        titleContent?: string;
        description?: string;
        listShowEdition?: any[];
    }[];
    onClickBuyEdition?: (value: any) => void;
};
