import { alpha, IconButton, styled, svgIconClasses } from "@mui/material";

const BorderedIconButton = styled(IconButton)(({ theme, color }) =>
  theme.unstable_sx({
    position: "relative",
    color: "inherit",
    border: "1px solid",
    borderColor:
      !color || color === "inherit"
        ? "inherit"
        : color === "default"
        ? "default"
        : alpha(theme.palette[color].main, 0.3),
    backdropFilter: "blur(20px)",
    [`& .${svgIconClasses.root}`]: {
      fontSize: 18,
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
        opacity: 0.4,
      },
    },
  }),
);

export default BorderedIconButton;
