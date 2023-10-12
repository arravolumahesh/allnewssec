"use client";
import ReactiveBreadcrumb from "@cc/breadcrumb";
import { Stack } from "@mui/material";
import { MotionTypography } from "@cc/motion-components";
import SectionWrapper from "@cc/section-wrapper";
import banner from "./images/charitable-trusts-initiative-banner.jpg";

const CharitableTrustsInitiativesBanner = () => {
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
      <ReactiveBreadcrumb />
      <Stack mt={{ xs: 18.125, md: 23.5 }} maxWidth={863} rowGap={3}>
        <MotionTypography variant="h1">
          Carrying forward
          <br />a legacy of service
        </MotionTypography>
      </Stack>
    </SectionWrapper>
  );
};

export default CharitableTrustsInitiativesBanner;
