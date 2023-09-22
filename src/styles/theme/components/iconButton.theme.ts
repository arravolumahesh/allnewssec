import {Components, Theme} from "@mui/material";

/**
 * @IconButtonVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the IconButton component
 *
 * @see https://mui.com/material-ui/react-button/#icon-button
 */
export const IconButtonVariants: Components<
  Omit<Theme, "components">
>["MuiIconButton"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { sx } = ownerState;
      return theme.unstable_sx([
        {
          borderRadius: 0,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]);
    },
  },
  defaultProps: {
    centerRipple: false,
  },
};
