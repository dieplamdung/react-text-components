import { ReactNode } from "react";
import { ButtonHandler, ButtonProps } from "~/atoms/Button";
import { IButtonPrice } from "~/atoms/ButtonPrice";
export declare type ICollectorCard = {
    mainImage?: string;
    mainImageNext?: ReactNode | string;
    title: string;
    isButtonSecond?: boolean;
    linkHref?: string;
    bulletPointProps?: {
        label: string;
        items: Array<BulletPoint>;
    };
    buttonProps: ButtonProps & ButtonHandler<IButtonPrice>;
    priceProps: {
        label: string;
        amount: number | string;
        currency?: string;
    };
    expandableBulletPointsProps: {
        color: string;
        label: string;
        bulletPointProps: Array<BulletPoint>;
    };
};
export declare type BulletPoint = {
    id: number;
    label: string;
};
