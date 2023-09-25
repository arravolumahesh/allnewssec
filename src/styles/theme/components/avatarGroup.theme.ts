import {Components, Theme} from "@mui/material";

/**
 * @AvatarGroupVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the AvatarGroup component
 *
 * @see https://mui.com/material-ui/react-avatar/#grouped
 */
export const AvatarGroupVariants: Components<
  Omit<Theme, "components">
>["MuiAvatarGroup"] = {};
