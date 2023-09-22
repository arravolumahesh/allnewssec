import {alpha, Components, inputBaseClasses, Theme} from "@mui/material";

/**
 * @TextFieldVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the TextField component
 *
 * @see https://mui.com/material-ui/react-text-field/#customization
 */
export const TextFieldVariants: Components<
  Omit<Theme, "components">
>["MuiTextField"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const { color, error, sx: style } = ownerState;
      const { palette } = theme;
      const finalColor = color
        ? palette[error ? "error" : color].main
        : "inherit";
      return theme.unstable_sx([
        {
          overflow: "clip",
          "& .MuiInputBase-root": {
            overflow: "clip",
            height: "48px",
            background: alpha(palette.background.default, 0.8),
            "&.Mui-focused": {
              background: palette.background.default,
            },
          },
          "& .MuiInputAdornment-root": {
            color: finalColor,
          },
          "& .MuiOutlinedInput-root:hover": {
            "input:not([disabled]) ~ .MuiOutlinedInput-notchedOutline": {
              borderColor: finalColor,
            },
            "& .MuiOutlinedInput-notcheOutline": {
              borderColor: finalColor,
            },
          },
        },
        ...(Array.isArray(style) ? style : [style]),
      ]);
    },
  },
  variants: [
    {
      props: { variant: "standard" },
      style: ({ theme }) => {
        return theme.unstable_sx({
          [`.${inputBaseClasses.root}`]: {
            "&::before": {
              content: "none",
            },
            "& input::placeholder": {
              color: theme.palette.grey[600],
              opacity: 1,
            },
          },
        });
      },
    },
  ],
};
