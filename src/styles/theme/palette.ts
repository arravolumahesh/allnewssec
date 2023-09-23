import {PaletteOptions, SimplePaletteColorOptions, ThemeOptions,} from "@mui/material";

/**
 * @ThemeOptions['palette']
 * Here we can define the palette
 *
 * @see https://material-ui.com/customization/palette/#palette
 */
export const PaletteTheme = (
  mode: PaletteOptions["mode"],
): ThemeOptions["palette"] => {
  const isLight = mode !== "dark";
  return {
    mode: mode,
    primary: {
      main: "#326CCF", // Got form design
      light: "#e3f2fd",
      dark: "#005dab", // Got form design
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#249DD1",
      500: "#326CCF",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#244A8F",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff", // Got form design
      contrastText: "#fff",
    },
    secondary: {
      main: "#10365D",
      light: "#15283b",
      dark: "#0c1220",
      50: "#15283b",
      100: "#142538",
      200: "#132335",
      300: "#122132",
      400: "#111e2f",
      500: "#101b2c",
      600: "#0f1829",
      700: "#0e1626",
      800: "#0d1423",
      900: "#0c1220",
      A100: "#0c1220",
      A200: "#0d1423",
      A400: "#0e1626",
      A700: "#0f182A", // Got form design
      contrastText: "#fff",
    },
    success: {
      main: "#66bb6a",
      light: "#e8f5e9",
      dark: "#2e7d32",
      "50": "#e8f5e9",
      "100": "#c8e6c9",
      "200": "#a5d6a7",
      "300": "#81c784",
      "400": "#66bb6a",
      "500": "#4caf50",
      "600": "#43a047",
      "700": "#388e3c",
      "800": "#2e7d32",
      "900": "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853",
      contrastText: "#000",
    },
    warning: {
      main: "#ffa726",
      light: "#fff3e0",
      dark: "#f57c00",
      "50": "#fff3e0",
      "100": "#ffe0b2",
      "200": "#ffcc80",
      "300": "#ffb74d",
      "400": "#ffa726",
      "500": "#ff9800",
      "600": "#fb8c00",
      "700": "#f57c00",
      "800": "#ef6c00",
      "900": "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00",
      contrastText: "#000",
    },
    info: {
      main: "#673ab7",
      light: "#ede7f6",
      dark: "#311b92",
      "50": "#ede7f6",
      "100": "#d1c4e9",
      "200": "#b39ddb",
      "300": "#9575cd",
      "400": "#7e57c2",
      "500": "#673ab7",
      "600": "#5e35b1",
      "700": "#512da8",
      "800": "#4527a0",
      "900": "#311b92",
      A100: "#b388ff",
      A200: "#7c4dff",
      A400: "#651fff",
      A700: "#6200ea",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000",
      contrastText: "#fff",
    },
    grey: {
      "50": "#e6e6e6",
      "100": "#cccccc",
      "200": "#b3b3b3",
      "300": "#999999",
      "400": "#808080",
      "500": "#666666",
      "600": "#4d4d4d",
      "700": "#333333",
      "800": "#1a1a1a",
      "900": "#000000",
      A100: "#ffffff",
      A200: "#ffffff",
      A400: "#ffffff",
      A700: "#ffffff",
    },
    get text(): PaletteOptions["text"] {
      return {
        primary: isLight ? this?.common?.white : "#d7dcec",
        secondary: isLight
          ? (this?.primary as SimplePaletteColorOptions).dark
          : "#AEAEAE",
        disabled: isLight ? this?.grey?.["500"] : "#ffffff50",
        body: isLight ? this?.grey?.["900"] : "#d7dcec",
        subtitle: isLight ? this?.grey?.["800"] : "#AEAEAE",
        caption: isLight ? this?.grey?.["700"] : "#ffffff50",
      };
    },
    background: {
      default: isLight ? "#e6e6e6" : "#121212",
      paper: isLight ? "#405A76" : "#1e1e1e",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    get divider() {
      return isLight ? this?.grey?.["200"] : "#424242";
    },
    get gradient() {
      return {
        primary: `linear-gradient(90deg, ${
          (this?.secondary as SimplePaletteColorOptions).dark
        } 0%, ${(this?.secondary as SimplePaletteColorOptions).main} 45%, ${
          (this?.secondary as SimplePaletteColorOptions).dark
        } 100%)`,
        secondary: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      };
    },
  };
};

declare module "@mui/material/styles" {
  interface Palette {
    gradient: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    gradient: {
      primary: string;
      secondary: string;
    };
  }

  /**
   * @mui/material/styles
   * Here we can override the TypeText
   */
  interface TypeText {
    body: string;
    subtitle: string;
    caption: string;
  }
}
