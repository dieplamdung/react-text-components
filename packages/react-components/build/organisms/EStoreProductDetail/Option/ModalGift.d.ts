declare type IModalGift = {
    open: boolean;
    onClose: () => void;
    imgGift?: string;
};
export default function ModalGift(props: IModalGift): JSX.Element;
export {};
