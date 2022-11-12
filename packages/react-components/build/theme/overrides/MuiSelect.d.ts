declare const MuiSelect: {
    defaultProps?: Partial<import("@mui/material").SelectProps<unknown>> | undefined;
    styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").SelectClasses, "MuiSelect", unknown>> | undefined;
    variants?: {
        props: Partial<import("@mui/material").SelectProps<unknown>>;
        style: import("@mui/styled-engine").Interpolation<{
            theme: import("@mui/material/styles").Theme;
        }>;
    }[] | undefined;
} | undefined;
export default MuiSelect;
