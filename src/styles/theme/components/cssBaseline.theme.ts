import {Components, Theme} from "@mui/material";
import {helvetica} from "app/font";

/**
 * @Mui Baseline
 * Here we can define the cssBaseline theme
 *
 * The cssBaseline theme is used to set the global styles of the CssBaseline component
 *
 * @see https://mui.com/material-ui/react-css-baseline
 */
export const CssBaselineTheme: Components<
  Omit<Theme, "components">
>["MuiCssBaseline"] = {
  styleOverrides: (theme: Theme) => {
    const { primary } = theme.palette;
    return theme.unstable_sx({
      html: {
        WebkitTapHighlightColor: "transparent",
        ...helvetica.style,
      },
      ":root": {
        scrollBehavior: "smooth",
      },
      "*, *::before, *::after": {
        boxSizing: "border-box",
        margin: 0,
        padding: 0,
      },
      "::-webkit-scrollbar": {
        width: "8px",
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "4px",
        backgroundColor: primary.main,
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: primary.dark,
      },
      body: {
        backgroundColor: theme.palette.background.default,
      },
      img:{
        maxWidth:'100%',
        height:'auto'
      }
    });
  },
  defaultProps: {
    enableColorScheme: true,
  },
};
