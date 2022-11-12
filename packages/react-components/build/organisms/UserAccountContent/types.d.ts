import { ReactNode } from "react";
import { ButtonProps } from "~/atoms/Button";
import { TAddressItem, TemplateAddAddress } from "~/molecules/AddressAccount";
import { IDetailContent } from "~/molecules/DetailAccount/DetailContent";
import { IOrderItemList } from "~/molecules/OrderItemList";
import { Title } from "~/molecules/TabAccount";
export declare type IUserAccountContent = {
    dataLogo: {
        nextLogo?: ReactNode;
        hrefImg?: string;
        userName?: string;
        alt?: string;
    };
    titleList: Title[];
    contentAccount: {
        listDetail: IDetailContent[];
        titleButton: string;
        onSubmitData: (value: any, type?: string, callBack?: () => void) => void;
        onValidatePass?: (value: string) => Promise<boolean>;
    };
    contentAddresses: {
        title?: string;
        emptyAddress: {
            title?: string;
            description?: string;
            titleBtn?: string;
        };
        titleModalAdd?: string;
        titleModalUpdate?: string;
        titleBtnAddAddress: string;
        titleBtnSave?: string;
        listAddress: TAddressItem[];
        onRemoveAddress: (id: any, callback?: (v?: any) => void) => void;
        templateAdd: TemplateAddAddress;
        onUpdateAddress: (id: any, value: any, callback?: (v: any) => void) => void;
        onAddAddress: (value: any, callback?: (v: any) => void) => void;
        countryCode: {
            label: string;
            value: string;
            country: string;
        }[];
        countryName: {
            label: string;
            value: string;
        }[];
    };
    oderListContent: {
        listOrder: IOrderItemList[];
        propsButton: ButtonProps;
        titleOrderEmpty?: string;
        descriptionOrderEmpty?: string;
        titleBtn?: string;
    };
    defaultTab?: number;
    isRender: boolean;
    onChangeTag?: () => void;
};
