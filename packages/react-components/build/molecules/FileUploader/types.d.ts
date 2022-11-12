/// <reference types="react" />
export declare type IFileUploader = {
    onlyFilesText?: string;
    selectFilesText?: string;
    dropFilesText?: string;
    uploadAttachmentText?: string;
    parent?: Function;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | React.DragEvent<HTMLDivElement>) => void;
    register?: Function;
    required?: boolean;
    name?: string;
    maxSize?: number;
    errorText?: string;
    wrongFormat?: string;
    limitFiles?: string;
};
