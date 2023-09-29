import {
  alpha,
  IconButton,
  styled,
  svgIconClasses,
  SxProps,
  Theme,
} from "@mui/material";
import { ComponentProps } from "react";

const BorderedIconButton = styled(IconButton)(({ theme, color }) =>
  theme.unstable_sx({
    position: "relative",
    color: "inherit",
    border: "1px solid",
    borderColor:
      color === "secondary" ? alpha(theme.palette[color].main, 0.3) : color,
    backdropFilter: "blur(20px)",
    [`& .${svgIconClasses.root}`]: {
      fontSize: "inherit",
    },
    "&[disabled]": {
      pointerEvents: "none",
      opacity: 0.5,
    },
    "&:hover": {
      "&::before": {
        content: '""',
        position: "absolute",
        left: 3,
        top: 3,
        right: 3,
        bottom: 3,
        borderRadius: "inherit",
        backgroundColor: "currentcolor",
        opacity: color === "secondary" ? 0.4 : 0.2,
      },
    },
  })
);

export default BorderedIconButton;

export type BorderedIconButtonProps = ComponentProps<typeof BorderedIconButton>;

export const iconButtonLargeSx: SxProps<Theme> = {
  width: { xs: 32, md: 40, xl: 48 },
  height: { xs: 32, md: 40, xl: 48 },
  "&:hover": {
    "&::before": {
      left: { xs: 3, md: 4, xl: 5 },
      top: { xs: 3, md: 4, xl: 5 },
      right: { xs: 3, md: 4, xl: 5 },
      bottom: { xs: 3, md: 4, xl: 5 },
    },
  },
};
