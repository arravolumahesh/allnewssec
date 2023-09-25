import {Components, Theme} from "@mui/material";

/**
 * @BackdropVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Backdrop component
 *
 * @see https://mui.com/material-ui/react-backdrop/#main-content
 */
export const BackdropVariants: Components<Omit<Theme, "components">>["MuiBackdrop"] = {
  styleOverrides: {},
};
