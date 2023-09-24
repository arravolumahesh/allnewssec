import {alpha, Components, svgIconClasses, Theme} from "@mui/material";

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
          width: 32,
          height: 32,
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
          position: "relative",
          color: "inherit",
          border: "1px solid",
          borderColor: alpha(theme.palette.primary.contrastText, 0.3),
          [`& .${svgIconClasses.root}`]: {
            fontSize: 18,
          },
          "&:hover": {
            "&::before": {
              content: '""',
              position: "absolute",
              left: 3,
              top: 3,
              right: 3,
              bottom: 3,
              borderRadius: "inherit",
              backgroundColor: "currentcolor",
              opacity: 0.4,
            },
          },
        });
      },
    },
  ],
};
