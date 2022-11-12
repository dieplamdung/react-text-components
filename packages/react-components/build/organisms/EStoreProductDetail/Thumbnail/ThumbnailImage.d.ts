declare type IProps = {
    isSelect?: boolean;
    isFirstChild?: boolean;
    typeImg?: "video" | "image";
    onClick: () => void;
    hrefImg?: string;
};
export default function ThumbnailImage(props: IProps): JSX.Element;
export {};
