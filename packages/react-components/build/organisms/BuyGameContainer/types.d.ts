import { ButtonProps } from '~/atoms/Button';
import { PriceProps } from '~/atoms/ButtonPrice';
export declare type IBuyGameContainer = {
    mainImage: string;
    title: string;
    tags: Array<Tags>;
    buttonPriceProps: {
        buttonBuy: ButtonProps;
        buttonLearnMore: ButtonProps;
        priceProps: PriceProps;
    };
};
export declare type Tags = {
    color: string;
    title: string;
    disabled: boolean;
};
