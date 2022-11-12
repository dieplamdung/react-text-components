import { TemplateAddAddress } from './types';
declare type IModalUpdate = {
    open: boolean;
    onClose: () => void;
    onSave: (value: any, callback?: (v: any) => void) => void;
    title?: string;
    titleBtnSave?: string;
    template?: TemplateAddAddress;
    countryCode: {
        label: string;
        value: string;
        country: string;
    }[];
    countryName: {
        label: string;
        value: string;
    }[];
};
export default function ModalUpdate(props: IModalUpdate): JSX.Element;
export {};
