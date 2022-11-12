import { ReactNode } from "react";
import { ButtonHandler, ButtonProps } from '../../atoms/Button';
export declare type IPasswordProtect = {
    description: ReactNode | string;
    handleCheckPassWord?: Function;
    stateError?: string;
    formPassword: {
        title: string;
        textInput: {
            errorText: string;
            placeholder: string;
            isEmpty?: string;
        };
        childrenBtn: string;
        buttonProps?: ButtonProps & ButtonHandler<IPasswordProtect>;
    };
};
