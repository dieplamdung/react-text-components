import { ButtonHandler, ButtonProps } from "~/atoms/Button";
import { IButtonPrice } from "~/atoms/ButtonPrice";
import { ITagsProps } from "~/atoms/Tags";
export declare type IPricingCard = {
    title: string;
    bulletPointProps: {
        label: string;
        items: Array<BulletPoint>;
    };
    buttonProps: ButtonProps & ButtonHandler<IButtonPrice>;
    priceProps: {
        label: string;
        currency: string;
        amount: number | string;
        variant?: string;
    };
    tagsProps: ITagsProps[];
};
export declare type BulletPoint = {
    id: number;
    label: string;
};
