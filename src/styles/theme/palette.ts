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
      main: "#005dac",
      dark: "#003b8e",
      light: "#a2c0e9",
      50: "#ebf1fa",
      100: "#c8d9f1",
      200: "#a2c0e9",
      300: "#79a7e1",
      400: "#588fda",
      500: "#3682ca",
      600: "#005dac",
      700: "#0053a3",
      800: "#004899",
      900: "#003b8e",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#1471ff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#b3b3b3",
      50: "#ffffff",
      100: "#ffffff",
      200: "#ffffff",
      300: "#ffffff",
      400: "#ffffff",
      500: "#e6e6e6",
      600: "#cccccc",
      700: "#b3b3b3",
      800: "#999999",
      900: "#808080",
      A100: "#ffffff",
      A200: "#ffffff",
      A400: "#ffffff",
      A700: "#ffffff",
      contrastText: "#005dac",
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
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#121212",
      A100: "#d5d5d5",
      A200: "#aaaaaa",
      A400: "#616161",
      A700: "#303030",
    },
    get text(): PaletteOptions["text"] {
      return {
        primary: (this?.primary as SimplePaletteColorOptions).contrastText,
        secondary: (this?.secondary as SimplePaletteColorOptions).contrastText,
        disabled: isLight ? this?.grey?.["500"] : "#ffffff50",
      };
    },
    background: {
      default: "#e6e6e6",
      paper: "#FFFFFF",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
    get divider() {
      return this?.grey?.["200"];
    },
    get gradient() {
      return {
        header:
          "linear-gradient(90deg, #0C1220 0%, #10365D 48.7%, #0C1220 100%)",
        darkToLight:
          "linear-gradient(180deg, #0C1425 0%, #162B52 17.68%, #1F3F78 35.36%, #254F98 53.05%, #2B5CB0 70.73%, #2F65C1 89.77%, #316ACB 110.17%, #326CCF 136.02%)",
        lightToDark: "linear-gradient(0deg, #0F182A 35.16%, #244A8F 100%)",
        transparentToDark:
          "linear-gradient(90deg, #0A0A0A 64.71%, rgba(10, 10, 10, 0.00) 84.55%)",
      };
    },
  };
};

declare module "@mui/material/styles" {
  interface Palette {
    gradient: {
      header: string;
      darkToLight: string;
      lightToDark: string;
      transparentToDark: string;
    };
  }

  interface PaletteOptions {
    gradient: {
      header: string;
      darkToLight: string;
      lightToDark: string;
      transparentToDark: string;
    };
  }
}
