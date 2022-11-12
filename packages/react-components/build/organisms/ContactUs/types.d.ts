import { IData } from '~/molecules/DropdownAsynchronous';
import { IFileUploader } from '~/molecules/FileUploader/types';
import { ButtonHandler, ButtonProps } from '../../atoms/Button';
export declare type IContactUs = {
    title: string;
    description: {
        textBefore: string;
        textAfter: string;
        labelHref: string;
        linkHref: string;
        target: string;
    };
    textFieldProps: {
        label: string;
        lastName: TextFieldProps;
        email: TextFieldProps;
        firstName: TextFieldProps;
        phoneNumber: TextFieldProps;
        countryCode?: Array<{
            label: string;
            value: string;
            country: string;
        }>;
        located: {
            required: boolean;
            title: string;
            disabled: boolean;
            error: boolean;
            helperText: string;
            width: string;
            name: string;
            value: string;
            data: Array<{
                label: string;
                value: string;
            }>;
            countryDefault?: string;
        };
    };
    textAreaProps: {
        label: string;
        props: {
            InputLabelProps?: Function;
            focuslabel?: string;
            onFocus?: Function;
            name: string;
            label: string;
            placeholder: string;
            multiline: boolean;
            iconPosEnd: boolean;
            error: boolean;
            disabled: boolean;
            dataName: Function;
            limitText: number;
            width: string | number;
            helperText: string;
        };
    };
    filesProps: IFileUploader;
    dropdownProps: {
        label: string;
        props: {
            title: string;
            value: string;
            disabled: boolean;
            error: boolean;
            helperText: string;
            width: string;
            data: Array<{
                label: string;
                value: string;
            }>;
        };
    };
    buttonProps?: ButtonProps & ButtonHandler<IContactUs>;
    otherHelpfulDetailProps?: {
        label: string;
        items: {
            key: string;
            items: ({
                title: string;
                disabled: boolean;
                error: boolean;
                helperText: string;
                width: string;
                value: string;
                name: string;
                required: boolean;
                data: {
                    label: string;
                    value: string;
                }[];
                label?: string;
                hiddenLabel?: boolean;
                success?: boolean;
                iconPosEnd?: boolean;
            } | {
                name: string;
                helperText: string;
                width: string;
                required: boolean;
                label: string;
                hiddenLabel: boolean;
                success: boolean;
                iconPosEnd: boolean;
                title?: string;
                disabled?: boolean;
                error?: boolean;
                value?: string;
                data?: Array<{
                    label: string;
                    value: string;
                }>;
            })[];
            filesProps: {
                onlyFilesText: string;
                selectFilesText: string;
                dropFilesText: string;
                uploadAttachmentText: string;
                require: boolean;
            };
        }[];
    };
    submitResult: (value: boolean) => void;
    dataOptionGame: IData[];
    dataOptionHardware: IData[];
};
export declare type TextFieldProps = {
    InputLabelProps?: Function;
    label: string;
    helperText: string;
    emptyField?: string;
    hiddenLabel: boolean;
    success: boolean;
    iconPosEnd: boolean;
    defaultCodeCountry?: string;
};
