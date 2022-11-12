import { IDetailContent } from './DetailContent';
declare type IModalUpdate = {
    open: boolean;
    detail?: IDetailContent;
    isPassWord?: boolean;
    onClose: () => void;
    titleButton?: string;
    onSave: (value: any, callBack?: (error?: string) => void) => void;
    onValidatePass?: (value: string) => Promise<boolean>;
};
export default function ModalUpdate(props: IModalUpdate): JSX.Element;
export {};
