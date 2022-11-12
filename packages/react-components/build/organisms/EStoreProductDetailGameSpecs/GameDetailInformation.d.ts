declare type IGameDetailInformation = {
    listProps: {
        id: number | string;
        title: string;
        detail: string;
    }[];
};
declare const GameDetailInformation: (props: IGameDetailInformation) => JSX.Element;
export default GameDetailInformation;
