import React, { ReactNode } from 'react';
export declare type ICardGame = {
    nextImage?: ReactNode;
    title?: string;
    image?: string;
    href?: string;
    index?: number;
    isHomePage?: boolean;
};
declare const CardGame: React.FC<ICardGame>;
export default CardGame;
