import React from 'react';
import { ICardGame } from '~/organisms/HorizontalScrollingContainerMediaGallery/CardGame';
declare type ICardGameListProps = {
    isNext?: boolean;
    className?: string;
    listGame: ICardGame[];
    isHomePage?: boolean;
    secondLine?: boolean;
};
declare const CardGameList: React.FC<ICardGameListProps>;
export default CardGameList;
