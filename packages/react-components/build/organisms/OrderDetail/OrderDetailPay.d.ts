export declare type ItemPay = {
    title: string;
    value: string;
    note?: string;
};
declare type IOrderDetailPay = {
    listOrderPay: ItemPay[];
};
declare function OrderDetailPay(props: IOrderDetailPay): JSX.Element;
export default OrderDetailPay;
