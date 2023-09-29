import SectionWrapper from "@/commonComponents/section-wrapper";
import { Stack, Typography } from "@mui/material";
import { helvetica } from "@/app/font";
import bgCarrying from "@/components/charitableTrusts/images/bgCarrying.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

import {
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import { Body2, H1 } from "@/styles/theme/components/typography.fontvariant";
import { common } from "@mui/material/colors";
import SectionPage from "./section-chari";

const CarryingServies = () => {
  return (
    <>
      <SectionWrapper
        sx={{
          background: `linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%),url(https://res.cloudinary.com/dspbnevuo/image/upload/v1695902855/Frame_1171280553_i532al.png),lightgray 50% / cover no-repeat`,
          height: "464px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <MotionTypography
              variant="body1"
              sx={{
                fontSize: Body2,
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "130%",
                color: "rgba(255, 255, 255, 0.50)",
                fontFamily: helvetica,
              }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Charitable Trusts
            </MotionTypography>
            <ArrowForwardIosIcon
              sx={{
                color: "#fff",
                width: "20px",
                height: "20px",
              }}
            />

            <MotionTypography
              variant="body1"
              sx={{
                fontSize: Body2,
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "130%",
                color: common.white,
              }}
              variants={staggerChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              Jamnalal Bajaj Foundation
            </MotionTypography>
          </Stack>
          <Stack>
            <MotionTypography
              variant="h1"
              sx={{
                fontSize: H1,
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "128%" /* 40.96px */,
                textTransform: "uppercase",
                width: "70%",
              }}
            >
              Carrying forward a legacy of service
            </MotionTypography>
          </Stack>
        </Stack>
      </SectionWrapper>
      <SectionPage />
    </>
  );
};

export default CarryingServies;

const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "150%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};
