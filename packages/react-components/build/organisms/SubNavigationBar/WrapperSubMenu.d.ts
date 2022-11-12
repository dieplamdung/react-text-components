import React from 'react';
import { NavLink } from './types';
declare type IWrapperSubMenu = {
    listNavigation: NavLink[];
    onSelectItem: (item: NavLink) => void;
    onBuy: (item: string) => void;
    itemSelect: NavLink;
    background?: string;
    externalLink?: string;
    titleBtn?: string;
};
declare const _default: React.NamedExoticComponent<IWrapperSubMenu>;
export default _default;
