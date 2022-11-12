import { ReactNode } from 'react';
import { ISubscribe } from '~/molecules/Subscribe';
declare type ImageLink = {
    xs?: string;
    md?: string;
};
declare type ContentText = {
    title: string;
    label: string;
    description: string | ReactNode;
};
declare type TypeTextInput = {
    placeholder?: string;
};
declare type ContentModalSmall = {
    title?: string;
    label?: string;
    labelBtn?: string;
};
export declare type ISubscribeModal = {
    isOpen: boolean;
    onClose?: () => void;
    errorText?: string;
    imageLink: ImageLink;
    contentText: ContentText;
    textInput: TypeTextInput;
    childrenBtn: string | ReactNode;
    onSubscribe?: (value: string) => boolean;
    hrefNextPage?: string;
    onSeeNew?: () => void;
    contentModalSmall?: ContentModalSmall;
    stepForm?: number;
    serverReturnErr?: any;
    serverReturn?: any;
    handleClosePopup?: Function;
};
export declare type ISubscribePopup = {
    subscribeModal: ISubscribeModal;
    subscribeContent: ISubscribe;
    serverReturnErr: any;
    returnServerCode: any;
    handleClosePopup?: Function;
};
export {};
