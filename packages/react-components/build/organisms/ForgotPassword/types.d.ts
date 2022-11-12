import { ButtonHandler, ButtonProps } from "~/atoms/Button";
import { TextFieldProps } from "../ContactUs";
export declare type IForgotPasswordProps = {
    mainImage: string;
    mainImageMobile: string;
    nextImage?: string;
    nextImageMobile?: string;
    alt: string;
    title?: string;
    description?: string;
    emailField: TextFieldProps;
    sendButton: ButtonProps & ButtonHandler<IForgotPasswordProps>;
    successful?: boolean;
};
