import { ICardGame } from "./CardGame";
export declare type IHorizontalScrollingContainerMediaGallery = {
    title?: string;
    titleSeeAll?: string;
    hrefSeeAll?: string;
    listGame: ICardGame[];
    id?: string;
    isHomePage?: boolean;
};
