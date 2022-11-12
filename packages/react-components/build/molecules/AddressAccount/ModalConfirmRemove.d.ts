declare type TModalRemove = {
    open: boolean;
    titleBtnRemove?: string;
    titleBtnCancel?: string;
    onClose: () => void;
    onConfirm: (callback?: (value: any) => void) => void;
    titleRemove?: string;
};
declare function ModalConfirmRemove(props: TModalRemove): JSX.Element;
export default ModalConfirmRemove;
