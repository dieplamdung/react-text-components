import React from 'react';
declare type UserInfoProps = {
    handleCloseMenuUserInfo: () => void;
    handleCloseAllMenu: () => void;
    account?: string;
    details?: string;
    orders?: string;
    address?: string;
    logout?: string;
    isRelative: boolean;
    isShow: boolean;
};
declare const MenuUserInfo: React.ForwardRefExoticComponent<UserInfoProps & React.RefAttributes<unknown>>;
export default MenuUserInfo;
