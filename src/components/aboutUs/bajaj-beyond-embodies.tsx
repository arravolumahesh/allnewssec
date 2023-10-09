"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import theme from "@/styles/theme";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import grp3 from "@/components/aboutUs/images/grp3.png";
import grp1 from "@/components/aboutUs/images/grp1.png";
import grp2 from "@/components/aboutUs/images/grp2.png";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";
const BajajBeyondEmbodies = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          color: (theme) => theme.palette.background.default,
        },
      }}
    >
      <Stack m={1}>
        <Stack display={"flex"} flexDirection={"row"}>
          <Image src={grp3} alt="" />
          <Stack>
            <Image src={grp1} alt="" />
            <Image src={grp2} alt="" />
          </Stack>
        </Stack>
        <Typography
          sx={{
            alignSelf: "stretch",
            fontSize: H6_2,
            color: (theme) => theme.palette.primary.main,
          }}
          variant="body1"
        >
          Bajaj Beyond embodies a distinctive vision that transcends the
          boundaries of Corporate Social Responsibility (CSR); crafting
          initiatives that allow people to discover, nurture, and excel in their
          abilities. Bajaj Beyond embodies a distinctive vision that transcends
          the boundaries of Corporate Social Responsibility (CSR); crafting
          initiatives that allow people to discover, nurture, and excel in their
          abilities.
        </Typography>
      </Stack>
    </SectionWrapper>
  );
};

export default BajajBeyondEmbodies;
