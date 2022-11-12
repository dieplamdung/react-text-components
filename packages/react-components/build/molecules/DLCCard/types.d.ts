import { ReactNode } from "react";
import { ButtonHandler, ButtonProps } from "~/atoms/Button";
import { IButtonPrice } from "~/atoms/ButtonPrice";
export declare type IDLCCard = {
    id?: any;
    isButtonSecond?: boolean;
    mainImage?: string;
    mainImageNext?: ReactNode | string;
    title: string;
    description: string;
    linkHref?: string;
    buttonProps: ButtonProps & ButtonHandler<IButtonPrice>;
    priceProps: {
        label: string;
        amount: number | string;
        currency?: string;
    };
    onClickBuy?: () => void;
};
export declare type BulletPoint = {
    id: number;
    label: string;
};
