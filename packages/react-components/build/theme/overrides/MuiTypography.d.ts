declare const MuiTypography: {
    defaultProps?: Partial<import("@mui/material").TypographyProps<"span", {}>> | undefined;
    styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").TypographyClasses, "MuiTypography", unknown>> | undefined;
    variants?: {
        props: Partial<import("@mui/material").TypographyProps<"span", {}>>;
        style: import("@mui/styled-engine").Interpolation<{
            theme: import("@mui/material/styles").Theme;
        }>;
    }[] | undefined;
} | undefined;
export default MuiTypography;
