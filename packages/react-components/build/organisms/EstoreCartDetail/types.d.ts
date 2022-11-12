import { ButtonProps } from "~/atoms/Button";
import { IQuantityCard } from "~/molecules/QuantityCard";
export declare type IEstoreCartDetail = {
    title: string;
    counterItemText?: string;
    quantityCard: IQuantityCard[];
    summaryCard: ISummaryCard;
    emptyCard: {
        title: string;
        description: string;
        button: ButtonProps;
    };
    undoNotice: {
        describe: string;
        undoLink: string;
    };
    freeGifts: {
        title: string;
        describe: string;
        linkTo: {
            label: string;
            href: string;
        };
        listCards: IQuantityCard[];
    };
};
export declare type ISummaryCard = {
    title: string;
    total?: number;
    discount?: number;
    quantity?: number;
    totalText: string;
    shippingText: string;
    button: ButtonProps;
};
export declare type IDropdownQuantity = {
    maxQuantity: number;
    currentQuantity: number;
    onSetQuantity: Function;
};
