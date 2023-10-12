"use client";
import CommonBreadcrumb from "@cc/breadcrumb";
import { Stack } from "@mui/material";
import { MotionTypography } from "@cc/motion-components";
import SectionWrapper from "@cc/section-wrapper";
import banner from "./images/wardha-banner.jpg";

const WardhaBanner = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) =>
            `${theme.palette.gradient.darkToTransparentRight}, url(${banner.src}) no-repeat`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        },
      }}
      py={{ xs: 2, md: 4 }} // Todo: basePy
      pb={{ xs: 4, md: 8 }}
    >
      <CommonBreadcrumb />
      <Stack mt={{ xs: 18.125, md: 23.5 }} maxWidth={863} rowGap={3}>
        <MotionTypography variant="h1">
          Wardha - A sanctuary of hope & change
        </MotionTypography>
      </Stack>
    </SectionWrapper>
  );
};

export default WardhaBanner;
