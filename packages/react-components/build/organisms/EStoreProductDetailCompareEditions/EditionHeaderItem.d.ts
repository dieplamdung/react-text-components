declare type IEditionHeaderItem = {
    titleEdition?: string;
    valuePrice?: string;
    id: any;
    onClickBuy?: (id: any) => void;
    labelButton?: string;
};
export default function EditionHeaderItem(props: IEditionHeaderItem): JSX.Element;
export {};
