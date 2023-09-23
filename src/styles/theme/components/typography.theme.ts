import {Components, Theme, ThemeOptions} from "@mui/material";
import {helvetica} from "app/font";
import {Body1, Body2, Button, H1, H2, H3, H4, H5, H6,} from "@theme/components/typography.fontvariant";

/**
 * @ThemeOptions['typography']
 * Here we can define the typography theme
 *
 * @see https://material-ui.com/customization/typography
 */
export const TypographyTheme: ThemeOptions["typography"] = {
  allVariants: {
    fontSmooth: "always",
    textRendering: "optimizeSpeed",
    lineHeight: "normal",
    letterSpacing: "normal",
    fontStretch: "normal",
    position: "relative",
    fontSize: "inherit",
    ...helvetica.style,
  },
  fontSize: 16,
  htmlFontSize: 16,
  fontFamily: helvetica.style.fontFamily,
};

/**
 * @TyporaphyVariants['MuiTypography']
 *
 * Here we can define the typography Variants
 *
 * The variants are used to override the default styles of the Typography component
 *
 * @see https://material-ui.com/customization/typography
 */
export const TypographyVariants: Components<
  Omit<Theme, "components">
>["MuiTypography"] = {
  styleOverrides: {
    root: ({ theme }) => {
      return theme.unstable_sx({
        color: "inherit",
        fontWeight: "inherit",
      });
    },
    h1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H1,
        fontWeight: 700,
      });
    },
    h2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H2,
        fontWeight: 700,
      });
    },
    h3: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H3,
        fontWeight: 700,
      });
    },
    h4: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H4,
        fontWeight: 700,
        lineHeight: "140%",
      });
    },
    h5: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H5,
        fontWeight: 700,
        lineHeight: "150%",
      });
    },
    h6: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H6,
        fontWeight: 700,
      });
    },
    body1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: Body1,
        lineHeight: "150%",
      });
    },
    body2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: Body2,
        lineHeight: "150%",
        fontWeight: 500,
      });
    },
    subtitle1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "12px", lg: "14px" },
        lineHeight: "150%",
      });
    },
    subtitle2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "10px", lg: "12px" },
        lineHeight: "150%",
      });
    },
    caption: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "10px", lg: "10px" },
        lineHeight: "150%",
      });
    },
    gutterBottom: ({ theme }) => {
      return theme.unstable_sx({
        mb: { xs: 1, lg: 1.25 },
      });
    },
    button: ({ theme }) => {
      return theme.unstable_sx({
        textTransform: "capitalize",
        fontSize: Button,
      });
    },
  },
};
