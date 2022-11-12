import { ReactNode } from 'react';
declare type IGameShortDescription = {
    title: string;
    description: string;
    mainImage: string;
    id?: string;
    nextImage?: ReactNode;
};
declare const GameShortDescription: (props: IGameShortDescription) => JSX.Element;
export default GameShortDescription;
