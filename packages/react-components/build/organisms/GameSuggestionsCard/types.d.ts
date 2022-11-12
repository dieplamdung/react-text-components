import { ReactNode } from "react";
import { ButtonHandler, ButtonProps } from "~/atoms/Button";
import { IButtonPrice, PriceProps } from "~/atoms/ButtonPrice";
export declare type IGameSuggestionsCard = {
    mainImage?: string;
    mainImageNext?: ReactNode | string;
    title: string;
    description?: string | ReactNode;
    linkHref?: string;
    buttonProps: ButtonProps & ButtonHandler<IButtonPrice>;
    priceProps?: PriceProps;
    buttonPropsLearnMore?: PriceProps;
    onlyButton?: boolean;
    tags?: Array<Tags>;
    isBlogLayout?: boolean;
    id?: string;
    isMessageLayout?: boolean;
    author?: {
        name: string;
        position: string;
        contentMsg?: {
            title?: string;
            content: ReactNode | string;
        };
    };
};
export declare type BulletPoint = {
    id: number;
    label: string;
};
declare type Tags = {
    color: string;
    title: string;
};
export declare type IModalMsg = {
    isOpen: boolean;
    onClose?: Function;
    name?: string;
    position?: string;
    contentMsg?: {
        title?: string;
        content: ReactNode | string;
    };
};
export {};
