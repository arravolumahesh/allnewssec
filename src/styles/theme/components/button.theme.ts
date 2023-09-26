import {alpha, Components, Theme} from "@mui/material";
import {helvetica} from "app/font";
import {Button, H6_2} from "@theme/components/typography.fontvariant";

/**
 * @ButtonVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Button component
 *
 * @see https://mui.com/material-ui/react-button/#customization
 */
export const ButtonVariants: Components<
  Omit<Theme, "components">
>["MuiButton"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { sx: style, fullWidth } = ownerState;
      return theme.unstable_sx([
        {
          ...helvetica.style,
          whiteSpace: "nowrap",
          lineHeight: "128%",
          fontWeight: 500,
          fontSize: Button,
          textRendering: "optimizeSpeed",
          letterSpacing: "normal",
          height: "inherit",
          fontSmooth: "always",
          minWidth: "fit-content",
          width: fullWidth ? "100%" : "fit-content",
          px: 2,
          py: 1.5,
          borderRadius: 0,
          overflow: "hidden",
          textTransform: "capitalize",
        },
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
    text: ({ ownerState, theme }) => {
      const { disableRipple } = ownerState;
      return theme.unstable_sx([
        {
          padding: disableRipple ? 0 : "0.625rem 1.5rem",
          background: "transparent",
          fontWeight: 400,
          "&:hover": {
            background: disableRipple ? "transparent" : "default",
          },
        },
      ]);
    },
    contained: ({ ownerState, theme }) => {
      const { color } = ownerState;
      const { palette } = theme;
      const borderColor =
        !color || color === "inherit"
          ? "inherit"
          : alpha(palette[color].main, 0.8);
      const background =
        !color || color === "inherit"
          ? "transparent"
          : alpha(palette[color].main, 0.1);
      return theme.unstable_sx({
        px: 3,
        height: 56,
        border: `1px solid`,
        borderColor,
        background,
        fontSize: H6_2,
        color: !color || color === "inherit" ? "inherit" : palette[color].main,
        "&:hover": {
          background:
            !color || color === "inherit" ? "inherit" : palette[color].main,
          color:
            !color || color === "inherit"
              ? "inherit"
              : palette[color].contrastText,
        },
      });
    },
    containedSecondary: ({ theme }) => {
      return theme.unstable_sx({
        borderColor: alpha(theme.palette.secondary.main, 0.3),
        "&:hover": {
          color: theme.palette.grey["A700"],
        },
      });
    },
    outlined: ({ ownerState, theme }) => {
      const { color } = ownerState;
      const { palette } = theme;
      const borderColor =
        !color || color === "inherit" ? "inherit" : palette[color].main;
      const background =
        !color || color === "inherit"
          ? "inherit"
          : alpha(palette[color].main, 0.1);
      return theme.unstable_sx({
        px: { xs: 3, md: 2.5, lg: 2 },
        height: 48,
        border: `1px solid`,
        borderColor,
        color: !color || color === "inherit" ? "inherit" : palette[color].main,
        "&:hover": {
          background,
        },
      });
    },
  },
  variants: [
    {
      props: {
        variant: "menulink",
      },
      style: ({ theme }) => {
        return {
          color: theme.palette.grey[500],
          padding: theme.spacing(2),
          paddingLeft: 0,
          paddingRight: 0,
          borderBottom: "2px solid",
          borderColor: "transparent",
          "&.MuiButton-menulinkSecondary, &:hover ": {
            color: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
            background: "none",
          },
        };
      },
    },
    {
      props: {
        variant: "companylink",
      },
      style: ({ theme }) => {
        return {
          [theme.breakpoints.up("md")]: {
            // Set font size for above md screen
            fontSize: "32px",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "24px",
            maxWidth:'100%',
            '& span:first-child':{
              float: 'left',
              width: 'auto',
              maxWidth: 250,
            }
            // paddingRight:theme.spacing(6),
          },
          overflow:'visible',
          whiteSpace: "break-spaces",
          display: "inline-block",
          width: "max-content",
          color: theme.palette.primary.dark,
          padding: 0,
          borderBottom: "2px solid",
          borderColor: "transparent",
          textTransform: "uppercase",
          position: "relative",
          "&.MuiButton-menulinkSecondary, &:hover ": {
            color: theme.palette.primary.dark,
            borderColor: theme.palette.primary.dark,
            background: "none",
          },
          "& .MuiButton-endIcon": {
            position: "absolute",
            top: 0,
            bottom: 0,
            margin: "auto",
            right: "-40px",
            display: "flex",
            alignItems: "center",
            marginLeft:1.25,
            marginTop:'-4px',
            [theme.breakpoints.down("md")]: {
              top: 0,
              alignItems: "flex-start",
              position: 'static',
              margin: 0,
              left: 0,
              float: 'left',
            },
            "& svg": {
              width: 36,
              height: 36,
            },
          },
        };
      },
    },
  ],
  defaultProps: {
    disableElevation: true,
  },
};

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    menulink: true;
    companylink: true;
  }
}
