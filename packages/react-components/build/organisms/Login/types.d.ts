import { ReactNode } from "react";
import { ButtonHandler, ButtonProps } from "~/atoms/Button";
import { TextFieldProps } from "../ContactUs";
export declare type ILoginProps = {
    mainImage: string;
    mainImageMobile: string;
    nextImage?: string;
    emailField: TextFieldProps;
    passwordField: TextFieldProps;
    rememberLogged: string;
    forgotPasswordLink: {
        label: string;
        href: string;
        nextLink?: ReactNode;
    };
    signupLink: {
        text: string;
        link: {
            label: string;
            href: string;
        };
        nextLink?: ReactNode;
    };
    alt?: string;
    title: string;
    description: string;
    loginButton: ButtonProps & ButtonHandler<ILoginProps>;
    warning?: string;
    isKeepLogin?: Function;
};
