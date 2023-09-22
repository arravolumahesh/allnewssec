import {Components, Theme} from "@mui/material";
import {helvetica} from "app/font";

/**
 * @ButtonVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Button component
 *
 * @see https://mui.com/material-ui/react-button/#customization
 */

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    menulink: true;
    companylink: true;
  }
}

export const ButtonVariants: Components<Omit<Theme, "components">>["MuiButton"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { sx: style } = ownerState;
      return theme.unstable_sx([
        {
          ...helvetica.style,
          textTransform: "none",
          whiteSpace: "nowrap",
          lineHeight: "150%",
          fontWeight: 500,
          fontSize: { xs: "16px" },
          textRendering: "optimizeSpeed",
          letterSpacing: "normal",
          height: "inherit",
          fontSmooth: "always",
          minWidth: "fit-content",
          paddingInline: 2,
          paddingBlock: 1,
          borderRadius: 0,
        },
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
    startIcon: ({ theme }) => {
      return theme.unstable_sx({
        // mr: { xs: '0.3rem', sm: '0.3rem', lg: '0.3rem' },
        "& > :nth-of-type(1)": {
          fontSize: {
            // xs: '1.2rem',
          },
        },
      });
    },
    endIcon: ({ theme }) => {
      return theme.unstable_sx({
        // ml: { xs: '0.3rem', sm: '0.3rem', lg: '0.3rem' },
        "& > :nth-of-type(1)": {
          fontSize: {
            // xs: '1.2rem',
          },
        },
      });
    },
    contained: ({ ownerState, theme }) => {
      const { color } = ownerState;
      const { palette } = theme;
      return theme.unstable_sx([
        {
          "&.Mui-disabled": {
            color:
              color === "inherit" || !color
                ? "inherit"
                : palette[color].contrastText,
            backgroundColor:
              color === "inherit" || !color ? "inherit" : palette[color].dark,
            opacity: 0.4,
          },
        },
      ]);
    },
    text: ({ ownerState, theme }) => {
      const { disableRipple, color } = ownerState;
      const { palette } = theme;
      return theme.unstable_sx([
        {
          padding: disableRipple ? 0 : "0.625rem 1.5rem",
          background: "transparent",
          fontWeight: 400,
          border: "none",
          boxShadow: "none",
          "&:hover": {
            background: disableRipple ? "transparent" : "default",
          },
        },
        {
          "&.Mui-disabled": {
            color:
              color === "inherit" || !color ? "inherit" : palette[color].main,
            backgroundColor: "transparent",
            opacity: 0.4,
          },
        },
      ]);
    },
    outlined: ({ ownerState, theme }) => {
      const { color } = ownerState;
      const { palette } = theme;
      return theme.unstable_sx([
        {
          color: color === "inherit" || !color ? "white" : palette[color].main,
          overflow: "hidden",
          borderColor:
            color === "inherit" || !color ? "inherit" : palette[color].main,
        },
        {
          "&.Mui-disabled": {
            color:
              color === "inherit" || !color ? "inherit" : palette[color].main,
            backgroundColor: "transparent",
            borderColor:
              color === "inherit" || !color ? "inherit" : palette[color].main,
            opacity: 0.4,
          },
        },
      ]);
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
            display: "inline",
            // paddingRight:theme.spacing(6),
          },
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
            [theme.breakpoints.down("md")]: {
              top: 0,
              alignItems: "flex-start",
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
};
