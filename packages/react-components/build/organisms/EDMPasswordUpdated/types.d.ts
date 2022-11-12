import { ReactNode } from 'react';
import { PriceProps } from '~/atoms/ButtonPrice';
import { ISocialShareProps } from '~/molecules/SocialShare';
import { ButtonProps } from '../../atoms/Button';
export declare type IContactInfoProps = {
    title: string;
    button: ButtonProps;
    mainImageUrl?: string;
    mainImageUrlMobile?: string;
    nextImage?: string;
    nextImageMobile?: string;
    suggestionCard: {
        mainImage?: string;
        nextImage?: ReactNode | string;
        title: string;
        description?: string | ReactNode;
        linkHref?: string;
        buttonPropsLearnMore?: PriceProps;
    };
    footer: {
        socialShare: ISocialShareProps;
    };
};
