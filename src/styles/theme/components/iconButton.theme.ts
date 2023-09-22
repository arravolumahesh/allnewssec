import {alpha, Components, Theme} from "@mui/material";

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
  variants: [
    {
      props: { className: "border" },
      style: ({ theme }) => {
        return theme.unstable_sx({
          color: "inherit",
          border: "1px solid",
          borderColor: alpha(theme.palette.primary.contrastText, 0.3),
          p: 0.375,
        });
      },
    },
  ],
};
