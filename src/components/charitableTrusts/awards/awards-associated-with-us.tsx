"use client";
import SectionWrapper from "@cc/section-wrapper";
import EnhancedSwiper, { EnhancedSwiperProps } from "@cc/enhanced-swiper";
import { StaticImageData } from "next/image";
import { Stack, Theme, Typography } from "@mui/material";
import awardAssociatedWith1 from "./images/award-associated-with-1.jpg";
import awardAssociatedWith2 from "./images/award-associated-with-2.jpg";
import awardAssociatedWith3 from "./images/award-associated-with-3.jpg";
import { Navigation } from "swiper/modules";
import SwiperNavigationButton from "@cc/swiper-navigation-button";

const AwardsAssociatedWithUs = () => {
  return (
    <SectionWrapper
      color={"primary.main"}
      SectionHeaderProps={{
        title: "Awards associated with us",
      }}
    >
      <EnhancedSwiper
        data={slideData}
        SlideComponent={InfoCard}
        {...swiperProps}
      />
    </SectionWrapper>
  );
};

export default AwardsAssociatedWithUs;

export interface InfoCardProps {
  title: string;
  description: string;
  bgImage: string | StaticImageData;
}

const InfoCard = (props: InfoCardProps) => {
  const { title, description, bgImage } = props;
  return (
    <Stack
      sx={{
        width: { xs: 342, md: 421 },
        height: { xs: 450, md: 510 },
        background: `url(${
          typeof bgImage === "string" ? bgImage : bgImage.src
        })`,
      }}
    >
      <Stack
        sx={{
          background: (theme: Theme) =>
            theme.palette.gradient.transparentToDark,
          color: "secondary.main",
          height: 0.5,
          mt: "auto",
          px: 2,
          py: 4,
        }}
      >
        <Typography variant={"h6"} maxWidth={314} mt={"auto"}>
          {title}
        </Typography>
        <Typography variant="subtitle2" component={"p"}>
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

const slideData: InfoCardProps[] = [
  {
    bgImage: awardAssociatedWith1,
    title: "Jankidevi Bajaj Puraskar",
    description:
      "The IMC Ladies' Wing, led by Mrs. Kiran Bajaj, established the Jankidevi Bajaj Award in 1993. This award acknowledges women entrepreneurs advancing rural India, named after Padma Vibhushan Jankidevi Bajaj, a strong advocate of women's empowerment and progress.",
  },
  {
    bgImage: awardAssociatedWith2,
    title: "National Quality Award",
    description:
      "Started in 1995, the IMC Ramkrishna Bajaj National Quality Award enjoys the stature of being one of India's most prestigious quality awards. Promoting & recognizing quality awareness and practices in Indian business and asserting its importance in global competitiveness.",
  },
  {
    bgImage: awardAssociatedWith3,
    title: "Jamnalal Bajaj Uchit Vyavhar Puraskar",
    description:
      "Established in 1988, the Bajaj Group introduced the Jamnalal Bajaj Uchit Vyavhar Puraskar, honoring businesses that uphold ethical practices in support of the Council for Fair Business Practices in 1966. ",
  },
];

const swiperProps: Omit<EnhancedSwiperProps, "data" | "SlideComponent"> = {
  slidesPerView: "auto",
  modules: [Navigation],
  SlideWrapperProps: {
    sx: {
      width: "auto",
      mr: { xs: 2, md: 3 },
    },
  },
  sx: {
    overflow: {
      xs: "visible",
      wide: "hidden",
    },
    width: "100%",
    "& .swiper-wrapper": {
      transitionTimingFunction: "linear !important",
    },
  },
  navigation: {
    enabled: true,
    prevEl: ".button-prev",
    nextEl: ".button-next",
  },
  Slots: {
    ContainerEndChildren: (
      <SwiperNavigationButton
        width={"fit-content"}
        PrevButtonProps={{
          className: "button-prev",
        }}
        NextButtonProps={{
          className: "button-next",
        }}
      />
    ),
    ContainerEndProps: {
      sx: {
        mt: 4,
        flexDirection: "row",
        justifyContent: { xs: "center", md: "flex-end" },
      },
    },
  },
};
