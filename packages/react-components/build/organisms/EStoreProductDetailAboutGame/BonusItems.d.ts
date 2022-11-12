import { ReactNode } from 'react';
export declare type IBonusItems = {
    listImg: {
        hefImg?: string;
        nextImg?: ReactNode;
    }[];
    titleBonusItems?: string;
    listBonusItems?: string[] | any[];
};
export default function BonusItems(props: IBonusItems): JSX.Element;
