declare const MuiButton: {
    defaultProps?: Partial<import("@mui/material").ButtonProps<"button", {}>> | undefined;
    styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").ButtonClasses, "MuiButton", unknown>> | undefined;
    variants?: {
        props: Partial<import("@mui/material").ButtonProps<"button", {}>>;
        style: import("@mui/styled-engine").Interpolation<{
            theme: import("@mui/material/styles").Theme;
        }>;
    }[] | undefined;
} | undefined;
export default MuiButton;
