import { ButtonProps } from "~/atoms/Button";
import { IOption } from "./Option";
export declare type IEStoreProductDetail = {
    listThumbnail: {
        id?: any;
        hrefImg?: string;
        alt?: string;
        typeImg?: any | "video" | "image";
        idVideo?: string;
        typeVideo?: string;
        title?: string;
    }[];
    options: IOption;
    onSelectPlatform?: (id: any) => void;
    onSelectType?: (id: any) => void;
    onSelectEdition?: (id: any) => void;
    onSelectQty?: (v: any) => void;
    buttonPropsAddCart?: ButtonProps;
    buttonPropsBuyNow?: ButtonProps;
    buttonPropsBuyNowDigital?: ButtonProps;
    titleButtonBuyNowDigital?: any;
};
