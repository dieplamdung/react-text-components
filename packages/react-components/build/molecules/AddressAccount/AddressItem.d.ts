import React from 'react';
import { TAddressItem } from './types';
declare type PropsAddressItem = TAddressItem & {
    onRemoveAddress: (id: any, callback?: (v?: any) => void) => void;
    onUpdateAddress: (value: any, callback?: (v: any) => void) => void;
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
declare function AddressItem(props: PropsAddressItem): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof AddressItem>;
export default _default;
