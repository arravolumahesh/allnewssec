"use client";
import InfoSlides from "@/commonComponents/cards/info-slides";
import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import SectionWrapper from "@/commonComponents/section-wrapper";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";
import { H6_3 } from "@/styles/theme/components/typography.fontvariant";
import { Divider, Stack, Typography, alpha } from "@mui/material";
import React from "react";
import { Navigation } from "swiper/modules";

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
      <EnhancedSwiper
        data={ImpactData}
        SlideComponent={ImpactSlides}
        centeredSlides
        slidesPerView={"auto"}
        spaceBetween={76}
        SlideWrapperProps={{
          sx: {
            width: 423,
          },
        }}
        navigation={{
          nextEl: ".swiper-impact-next",
          prevEl: ".swiper-impact-prev",
        }}
        modules={[Navigation]}
        Slots={{
          ContainerStartChildren: (
            <SwiperNavigationButton
              PrevButtonProps={{
                className: "swiper-impact-prev",
                sx: {
                  zIndex: 2,
                },
              }}
              NextButtonProps={{
                className: "swiper-impact-next",
                sx: {
                  ml: "0 !important",
                  zIndex: 2,
                },
              }}
              alignItems={"center"}
              justifyContent={"space-between"}
              width={1}
              mb={"-50px"}
              divider={
                <Divider
                  sx={{
                    width: "calc(100% - 96px)",
                    ml: "0 !important",
                    borderBottom: "2px dashed #ffffff4d",
                  }}
                />
              }
            />
          ),
        }}
      />
    </SectionWrapper>
  );
};

export default Impact;

type ImpactSlidesProps = {
  date: string;
  image: string;
  description: string;
};

const ImpactSlides = (props: ImpactSlidesProps) => {
  const { date, image, description } = props;
  return (
    <Stack rowGap={5.5} alignItems={"center"}>
      <Typography
        py={{ xs: 0.75, md: 2 }}
        px={{ xs: 2, md: 3 }}
        bgcolor={"#455675"}
        width={"max-content"}
        variant='body2'
      >
        {date}
      </Typography>
      <InfoSlides
        img={image}
        description={description}
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
            aspectRatio: 1.54,
            objectFit: "cover",
          },
        }}
        ContentWrapperProps={{
          textAlign: "center",
        }}
      />
    </Stack>
  );
};

const ImpactData: Array<ImpactSlidesProps> = [
  {
    date: "1987",
    image:
      "https://s3-alpha-sig.figma.com/img/f383/3578/7e4cfb7219321a66a455905c925c891f?Expires=1698019200&Signature=q1iel8YZazpGsKmweH2XKGhik-YQtSkW6pSj8-s0NwK7Gk0BjTxW1dP9ODcQrErKuriLu3XnXqmEyUYJKfP3zj8xx4UBkN-vOmZ97pK9-k8keq~2imynhJrYgFoBDGGEVNe4zQxPlmZ~CH~qBz6E44~dWbRBk3Dfcd3vCiIKr4J6hGJfqX0J8qwAFsNLvlPmxT9lJ84yuhwpPhnAOystahK462BYMeCQuCyBMnN5sZD4wZyVn7IbG4UWH-w86~~tEryYeZDowbRc8LEHlVstZqitJvRaU1Y6h63S4GlEpOioLN7jY8w3A0BAWWLVNM36m3A60lvlYPsymCkvcw2SPw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description:
      "Established in memory of Jamnalal Bajaj, the Jamnalal Bajaj Foundation promotes Gandhiji's constructive programs and honors individuals aligned with its philosophy and causes.",
  },
  {
    date: "1988",
    image:
      "https://s3-alpha-sig.figma.com/img/6a21/3768/5e5ab325c36221449ffff33e44584372?Expires=1698019200&Signature=B8RjtaVFLJGZfomq9Q7M~Ty3UKCxBpF3FQ56r3NjQiJFKD59bczcyiIzEXKQnv0ytw-DV0VHKrC~dqu9xD8lzvT3nJbZeSGpuUSt5nro2CyY2wNIYSTSMpbIf1ZnVxDASHhHRkzvvQSlw1zknM2SNempqP4~v-OEIpE3jO~RceAfilkPjY9LrkgIxohWl0mttYc7ZVEXAu9eS-agX6ow-zxINkPy8lmBXBwCOEbO0GpFA7fmuZ5X0amozDEvbV~fkUC6y1v7uSmjjdIsFL~a8Q4ohnnycSmJlROzI8loXdP8RKjx69yABwlBt7iP6XrJk3ABLMmDBlM~wvIQ5A8plg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description:
      "Established in memory of Jamnalal Bajaj, the Jamnalal Bajaj Foundation promotes Gandhiji's constructive programs and honors individuals aligned with its philosophy and causes.",
  },
  {
    date: "1989",
    image:
      "https://s3-alpha-sig.figma.com/img/c6b2/bf38/09cdcc864bc5eec8775af0ced1dabb16?Expires=1698019200&Signature=VnQtY5ylUEdgIxIWIOKve16zpEjAp10p4W9DCYL4LacHgvIlu0~89ffT0sA10I2nyx7OHrBSOLGvijjyPJtTAmRLFpX77cLFK8h3kT89kGFC36e~WvoCa0MpHsow3FyehDIxZ-lnMeOz4fdAo~HlgOaMtWKCfkWY2y2uwdf6nWV3p1Zu5XROKWk2JokP2XzhCMH-EBW5-Ij2TonoUH70A7rv8qL7sTkazq~GnyRbq-bHQLpGkjDkKuE9xxFPQfb-bsYCLGR5Zz3Mm~DcotLlHnGbB1xEh5QVucbaf6wy39V5A22yQ8I6~aa0tF~P4lzSe1NMocHP5dJtC7SfFCFqKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description:
      "Established in memory of Jamnalal Bajaj, the Jamnalal Bajaj Foundation promotes Gandhiji's constructive programs and honors individuals aligned with its philosophy and causes.",
  },
  {
    date: "1990",
    image:
      "https://s3-alpha-sig.figma.com/img/53bc/89a6/0343d51c4250d1d248d8ae6e2f8e81c1?Expires=1698019200&Signature=iLV8-QBqyBEIPHfusn4CIwK21SfDfUm2RCwwE6qwHZ3MYXLfdHDHjjIs7pIhrj9BgCH5--ZCwwFulrcYZ3xzEzMitph~9q7utqKdnOGLv1tss2mRhVhDZqCTuXIZmTn-utw2UypO6HQCwVFLgqPaAIx08kxHQb~npLTh6daX~Q3kwN2uBsJJUJjqcy9vRs8e0VdaVG5hjNPyhVg9hO5kP-Pi1H~8wSGSpsXH3i1FQiRXm77eSW9r4kikY~l6XtPZZUDIUTycq1KkoTshED4pZQ08eq~gQmj~AuEIcyCANjA-jsPwowNdQFmXz4BcEWeALN2UIQ4NZxJgesL-GhRRpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    description:
      "Established in memory of Jamnalal Bajaj, the Jamnalal Bajaj Foundation promotes Gandhiji's constructive programs and honors individuals aligned with its philosophy and causes.",
  },
];
