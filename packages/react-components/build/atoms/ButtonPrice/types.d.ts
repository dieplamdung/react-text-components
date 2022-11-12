import { ButtonHandler, ButtonProps } from "../Button";
export interface IButtonPrice {
    buttonProps: ButtonProps & ButtonHandler<IButtonPrice>;
    priceProps: PriceProps;
    isButtonSecond?: boolean;
}
export declare type PriceProps = {
    label: string;
    amount?: number | string | any;
    currency?: string | string;
    variant?: string;
    noFormat?: boolean;
    isButtonSecond?: boolean;
    disabled?: boolean;
    externalLink?: string;
};
