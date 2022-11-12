import React, { ReactNode } from 'react';
import { ITagsProps } from '~/atoms/Tags';
import { ISocialShareProps } from '~/molecules/SocialShare';
declare type ISubHeader = {
    tags?: ITagsProps[];
    title?: ReactNode | string;
    socialShareProps?: ISocialShareProps;
};
declare const SubHeader: React.FC<ISubHeader>;
export default SubHeader;
