"use client";
import { Stack } from "@mui/material";
import OurStories from "@/components/home/our-stories";
import KeyHighlights from "@/components/home/key-highlights";

const OurStoriesAndKeyHighlights = () => {
  return (
    <Stack
      width={1}
      sx={{
        overflow: "hidden",
        background: (theme) => theme.palette.gradient.darkToLight,
        position: "relative",
        "&:before": {
          content: '""',
          position: "absolute",
          width: "204%",
          height: "auto",
          aspectRatio: 4.6,
          bottom: { xs: "34.5%", md_lg: "29%" },
          right: 0,
          background: "url(/beyond.svg) space", //space
          backgroundSize: "contain",
          transform: "translate3d(0, 0, 0)",
          animation: "scroll 15s infinite linear",
          "@keyframes scroll": {
            "100%": {
              WebkitTransform: "translateX(50.5%)",
            },
          },
        },
      }}
    >
      <OurStories />
      <KeyHighlights />
    </Stack>
  );
};

export default OurStoriesAndKeyHighlights;
