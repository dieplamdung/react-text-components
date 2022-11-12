import { IOrderItem } from './OrderItem';
declare type IOrderItemList = {
    listOrder: IOrderItem[];
    titleGift?: string;
    listGift?: IOrderItem[];
};
declare function OrderItemList(props: IOrderItemList): JSX.Element;
export default OrderItemList;
