import { ButtonHandler, ButtonProps } from '../../atoms/Button';
export declare type IContactInfoProps = {
    title: string;
    subtitle: string;
    directionLinkProps?: ButtonProps & ButtonHandler<IContactInfoProps>;
    emailTitle?: string;
    emailValue?: string;
    phoneTitle?: string;
    phoneValue?: string;
    mainImageUrl?: string;
    mainImageUrlMobile?: string;
    isKorea?: boolean;
};
