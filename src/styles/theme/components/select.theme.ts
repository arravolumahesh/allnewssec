import {
  Components,
  Theme,
  inputBaseClasses,
  outlinedInputClasses,
} from "@mui/material";

/**
 * @SelectVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Select component
 *
 * @see https://mui.com/material-ui/react-seslect/#customization
 */
export const SelectVariants: Components<
  Omit<Theme, "components">
>["MuiSelect"] = {
  styleOverrides: {
    icon: {
      color: "white",
    },
  },
  variants: [
    {
      props: { variant: "outlined", color: "primary" },
      style: ({ theme }) => {
        return theme.unstable_sx({
          "& .MuiSvgIcon-root": {
            color: "primary.main",
            transition: "all 0.4s ease-in-out",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "primary.main",
          },
        });
      },
    },
    {
      props: { variant: "outlined", color: "secondary" },
      style: ({ theme }) => {
        return theme.unstable_sx({
          "*": { borderRadius: 0 },
          [`.${inputBaseClasses.root}`]: {
            height: "auto",
            overflow: "unset",
          },
          [`.${outlinedInputClasses.notchedOutline}`]: {
            borderRadius: 0,
            borderColor: "white",
          },
        });
      },
    },
  ],
};
