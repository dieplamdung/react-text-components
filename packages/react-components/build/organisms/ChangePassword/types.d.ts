import { ButtonHandler, ButtonProps } from "~/atoms/Button";
import { TextFieldProps } from "../ContactUs";
export declare type IChangePasswordProps = {
    mainImage: string;
    mainImageMobile: string;
    nextImage?: string;
    nextImageMobile?: string;
    title?: string;
    passwordField: TextFieldProps;
    confirmPasswordField: TextFieldProps;
    sendButton: ButtonProps & ButtonHandler<IChangePasswordProps>;
    successful?: boolean;
};
