import {alpha, Components, Theme} from "@mui/material";

/**
 * @DialogVariants
 * Here we can define the variants, defaultProps and styleOverrides
 *
 * The variants are used to override the default styles of the Dialog component
 *
 * @see https://mui.com/material-ui/react-dialog/#customization
 */
export const DialogVariants: Components<Omit<Theme, "components">>["MuiDialog"] = {
  defaultProps: {
    PaperProps: {
      root: {
        sx: {
          borderRadius: 0,
        },
      },
    },
    slotProps: {
      backdrop: {
        sx: (theme) => {
          return {
            backgroundColor: alpha(theme.palette.common.black, 0.5),
            backdropFilter: "blur(2px)",
          };
        },
      },
    },
  },
};
