import React, { ReactNode } from 'react';
import { ITagsProps } from '~/atoms/Tags';
import { ISocialShareProps } from '~/molecules/SocialShare';
declare type IPopupSubHeader = {
    tags?: ITagsProps[];
    title?: ReactNode | string;
    socialShareProps?: ISocialShareProps;
    isOpen: boolean;
    onClose: () => void;
};
declare const PopupSubHeader: React.FC<IPopupSubHeader>;
export default PopupSubHeader;
