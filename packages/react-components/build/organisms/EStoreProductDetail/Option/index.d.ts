import { ReactNode } from 'react';
import { ButtonProps } from '~/atoms/Button';
import { ITab } from '../../EStoreProduct/ProductItem/Tabs';
import { IEdition } from './Edition';
import { IFreeGift } from './FreeGift';
import { IType } from './Type';
export declare type IOption = {
    tabList?: ITab[];
    title?: string;
    platform?: {
        title?: string;
        platformList?: {
            titleIcon?: string;
            value?: string;
            id: any;
        }[];
    };
    itemPlatformSelect?: {
        titleIcon?: string;
        id: any;
    };
    itemTypeSelect?: {
        titleType?: string;
        id: any;
    };
    itemSelectEdition?: {
        titleEdition?: string;
        valuePrice?: string;
        id: any;
    };
    typeOption: IType;
    typeEdition: IEdition;
    freeGift: IFreeGift;
    buttonPropsAddCart?: ButtonProps;
    buttonPropsBuyNow?: ButtonProps;
    buttonPropsBuyNowDigital?: ButtonProps;
    maxQuantity?: number;
    quantity?: number;
    labelQty?: string;
    price?: string;
    titleButtonBuyDigital?: string;
    isSelectTypeDigital?: boolean;
    padding?: number;
    onSelectPlatform?: (item: any) => void;
    onSelectType?: (item: any) => void;
    onSelectEdition?: (item: any) => void;
    onSelectQty?: (value: any) => void;
};
export declare const WrapperContainer: (child: ReactNode) => JSX.Element;
export default function Option(props: IOption): JSX.Element;
