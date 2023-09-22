import {Components, Theme} from "@mui/material";

/**
 * @AppbarVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Appbar component
 *
 * @see https://mui.com/material-ui/react-app-bar
 */
export const AppBarVariants: Components<
    Omit<Theme, "components">
>["MuiAppBar"] = {
    defaultProps: {
        position: "sticky",
        color: "primary",
    },
    styleOverrides: {
        root: ({theme}) => {
            return theme.unstable_sx({
                width: 1,
                px: 0,
            });
        },
    },
};
