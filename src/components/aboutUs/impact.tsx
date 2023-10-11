"use client";
import InfoSlides from "@/commonComponents/cards/info-slides";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { H6_3 } from "@/styles/theme/components/typography.fontvariant";
import { Stack, Typography, alpha } from "@mui/material";
import React from "react";

const Impact = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: (theme) => theme.palette.gradient.lightToDark,
        },
      }}
      SectionHeaderProps={{
        title: "Over 97 years of Impact",
        description:
          "The Bajaj Group, founded in 1926 by Jamnalal Bajaj, exemplifies innovation, ethics, and social responsibility. Its legacy thrives on ethical practices and transformative initiatives in automobiles, finance, and consumer goods.",
        TitleTypographyProps: {
          variant: "h3",
        },
        DescriptionTypographyProps: {
          fontSize: H6_3,
          maxWidth: 866,
        },
      }}
    >
      <Stack rowGap={5.5} alignItems={"center"}>
        <Typography
          py={{ xs: 0.75, md: 2 }}
          px={{ xs: 2, md: 3 }}
          bgcolor={alpha("#fff", 0.2)}
          width={"max-content"}
          variant='body2'
        >
          1998
        </Typography>
        <InfoSlides
          img={
            "https://s3-alpha-sig.figma.com/img/f383/3578/7e4cfb7219321a66a455905c925c891f?Expires=1698019200&Signature=q1iel8YZazpGsKmweH2XKGhik-YQtSkW6pSj8-s0NwK7Gk0BjTxW1dP9ODcQrErKuriLu3XnXqmEyUYJKfP3zj8xx4UBkN-vOmZ97pK9-k8keq~2imynhJrYgFoBDGGEVNe4zQxPlmZ~CH~qBz6E44~dWbRBk3Dfcd3vCiIKr4J6hGJfqX0J8qwAFsNLvlPmxT9lJ84yuhwpPhnAOystahK462BYMeCQuCyBMnN5sZD4wZyVn7IbG4UWH-w86~~tEryYeZDowbRc8LEHlVstZqitJvRaU1Y6h63S4GlEpOioLN7jY8w3A0BAWWLVNM36m3A60lvlYPsymCkvcw2SPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
          description="Established in memory of Jamnalal Bajaj, the Jamnalal Bajaj Foundation promotes Gandhiji's constructive programs and honors individuals aligned with its philosophy and causes."
          CardWrapperProps={{
            direction: "column",
            rowGap: 2,
            width: 423,
          }}
          ImageProps={{
            width: 423,
            height: 274,
            sx: {
              width: "100%",
            },
          }}
          ContentWrapperProps={{
            textAlign: "center",
          }}
        />
      </Stack>
    </SectionWrapper>
  );
};

export default Impact;
