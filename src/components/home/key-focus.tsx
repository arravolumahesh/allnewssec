"use client";
import {
  MotionBoxProps,
  MotionTypography,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import skillImage from "./images/Rectangle 24993.png";
import { SmallTitleCard } from "@/commonComponents/cards/smallTitleCard";
import { motion } from "framer-motion";
import SlideAnimationWrapper from "@/commonComponents/slideAnimation/slide-animation-wrapper";
import EnhancedSwiper, {
  EnhancedSwiperProps,
} from "@/commonComponents/enhanced-swiper";
import SectionWrapper from "@/commonComponents/section-wrapper";
import ArrowGradient from "@cc/arrow-gradient";
import { H3_1, H6_3 } from "@/styles/theme/components/typography.fontvariant";
import ArrowSwiperWithInfoSection, {
  ArrowSwiperWithInfoProps,
} from "@/commonComponents/arrow-swiper-with-info-section";
import ArrowSlideInfo from "@/commonComponents/cards/arrow-slide-info";
import { ArrowSlideDefaultImageProps } from "@/commonComponents/cards/arrow-slide-default-image";

const KeyFocus = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <SectionWrapper
      pt={{ xs: 7, md: 6 }}
      pb={{ xs: 7, md: 12 }}
      rowGap={{ xs: 6, md: 2 }}
      color={"primary.main"}
    >
      <Stack direction={"row"} alignItems={"center"}>
        {matches && <ArrowGradient height={"301px"} {...imageTransition} />}
        <Stack
          component={motion.div}
          variants={staggerDiv}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
          maxWidth={{ xs: "100%", md: 814 }}
          rowGap={4}
        >
          <Stack maxWidth={814} rowGap={{ xs: 2, md: 4 }}>
            <MotionTypography
              variant='h1'
              component={"h3"}
              variants={staggerChildren}
            >
              OUR KEY FOCUS AREAS
            </MotionTypography>
            <MotionTypography fontSize={H6_3} variants={staggerChildren}>
              Our CSR initiatives encompass a diverse range of focus areas, with
              a strong emphasis on skill development. We aim to address social,
              environmental, and community needs to create a positive and
              lasting impact.
            </MotionTypography>
          </Stack>
        </Stack>
      </Stack>
      <ArrowSwiperWithInfoSection
        data={arrowData}
        SwiperProps={{
          navigation: false,
        }}
        ArrowSlideInfoProps={{
          SlotProps: {
            TitleTypographyProps: {
              fontSize: H3_1,
            },
          },
        }}
        SectionWrapperProps={{
          p: "0 !important",
          mb: { xs: 0, md: 6 },
        }}
      />
      {/* <SlideAnimationWrapper
          title={"SKILL DEVELOPEMENT"}
          subtitle='Providing skill-based education through various programs to strengthen
          the foundation of a progressive nation.'
        >
          <Image src={skillImage} alt='Skill Banner' fill />
        </SlideAnimationWrapper> */}
      <Stack direction='row' alignItems={"center"} width={"107%"}>
        <EnhancedSwiper
          slidesPerView={"auto"}
          SlideWrapperProps={{
            sx: {
              width: { xs: 200, lg: 328 },
              mr: { xs: 2, lg: 0 },
              "&:hover": {
                transform: "scale(1.1)",
                transition: "all .3s",
                zIndex: 1,
              },
            },
          }}
          sx={{
            m: { xs: "-48px 0 -56px -24px", md: "-64px 0 -96px -64px" },
            p: {
              xs: "48px 24px 56px 24px",
              md: "64px 64px 96px 64px",
            },
          }}
          SlideComponent={SmallTitleCard}
          data={data}
          SlideComponentProps={(index) => ({
            initial: {
              opacity: 0,
              y: "100%",
            },
            whileInView: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: index * 0.5,
              },
            },
            viewport: {
              once: true,
            },
          })}
        />
      </Stack>
    </SectionWrapper>
  );
};

export default KeyFocus;

const imageTransition: MotionBoxProps = {
  initial: {
    x: "-121%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  viewport: {
    once: true,
  },
};

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.5,
    },
  },
};
const staggerChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "150%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const arrowData: (ArrowSwiperWithInfoProps<
  typeof ArrowSlideInfo
>["data"][number]["data"][number] &
  ArrowSlideDefaultImageProps)[] = [
  {
    title: "SKILL DEVELOPEMENT",
    description:
      "Providing skill-based education through various programs to strengthen the foundation of a progressive nation.",
    image: skillImage,
    btnText: "Learn More",
    btnLink: "/",
  },
];

const data: EnhancedSwiperProps<typeof SmallTitleCard>["data"] = [
  {
    img: "https://s3-alpha-sig.figma.com/img/ed73/370e/ea2e14bb7a0531b2ec3d564e9bb2f7b4?Expires=1696204800&Signature=EdpSrFd6cjU8EHmvar8WyAo5mGxboPbLCXbdTmZzD~bfTUZDmYe4stteTwa5gVFC4rprPdBMxtT6zUZWkZMrqKqNBMbfUommrK1mrr0GAoPS9nhi0jZMBreu88MVILhNNd8b3UyAry6oPEtszLTeOdefS42oSsZtM5mncd1qju-cLzc36GAib2uVgV217lOnwFaz61kYjLfRRtKfj3NzjPar572velkhMpiWcA1IrMQu7qYIo5evfmjZ-Bmz7f7Ii-7VZB6jUrdGLu3VENS1RSH9iOzWVtkwo0OWqqAT4tXIOV2~MhzHVncp6h15LzqhwavpufBOLxMXUBKvhw2b0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Education",
    href: "#",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/5afa/c5db/92c2f936e1e3a0a16e90530264cbe0a0?Expires=1696204800&Signature=aocnwE8KXwJwqO-O4twIVvJKqKmbvCY9rXqIGwajb~KH4qwRB7N86a62dOCY5byGX2Ps2JlMHbHbWthhPLi2G76ORSMkHeN2~NQyeY0RHDtPfnFAXJX3QI~3NCjvLymfUtr51dzXKydmNIykSOQOtWJUoXRhAG8Ux5vZpKWJsBRxI0I3MM7ewEeGa2nuM0IQDsSA~48jvf~~0YFjmHaLybesmBMEg6V~pGvj6iyC-TmisQyZh3n08e9hOD5vm9ot0vFoF~xXUjO3Wgw2QoBBZAHkzWE~ejgtRUexwEDd9yD~X~1JIHPfQslLrz-piRZtkP35dIvnOxx9Hw5ummZ4Sg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Community Development",
    href: "#",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/ea93/c20b/634f7fd518261abf4b3598846e01d3f8?Expires=1696204800&Signature=WitUdgcM7J8~K1g-WuhJzmxQljKipaufpY8EuHMIehnHyRHrS-LNqa4WL1ImRmoElXOEBFgPRQlDB2riD8gWalaWztQoVoZ~1R8XLDt9unDdkdAguq~~GW7N017lNxAAGgQlZanbWvFlMkfiajSWwf2pyGSMk8fbHWvAaNx0PKQe9pLSyKchSYD4qftuX2MGgCic8LQ56UiOxMvUPvm~PHxIbbVbnUwMoYx~-DofcBPN1Gxy~vKpLVAb1nzQAli~hzvq1osnR4Qt5~z0lRLX0ZOqH9EOEF6rzTY8zuWWQCOVpVFwaHcG4DTNWspqt4AqprlmcI9wscPbSCptKMMUsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Healthcare",
    href: "#",
  },
  {
    img: "https://s3-alpha-sig.figma.com/img/43c2/3c7d/299a4d1fb4d6a21396450dcbf69c4058?Expires=1696204800&Signature=cfmmuWpo0KCeYVS9ry1J4vbsPqdOCIf16Rj3lCRc5ZVrEKWEGaFWFEU5LzcDnasmuBJWrhQAeZBA2~-SWz3dc8W5yIZqgKy1Rj6V7mceBb8G44dDiu8A2bqTrda56tbY-tL3NIIw-eyvSYzRJqKAasrNu8isNFLy542IxVJoA8LWXnZpxTcEMgBfkKDL5m01ETQdFbC8s3oSDLywyL8Aw~IEfNN7dlID8KqbLoJ5-WhGZtMXayWB3SwTZXgDLUo5m9UvgBYvdASU3DRkAikGRtrRNxRHeBbqMCy8UV0uB1ltXUcPRJsSvrJa2jHfPphfj4ni94RftKMVgX80QMh2HQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    title: "Others",
    href: "#",
  },
];
