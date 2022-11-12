declare type Location = {
    label: string;
    value: string;
    link?: string;
};
export declare type ILocationSelectionBannerProps = {
    isShowLocation: boolean;
    onClose?: (value: boolean) => void;
    handleCloseFunc?: () => void;
    onUpdate: (value: string) => void;
    defaultLocation: string;
    listLocation: Location[];
    title?: string;
    textButtonUpdate: string;
};
export {};
