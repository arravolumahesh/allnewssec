import { alpha, Box, IconButton } from "@mui/material";
import { useSwiper } from "swiper/react";
import SvgIconArrow from "../icons/arrowIcon";

interface props {
  disablePrev: boolean;
  disableNext: boolean;
  variant?: 'primary' | 'secondary' | null | undefined
}

export default function SlideButtons(prop: props) {
  const { disableNext, disablePrev,variant='primary', ...rest } = prop;
  const swiper = useSwiper();

  return (
    <>
      <Box
        component={"div"}
        sx={(theme) => ({
          display: "flex",
          gap: 2,
          "& .MuiIconButton-root": {
            border: `2px solid ${variant==="primary" ? theme.palette.primary.main : theme.palette.common.white}`,
            width: theme.spacing(6),
            height: theme.spacing(6),
            p: 0,
            "&:hover:after": {
              content: '""',
              position: "absolute",
              top: "4px",
              left: "4px",
              right: "4px",
              bottom: "4px",
              background: alpha(variant==="primary" ? theme.palette.primary.main : theme.palette.common.white, 0.25),
              zIndex: -1,
            },
            "&.Mui-disabled": {
              opacity: 0.5,
            },
            "&:first-child": {
              transform: "scaleX(-1)",
            },
            "&:hover": {
              background: "none",
            },
            "& svg": {
              width: theme.spacing(3.75),
              height: theme.spacing(3.75),
            },
          },
        })}
      >
        <IconButton
          onClick={() => swiper.slidePrev()}
          className="arrow-left arrow"
          disabled={disablePrev}
        >
          <SvgIconArrow fill={variant==="primary" ? "#005DAC" : "white"} />
        </IconButton>
        <IconButton
          onClick={() => swiper.slideNext()}
          className="arrow-right arrow"
          disabled={disableNext}
        >
          <SvgIconArrow fill={variant==="primary" ? "#005DAC" : "white"} />
        </IconButton>
      </Box>
    </>
  );
}