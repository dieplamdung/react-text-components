import { IDetailContent } from "./DetailContent";
export declare type IDetailAccount = {
    listDetail: IDetailContent[];
    titleButton: string;
    onSubmitData?: (value: any, type?: string, callBack?: () => void) => void;
    onValidatePass?: (value: string) => Promise<boolean>;
};
