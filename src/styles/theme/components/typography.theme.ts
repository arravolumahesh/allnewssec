import {Components, Theme, ThemeOptions} from "@mui/material";
import {helvetica} from "app/font";
import {
  Body1,
  Body2,
  Button,
  Caption,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Subtitle1,
  Subtitle2,
} from "@theme/components/typography.fontvariant";

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
        lineHeight: "128%",
      });
    },
    h1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H1,
        textTransform: "uppercase",
      });
    },
    h2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H2,
        textTransform: "uppercase",
      });
    },
    h3: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H3,
        textTransform: "uppercase",
      });
    },
    h4: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H4,
        textTransform: "uppercase",
      });
    },
    h5: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H5,
        textTransform: "uppercase",
      });
    },
    h6: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: H6,
        textTransform: "uppercase",
      });
    },
    body1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: Body1,
      });
    },
    body2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: Body2,
      });
    },
    subtitle1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: Subtitle1,
      });
    },
    subtitle2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: Subtitle2,
      });
    },
    caption: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: Caption,
      });
    },
    gutterBottom: ({ theme }) => {
      return theme.unstable_sx({
        mb: { xs: 2, md: 2.5, lg: 3 },
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
