import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@/commonComponents/arrow-swiper-with-info-section";
import { ArrowSlideDefaultImageProps } from "@/commonComponents/cards/arrow-slide-default-image";
import ArrowSlideInfo from "@/commonComponents/cards/arrow-slide-info";
import { H5_1 } from "@/styles/theme/components/typography.fontvariant";
import keyHighlights from "@/components/home/images/key-highlights.jpg";
import React from "react";

const Stories = () => {
  return (
    <ArrowSwiperWithInfoSection
      id='stories'
      data={data}
      SwiperKey={Stories.name}
      SectionWrapperProps={{
        SectionHeaderProps: {
          title: "STORIES OF TRANSFORMATION",
        },
      }}
      ArrowSlideInfoProps={{
        isNavigation: true,
        SwiperNavigationButtonProps: {
          alignSelf: { xs: "center", md: "flex-start" },
        },
        SlotProps: {
          DescriptionTypographyProps: {
            mb: { xs: 0, md: 5 },
          },
        },
      }}
    />
  );
};

export default Stories;

const data: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    prefix: "Building a Skilled-Workforce",
    title: "Creating Livelihoods Through Skilling",
    description: `Maya's dreams were limited by a lack of opportunities and resources in her village. Access to vocational training, especially for women, was scarce. However "Building a Skilled-Workforce" changed the narrative, opening doors for individuals like Maya to pursue their passions.`,
    image: keyHighlights,
  },
  {
    prefix: "Building a Skilled-Workforce",
    title: "Creating Livelihoods Through Skilling",
    description: `Maya's dreams were limited by a lack of opportunities and resources in her village. Access to vocational training, especially for women, was scarce. However "Building a Skilled-Workforce" changed the narrative, opening doors for individuals like Maya to pursue their passions.`,
    image: keyHighlights,
  },
];
