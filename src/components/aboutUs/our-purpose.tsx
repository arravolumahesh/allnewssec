"use client";
import { videoBannerTransition } from "@/commonComponents/animations";
import { MaterialImage } from "@/commonComponents/material-components";
import {
  MotionBox,
  MotionTypography,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { H3_2, H6_2 } from "@/styles/theme/components/typography.fontvariant";
import { PlayCircle } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const OurPurpose = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.darkToLight,
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            width: "204%",
            height: "auto",
            aspectRatio: 4.6,
            top: 0,
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
        },
      }}
      color={"common.white"}
      SectionHeaderProps={{
        title: "Our Purpose",
        description:
          "Our mission is to elevate our nation's potential by upskilling individuals and communities, for a brighter tomorrow.",
        DescriptionTypographyProps: {
          maxWidth: 646,
          fontSize: H6_2,
        },
      }}
    >
      <Stack textAlign={"center"} width={1} maxWidth={1051} m={"auto"}>
        <MotionBox
          position={"relative"}
          width={1}
          sx={{ aspectRatio: 2.04 }}
          {...videoBannerTransition}
        >
          <MaterialImage
            src={
              "https://s3-alpha-sig.figma.com/img/990d/a72e/a1d7405cd257a822e7f536c49a002067?Expires=1698019200&Signature=nuN8hv5zjJAmzWwOuh1uz0vQBQsBQa2st6M3Df-LzUIAROTHFO~F4NqQ1SqCpHAVar5KalHxUZ3QbfAtaZqa88ONg-GwWbBLh3AVtC8LgVC39WRjqbqP8EGbXKLzGxAkPTCpi7xALbpY86YDb8A730aiPyi~lW7tqaZa6ZJOAiKydv6aveXZI5RNCOnn8fK-TS92qBJGeHgKXYpoXaT1edYcQnYMlMEorcZlK~fH9KLh5kTJ6904F0YrbpwDVEdda8tM8k8jFDIYYQnJ4yGxRysVpNZVBYiSTzmZp5ecXXEokT4qr521fw~NT-lahHvXDOwJV-8rt~VwL-cG9Rumog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            alt='Video Thumbnail'
            fill
            sx={{ width: "100%", objectFit: "cover" }}
          />
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              p: 0,
              bgcolor: "white",
              "&:hover": {
                bgcolor: "white",
              },
            }}
          >
            <PlayCircle
              sx={{
                width: { xs: 60, md: 100 },
                height: { xs: 60, md: 100 },
                fill: "#005dac",
              }}
            />
          </IconButton>
        </MotionBox>
      </Stack>
    </SectionWrapper>
  );
};

export default OurPurpose;
