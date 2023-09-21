"use client";
import {
  MotionCard,
  MotionCardProps,
} from "@/commonComponents/motion-elements";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Facebook } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

const Social = () => {
  return (
    <SectionWrapper py={{ xs: 7, md: 12 }} bgcolor={"primary.main"}>
      <Grid2 container>
        <Grid2>
          <SocialCard
            img={
              "https://s3-alpha-sig.figma.com/img/fc1b/dfad/c4c32a16e73b950d463e2853f59a3c99?Expires=1696204800&Signature=D8MXXMWuSFR9OCqGAj1QCFA0UZVdYFV3HhNSPMEky9FhXNz5B6pzJGHbFlPHR0~U-~~FL2Oq8rck2CkGpsXBwTR0kqODKbiX2V0Sxcg37HDX2iGHiid6VkFKvG4k6L5ecOrgpZQWM9jvSnifCF2vx75GpddF2Dj6nFktZAHbHpmEg0QyiMM2uYgECT1RO1VMKqqHw4qgkqXKsYbzVcGOiqyT0he92U6qATaeZitMV-O4UQwXBeBz8uAosTi6n6B5bSutyf6aLeTQtlNh7Y~4snMgAW1Tm0woteIFUVOANIioooOfCdRUGQ-E~KmRuf0FvUpR~Qt6NOBrVj3pVMwCbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            }
            socialLogo={""}
            sx={{
              backgroundPosition: "right top",
              backgroundSize: "270%",
            }}
          />
        </Grid2>
      </Grid2>
    </SectionWrapper>
  );
};

export default Social;

interface SocialCardProps extends Omit<MotionCardProps, "children"> {
  img: string;
  socialLogo: string;
}

const SocialCard = (props: SocialCardProps) => {
  const { img, socialLogo, sx } = props;
  return (
    <MotionCard
      sx={{
        display: "flex",
        position: "relative",
        width: { xs: 163, lg: 289 },
        height: { xs: 163, lg: 289 },
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.67) 100%), url(${img})`,
        // background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 34.18%), url(${img}), lightgray -133.577px -1.973px / 181.45% 101.249% no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 0,
        ...sx,
      }}
    >
      <CardContent
        sx={{
          alignSelf: "flex-end",
          p: 2.5,
          pb: "16px !important",
        }}
      >
        <Facebook sx={{ color: "white" }} fontSize='large' />
      </CardContent>
    </MotionCard>
  );
};
