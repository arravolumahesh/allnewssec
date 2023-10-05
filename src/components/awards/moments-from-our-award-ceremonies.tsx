"use client";
import EnhancedSwiper, {
  EnhancedSwiperProps,
} from "@/commonComponents/enhanced-swiper";
import { MaterialImage } from "@/commonComponents/material-components";
import SectionWrapper, { basePx } from "@/commonComponents/section-wrapper";
import { Stack } from "@mui/material";
import { StaticImageData } from "next/image";
import award1 from "@/components/awards/images/award1.png";
import award2 from "@/components/awards/images/award2.png";
import award3 from "@/components/awards/images/award3.png";
import award4 from "@/components/awards/images/award4.png";
import { Autoplay } from "swiper/modules";
import { common } from "@mui/material/colors";
const MommentFromOurAwards = () => {
  return (
    <SectionWrapper
      SectionProps={{
        sx: {
          backgroundColor: (theme) => theme.palette.primary.main,
        },
      }}
      SectionHeaderProps={{
        title: "Moments From our Award Ceremonies",
        TitleTypographyProps: {
          variant: "h3",
          color: common.white,
        },
        pl: { ...basePx, xs: 8 },
        pr: { ...basePx, xs: 8 },
        mb: { xs: 5, md: 6 },
      }}
    >
      <Stack rowGap={{ xs: 2, m: 3 }}>
        <EnhancedSwiper
          data={imageData}
          SlideComponent={ImageSlies}
          {...swiperProps}
        />
      </Stack>
    </SectionWrapper>
  );
};

export default MommentFromOurAwards;

const imageData = [
  { img: award1 },
  { img: award2 },
  { img: award3 },
  { img: award4 },
];

interface ImageSliesProps {
  img: StaticImageData | string;
}

const ImageSlies = (props: ImageSliesProps) => {
  const { img } = props;
  return (
    <MaterialImage
      src={img}
      alt=""
      width={421}
      height={484}
      sx={{
        width: { xs: 250, md: 421 },
        height: { xs: 250, md: 484 },
        objectFit: "cover",
      }}
    />
  );
};

const swiperProps: Omit<EnhancedSwiperProps, "data" | "SlideComponent"> = {
  slidesPerView: "auto",
  speed: 5000,
  loop: true,
  modules: [Autoplay],
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  SlideWrapperProps: {
    sx: {
      width: "auto",
      mr: { xs: 2, md: 3 },
    },
  },
  sx: {
    width: "100%",
    "& .swiper-wrapper": {
      transitionTimingFunction: "linear !important",
    },
  },
};
