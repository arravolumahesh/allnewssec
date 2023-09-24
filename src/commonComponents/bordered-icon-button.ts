import { alpha, IconButton, styled, svgIconClasses } from "@mui/material";

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
  }),
);

export default BorderedIconButton;
