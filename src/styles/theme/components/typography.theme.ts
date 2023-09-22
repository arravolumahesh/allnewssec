import {Components, Theme, ThemeOptions} from "@mui/material";
import {helvetica} from "app/font";

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
    root: ({ ownerState, theme }) => {
      const isDark = theme.palette.mode === "dark";
      const isHeading = ownerState.variant?.startsWith("h");
      return theme.unstable_sx({
        color: "inherit",
        fontWeight: "inherit",
        filter: isDark && !isHeading ? "contrast(0.85)" : "contrast(0.95)",
      });
    },
    h1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "32px", lg: "64px" },
        fontWeight: 700,
      });
    },
    h2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "28px", lg: "56px" },
        fontWeight: 700,
      });
    },
    h3: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "24px", lg: "48px" },
        fontWeight: 700,
      });
    },
    h4: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "24px", lg: "32px" },
        fontWeight: 700,
        lineHeight: "140%",
      });
    },
    h5: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "20px", lg: "24px" },
        fontWeight: 700,
        lineHeight: "150%",
      });
    },
    h6: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "18px", lg: "24px" },
        fontWeight: 700,
      });
    },
    body1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "16px", lg: "18px" },
        lineHeight: "150%",
      });
    },
    body2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "14px", lg: "16px" },
        lineHeight: "150%",
        fontWeight: 500,
      });
    },
    subtitle1: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "12px", lg: "14px" },
        lineHeight: "150%",
        color: "text.subtitle",
      });
    },
    subtitle2: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "10px", lg: "12px" },
        lineHeight: "150%",
        color: "text.subtitle",
      });
    },
    caption: ({ theme }) => {
      return theme.unstable_sx({
        fontSize: { xs: "10px", lg: "10px" },
        lineHeight: "150%",
        color: "text.caption",
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
      });
    },
  },
};
