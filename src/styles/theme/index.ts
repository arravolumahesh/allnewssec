import { ThemeOptions } from "@mui/material/styles";
import { PaletteTheme } from "@theme/palette";
import { BreakpointTheme } from "@theme/breakpoint.theme";
import { TypographyTheme } from "@theme/components/typography.theme";
import { ComponentTheme } from "@theme/components";
import { createTheme } from "@mui/material";

const theme: ThemeOptions = createTheme({
  palette: PaletteTheme("light"),
  breakpoints: BreakpointTheme,
  typography: TypographyTheme,
  components: ComponentTheme,
});

export default theme;
