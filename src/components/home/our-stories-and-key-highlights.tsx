"use client";
import { Stack } from "@mui/material";
import OurStories from "@/components/home/our-stories";
import KeyHighlights from "@/components/home/key-highlights";

const OurStoriesAndKeyHighlights = () => {
  return (
    <Stack
      width={1}
      sx={{
        background: (theme) => theme.palette.gradient.darkToLight,
      }}
    >
      <OurStories />
      <KeyHighlights />
    </Stack>
  );
};

export default OurStoriesAndKeyHighlights;
