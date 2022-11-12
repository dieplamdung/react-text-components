declare const MuiList: {
    defaultProps?: Partial<import("@mui/material").ListProps<"ul", {}>> | undefined;
    styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").ListClasses, "MuiList", unknown>> | undefined;
    variants?: {
        props: Partial<import("@mui/material").ListProps<"ul", {}>>;
        style: import("@mui/styled-engine").Interpolation<{
            theme: import("@mui/material/styles").Theme;
        }>;
    }[] | undefined;
} | undefined;
export default MuiList;
