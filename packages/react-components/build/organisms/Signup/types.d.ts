import { ReactNode } from "react";
import { ButtonHandler, ButtonProps } from "~/atoms/Button";
import { TextFieldProps } from "../ContactUs";
export declare type ISignupProps = {
    mainImage: string;
    mainImageMobile: string;
    nextImage?: string;
    nextImageMobile?: string;
    alt: string;
    title?: string;
    description?: string;
    firstNameField: TextFieldProps;
    lastNameField: TextFieldProps;
    emailField: TextFieldProps;
    passwordField: TextFieldProps;
    signupButton: ButtonProps & ButtonHandler<ISignupProps>;
    acceptNewsCheckbox: {
        label: string;
        isAccept: boolean;
    };
    policyAndTerms: {
        text: string;
        terms: {
            label: string;
            href: string;
        };
        policy: {
            label: string;
            href: string;
        };
    };
    loginLink: {
        text: string;
        link: {
            label: string;
            href: string;
        };
    };
    nextLink?: ReactNode;
    onChangeTab?: Function;
    onClose?: Function;
    openPopupSuccessful?: boolean;
    popupSuccessful: {
        image: string;
        nextImage?: ReactNode;
        title: string;
        description: string;
        button: ButtonProps[];
    };
    successful?: boolean;
    onSubcribe?: Function;
    errorEmailMessage?: string;
};
