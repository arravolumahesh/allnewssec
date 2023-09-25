import {Components, Theme} from "@mui/material";

/**
 * @CardVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the CardHeader component
 *
 * @see https://mui.com/material-ui/react-card
 */
export const CardHeaderVariants: Components<
  Omit<Theme, "components">
>["MuiCardHeader"] = {
  styleOverrides: {
    root: ({ theme }) => {
      return theme.unstable_sx({});
    },
  },
  defaultProps: {
    titleTypographyProps: {
      variant: "h6",
    },
    subheaderTypographyProps: {
      variant: "body2",
    },
  },
};
