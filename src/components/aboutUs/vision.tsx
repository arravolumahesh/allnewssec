import {
  MotionImage,
  MotionTypography,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";
import { Stack } from "@mui/material";
import React from "react";
import OFA1 from "@c/ourCompanies/images/OFA1.png";
import OFA2 from "@c/ourCompanies/images/OFA2.png";
import OFA3 from "@c/ourCompanies/images/OFA3.png";

const Vision = () => {
  return (
    <SectionWrapper color={"primary.main"}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        columnGap={2}
        rowGap={3}
      >
        <Stack
          direction={"row"}
          columnGap={{ xs: 0.5, md: 1 }}
          width={{ xs: 1, md: "max-content" }}
          minWidth={{ xs: 1, md: "max-content" }}
        >
          <MotionImage
            src={OFA1}
            alt='OFA1'
            sx={{
              width: 0.5,
              maxWidth: { xs: "none", md: 253 },
              height: { xs: 1, lg: 292 },
              objectFit: "cover",
            }}
          />
          <Stack
            width={0.5}
            rowGap={{ xs: 0.5, md: 1 }}
            maxWidth={{ xs: "none", md: 253 }}
          >
            <MotionImage
              src={OFA2}
              alt=''
              sx={{
                width: 1,
                height: { xs: 0.5, lg: 143 },
                objectFit: "cover",
              }}
            />
            <MotionImage
              src={OFA3}
              alt=''
              sx={{
                width: 1,
                height: { xs: 0.5, lg: 143 },
                objectFit: "cover",
              }}
            />
          </Stack>
        </Stack>
        <MotionTypography variant='body1' fontSize={H6_2} maxWidth={741}>
          Bajaj Beyond embodies a distinctive vision that transcends the
          boundaries of Corporate Social Responsibility (CSR); crafting
          initiatives that allow people to discover, nurture, and excel in their
          abilities.
        </MotionTypography>
      </Stack>
    </SectionWrapper>
  );
};

export default Vision;
