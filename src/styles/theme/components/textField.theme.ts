import {
  alpha,
  Components,
  inputAdornmentClasses,
  inputBaseClasses,
  outlinedInputClasses,
  selectClasses,
  Theme,
} from "@mui/material";

/**
 * @TextFieldVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the TextField component
 *
 * @see https://mui.com/material-ui/react-text-field/#customization
 */
export const TextFieldVariants: Components<Omit<Theme, "components">>["MuiTextField"] =
  {
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const { color, error, value, sx } = ownerState;
        const { palette } = theme;
        const finalColor = color
          ? palette[error ? "error" : color].main
          : "inherit";
        return theme.unstable_sx([
          {
            overflow: "clip",
            [`& .${inputBaseClasses.root}`]: {
              overflow: "clip",
              height: "48px",
            },
            [`& .${inputAdornmentClasses.root}`]: {
              color: finalColor,
            },
            [`& .${outlinedInputClasses.root}:hover`]: {
              [`input:not([disabled]) ~ .${outlinedInputClasses.notchedOutline}`]:
                {
                  borderColor: finalColor,
                },
              [`& .${outlinedInputClasses.notchedOutline}`]: {
                borderColor: finalColor,
              },
            },
            [`& .${selectClasses.select}`]: {
              color:
                finalColor === "inherit"
                  ? finalColor
                  : alpha(finalColor, value ? 1 : 0.6),
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
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
      {
        props: { variant: "outlined" },
        style: ({ theme }) => {
          return theme.unstable_sx({
            "*": { borderRadius: 0 },
            [`.${inputBaseClasses.root}`]: {
              height: "auto",
              overflow: "unset",
              "& .Mui-disabled": {
                opacity: "0.5 !important",
                WebkitTextFillColor: "white !important",
              },
              "& input::placeholder": {
                opacity: 0.6,
              },
            },
            [`.${outlinedInputClasses.notchedOutline}`]: {
              borderRadius: 0,
              borderColor: "white !important",
            },
          });
        },
      },
    ],
  };
