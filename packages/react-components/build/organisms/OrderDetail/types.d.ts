import { INeedHelp } from "./NeedHelp";
import { IOrderAddress } from "./OrderAddress";
import { ItemPay } from "./OrderDetailPay";
import { IOrderItem } from "./OrderItem";
import { IOrderPayment } from "./OrderPayment";
import { IOrderShipping } from "./OrderShipping";
export declare type IOrderDetail = {
    titleTabMain: string;
    titleTabContent: string;
    tabStatus: {
        title: string;
        description: string;
    };
    orderSummary: {
        titleOrder: string;
        valueOrder: string;
        titleDate: string;
        valueDate: string;
    };
    listOrderItem: IOrderItem[];
    titleGift?: string;
    listGift?: IOrderItem[];
    listOrderPay?: ItemPay[];
    orderAddress?: IOrderAddress;
    orderShipping?: IOrderShipping;
    orderPayment?: IOrderPayment;
    help?: INeedHelp;
};
