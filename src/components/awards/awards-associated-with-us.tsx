"use client";

import EnhancedSwiper from "@/commonComponents/enhanced-swiper";
import { MaterialImage } from "@/commonComponents/material-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import SwiperNavigationButton from "@/commonComponents/swiper-navigation-button";
import theme from "@/styles/theme";
import { Body1, H1 } from "@/styles/theme/components/typography.fontvariant";
import { Navigation } from "@mui/icons-material";
import { Stack, Typography, alpha, stackClasses } from "@mui/material";
import { common } from "@mui/material/colors";
import { StaticImageData } from "next/image";
import image1 from "@/components/awards/images/image1.png";
import image2 from "@/components/awards/images/image2.png";
import image3 from "@/components/awards/images/image3.png";
import { relative } from "path";
import { subtle } from "crypto";
const AwardsAssociatedWithUs = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          background: common.white,
        },
      }}
      SectionHeaderProps={{
        title: "AWARDS ASSOCIATED WITH US",
        TitleTypographyProps: {
          variant: "h1",
        },
        DescriptionTypographyProps: {
          fontSize: H1,
        },
        mb: { xs: 6, md: 3 },
        color: (theme) => theme.palette.primary.main,
      }}
    >
      <EnhancedSwiper
        slidesPerView={"auto"}
        SlideWrapperProps={{
          sx: {
            width: { md: 421, xs: 342 },
            alignSelf: "center",
          },
        }}
        sx={{
          pt: { xs: 6, md: 7 },
          overflow: { xs: "visible", xxl: "hidden" },
        }}
        SlideComponent={AwardsAssociatedCards}
        data={data}
        navigation={{
          enabled: true,
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        modules={[Navigation]}
        Slots={{
          ContainerEndChildren: (
            <SwiperNavigationButton
              sx={{ color: (theme) => theme.palette.primary.main }}
              mt={{ xs: 5, md: 6 }}
              alignSelf={{ xs: "center", md: "flex-end" }}
              PrevButtonProps={{
                className: "swiper-prev",
              }}
              NextButtonProps={{
                className: "swiper-next",
              }}
            />
          ),
        }}
      />
    </SectionWrapper>
  );
};

export default AwardsAssociatedWithUs;

interface ButtonsProps {
  disablePrev: boolean;
  disableNext: boolean;
}

interface AwardsAssociatedProps {
  imageUrl: StaticImageData | string;
  title: string;
  subTitle: string;
}

const AwardsAssociatedCards = (props: AwardsAssociatedProps) => {
  const { imageUrl, title, subTitle } = props;
  return (
    <Stack sx={{ position: "relative" }}>
      <MaterialImage
        src={imageUrl}
        alt="awards"
        width={421}
        height={501}
        sx={{
          width: { xs: "342px", md: "450px" },
          height: { xs: "421px", md: "501px" },
          boxShadow: "0px 6px 20.64103px 0px rgba(0, 0, 0, 0.05)",
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          height: "100%",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          justifyContent: "flex-end",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.55) 21.1%, #000 100%)",
        }}
      >
        <Stack m={3} display={"flex"} flexDirection={"column"} gap={"16px"}>
          <Typography sx={{ fontSize: "24px !important", fontWeight: "700" }}>
            {title}
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>{subTitle}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
const data = [
  {
    imageUrl: image1,
    title: "Jankidevi Bajaj Puraskar",
    subTitle:
      "The IMC Ladies' Wing, led by Mrs. Kiran Bajaj, established the Jankidevi Bajaj Award in 1993. This award acknowledges women entrepreneurs advancing rural India, named after Padma Vibhushan Jankidevi Bajaj, a strong advocate of women's empowerment and progress.",
  },
  {
    imageUrl: image2,
    title: "National Quality Award",
    subTitle:
      "Started in 1995, the IMC Ramkrishna Bajaj National Quality Award enjoys the stature of being one of India's most prestigious quality awards. Promoting & recognizing quality awareness and practices in Indian business and asserting its importance in global competitiveness.",
  },
  {
    imageUrl: image3,
    title: "Jamnalal Bajaj Uchit Vyavhar Puraskar",
    subTitle:
      "Established in 1988, the Bajaj Group introduced the Jamnalal Bajaj Uchit Vyavhar Puraskar, honoring businesses that uphold ethical practices in support of the Council for Fair Business Practices in 1966.",
  },
];
