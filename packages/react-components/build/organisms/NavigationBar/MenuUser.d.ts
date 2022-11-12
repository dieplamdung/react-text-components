declare type UserProps = {
    handleOpenMenuUserInfo: () => void;
    avatarUrl?: string;
    name?: string;
};
declare function MenuUser(props: UserProps): JSX.Element;
export default MenuUser;
