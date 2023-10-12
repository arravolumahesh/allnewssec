import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@cc/arrow-swiper-with-info-section";
import ArrowSlideInfo from "@cc/cards/arrow-slide-info";
import { ArrowSlideDefaultImageProps } from "@cc/cards/arrow-slide-default-image";
import actOfProgress from "@c/charitableTrusts/hamaara-sapna/images/act-of-progress.jpg";
import React from "react";
import { H3_2 } from "@theme/components/typography.fontvariant";

const ActOfProgress = () => {
  return (
    <ArrowSwiperWithInfoSection
      data={data}
      SwiperKey={ActOfProgress.name}
      SectionWrapperProps={{
        color: "secondary.main",
        SectionHeaderProps: {
          title: "ACTS OF PROGRESS, ONE AT A TIME",
        },
        SectionProps: {
          bgcolor: "primary.main",
        },
      }}
      SwiperProps={{
        navigation: true,
      }}
      ArrowSlideInfoProps={{
        SlotProps: {
          TitleTypographyProps: {
            fontSize: H3_2,
          },
          ButtonProps: {
            href: "#",
            variant: "outlined",
            color: "secondary",
          },
        },
      }}
    />
  );
};

export default ActOfProgress;

const data: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    title: "TATA Mumbai Marathon 2023",
    description:
      "150 beneficiaries from Hamaara Sapna participated in the Mumbai Marathon 2023, baggiang several prizes.",
    image: actOfProgress,
    btnText: "Learn More",
    btnLink: "/",
  },
  {
    title: "TATA Mumbai Marathon 2023",
    description:
      "150 beneficiaries from Hamaara Sapna participated in the Mumbai Marathon 2023, baggiang several prizes.",
    image: actOfProgress,
    btnText: "Learn More",
    btnLink: "/",
  },
];
