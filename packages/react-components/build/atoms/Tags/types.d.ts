import { ReactNode } from "react";
export interface ITagsProps {
    color: string;
    title: string | ReactNode;
    disabled?: boolean;
    showBackground?: boolean;
    hoverPermission?: boolean;
}
