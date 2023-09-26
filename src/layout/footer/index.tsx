"use client";
import SectionWrapper from "@cc/section-wrapper";
import SocialLinks from "@/layout/footer/social-links";
import CommonLinks from "@/layout/footer/common-links";
import Copyright from "@/layout/footer/copyright";
import { alpha, Divider, SxProps, Theme } from "@mui/material";

const Footer = () => {
  return (
    <SectionWrapper
      color={"secondary.main"}
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.lightToDark,
        },
      }}
      rowGap={{ xs: 0, sm: 7, lg: 9 }}
      divider={<Divider sx={dividerSx} />}
    >
      <SocialLinks />
      <CommonLinks />
      <Copyright />
    </SectionWrapper>
  );
};

export default Footer;

const dividerSx: SxProps<Theme> = (theme) => {
  return {
    display: { xs: "block", sm: "none" },
    borderColor: alpha(theme.palette.common.white, 0.2),
    mt: "32px !important",
    mb: "20px !important",
  };
};
