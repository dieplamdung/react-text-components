import { BoxProps } from "@mui/material/Box";
import { ReactNode } from "react";
export declare type HtmlRendererProps = {
    component: BoxProps['component'];
    value: ReactNode | string | ReactNode[];
};
