import { ButtonHandler, ButtonProps } from '../../atoms/Button';
export declare type ISubscribe = {
    backgroundColor?: string;
    title: string;
    buttonProps?: ButtonProps & ButtonHandler<ISubscribe>;
    handleOpenModal?: Function;
};
