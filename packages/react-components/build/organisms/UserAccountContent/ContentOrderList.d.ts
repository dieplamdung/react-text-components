import { ButtonProps } from '~/atoms/Button';
import { IOrderItemList } from '~/molecules/OrderItemList';
declare type IContentOrderList = {
    listOrder: IOrderItemList[];
    propsButton: ButtonProps;
    titleOrderEmpty?: string;
    descriptionOrderEmpty?: string;
    titleBtn?: string;
};
declare function ContentOrderList(props: IContentOrderList): JSX.Element;
export default ContentOrderList;
