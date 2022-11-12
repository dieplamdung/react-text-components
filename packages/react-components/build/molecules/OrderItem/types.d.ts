import { ReactNode } from 'react';
import { ButtonProps } from "../../atoms/Button/types";
export declare type IOrderItem = {
    id?: any;
    nextImage?: ReactNode;
    hrefImg?: string;
    alt?: string;
    status: {
        label: string;
        color: string;
    };
    titleButton: string;
    buttonProps: ButtonProps;
    itemDetail: {
        title: string;
        oderId: string;
        date: string;
        price: string;
        amount: string;
        labelAmount: string;
    };
    href: string;
    nextLink?: (href: string, child: ReactNode) => ReactNode;
};
