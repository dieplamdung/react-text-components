import { ItemList } from './DetailItem';
export declare type IDetailContent = {
    title?: string;
    detail: ItemList[];
    titleButtonEdit?: string;
    titleButtonSave?: string;
    isPassWord?: boolean;
    onSubmitData?: (value: any, type?: string, callBack?: () => void) => void;
    onValidatePass?: (value: string) => Promise<boolean>;
};
declare function DetailContent(props: IDetailContent): JSX.Element;
export default DetailContent;
