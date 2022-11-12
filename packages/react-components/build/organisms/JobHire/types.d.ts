import { ReactNode } from "react";
import { ButtonHandler, ButtonProps } from "~/atoms/Button";
export declare type IJobHire = {
    title: string;
    description: ReactNode | string;
    mainImage: string;
    mainImageNextProps: any;
    buttonProps?: ButtonProps & ButtonHandler<IJobHire>;
};
