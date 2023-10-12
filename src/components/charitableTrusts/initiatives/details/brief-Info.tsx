"use client";
import SectionWrapper from "@cc/section-wrapper";
import { alpha, Stack, Typography } from "@mui/material";
import {
  Body2,
  H3,
  H3_2,
  Subtitle2,
} from "@theme/components/typography.fontvariant";
import { MotionTypography } from "@cc/motion-components";
import RoomIcon from "@mui/icons-material/Room";
import infoBanner1 from "@c/charitableTrusts/initiatives/details/images/info-banner-1.jpg";
import infoBanner2 from "@c/charitableTrusts/initiatives/details/images/info-banner-2.jpg";
import { MaterialImage } from "@cc/material-components";

const BriefInfo = () => {
  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            backgroundColor: "primary.main",
            overflow: "visible",
            pb: { md: 4 },
          },
        }}
        sx={{
          pt: { xxl: 10, md: 4, xs: 4 },
          pb: { xs: 0, md: 0, xxl: 0 },
          mb: { xs: -14, md: -16 },
        }}
      >
        <Stack maxWidth={1086} mx={"auto"}>
          <Stack
            direction={"row"}
            columnGap={3}
            mb={{ xs: 1.5, md: 3 }}
            width={"fit-content"}
          >
            <Typography
              variant="body1"
              fontSize={Subtitle2}
              sx={{
                px: 2,
                py: { xs: 0.75, md: 1.5 },
                background: (theme) => alpha(theme.palette.common.white, 0.2),
              }}
            >
              Community Development
            </Typography>
            <MotionTypography
              component={"span"}
              variant="body1"
              fontSize={Body2}
              color={"white"}
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                whiteSpace: "nowrap",
                gap: 0.75,
              }}
            >
              <RoomIcon sx={{ width: { xs: "18px", md: "18px" } }} /> Mumbai,
              Maharashtra
            </MotionTypography>
          </Stack>
          <Stack mb={4}>
            <Typography variant="h1" fontSize={H3}>
              Gram Vikas
            </Typography>
            <MotionTypography
              component={"span"}
              variant="body1"
              fontSize={Body2}
              color={"white"}
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                whiteSpace: "nowrap",
                gap: 0.75,
              }}
            >
              <RoomIcon sx={{ width: { xs: "18px", md: "18px" } }} /> Mumbai,
              Maharashtra
            </MotionTypography>
          </Stack>
          <MaterialImage
            src={infoBanner1}
            alt="Gram Vikas"
            sx={{
              height: { xs: 275, md: "auto" },
              objectFit: "cover",
            }}
          />
        </Stack>
      </SectionWrapper>
      <SectionWrapper color={"grey.600"}>
        <Stack maxWidth={1086} mx={"auto"}>
          <Typography
            variant={"h3"}
            fontSize={H3_2}
            color={"primary.main"}
            mt={{ xs: 12, md: 10 }}
            mb={2}
            textAlign={{ xs: "left", md: "center" }}
            mx={{ xs: 0, md: "auto" }}
            maxWidth={724}
          >
            Bridging the Gap between urban and rural India
          </Typography>
          <Typography variant="body1" mb={{ xs: 5, md: 7 }}>
            Established in 1987 and named after Padma Vibhushan Smt. Jankidevi
            Bajaj, the Jankidevi Bajaj Gram Vikas Sanstha (JBGVS)
            single-mindedly works towards bridging the divide between urban and
            rural India by focusing on integrated rural development activities.
          </Typography>
          <MaterialImage
            src={infoBanner2}
            alt="Gram Vikas"
            sx={{
              mb: 5,
            }}
          />
          <Typography variant="body1" mb={{ xs: 5, md: 7 }}>
            The Sanstha is now actively ushering in change in over 100 villages
            in Pune, Aurangabad and Wardha in Maharashtra, and Sikar in
            Rajasthan through various programs. All JBGVS programs are designed
            in consultation and active participation of the villagers for better
            acceptability and effective implementation. JBGVS’s integrated rural
            development work is aligned with the guidelines of United Nations’
            Millennium Development Goals. The five major focus areas are
            Economic Development, Education, Health & Hygiene, Social
            Development and Environmental Development. Periodical surveys are
            carried out every three years to measure the rate of development
            achieved through the implementation of these programs.
          </Typography>
        </Stack>
      </SectionWrapper>
    </>
  );
};

export default BriefInfo;
