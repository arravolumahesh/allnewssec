import { Components, Theme } from "@mui/material";

/**
 * @MenuVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Menu component
 *
 * @see https://mui.com/material-ui/react-seslect/#customization
 */
export const MenuVariants: Components<Omit<Theme, "components">>["MuiMenu"] = {
  styleOverrides: {
    paper: {
      borderRadius: 0,
      maxHeight: 280,
      overflowY: "scroll",
      ".MuiMenuItem-root": {
        color: "#575756",
        borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
      },
      "&::-webkit-scrollbar": {
        width: "4px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#DADADA",
      },
    },
  },
};
