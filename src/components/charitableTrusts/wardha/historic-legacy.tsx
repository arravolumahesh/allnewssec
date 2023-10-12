import historicLegacy from "./images/historic-legacy.jpg";
import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@cc/arrow-swiper-with-info-section";
import React from "react";
import ArrowSlideInfo from "@cc/cards/arrow-slide-info";
import { ArrowSlideDefaultImageProps } from "@cc/cards/arrow-slide-default-image";
import { H6_2 } from "@theme/components/typography.fontvariant";

const HistoricLegacy = () => {
  return (
    <ArrowSwiperWithInfoSection
      data={data}
      SwiperKey={HistoricLegacy.name}
      SectionWrapperProps={{
        color: "primary.main",
        SectionHeaderProps: {
          title: "Historic Legacy",
        },
      }}
      ArrowSlideInfoProps={{
        SlotProps: {
          DescriptionTypographyProps: {
            fontSize: H6_2,
          },
        },
      }}
    />
  );
};

export default HistoricLegacy;

const data: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    description:
      "Mahatma Gandhi came to Wardha as per Shri Jamanalal Bajaj's invitation, choosing Sevagram for the freedom movement. Wardha gained historical importance and housed the All India Village Industries Association. Acharya Vinoba Bhave's earlier Satyagraha Ashram setup in the 1920s and Shri Jamnalal Bajaj's dedicated participation enhanced Wardha's role in India's freedom initiatives.",
    image: historicLegacy,
  },
];
