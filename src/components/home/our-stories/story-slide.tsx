"use client";
import { alpha, Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { EnhancedSwiperSlideComponent } from "@cc/enhanced-swiper";
import { MotionStack, MotionVariantProps } from "@cc/motion-components";
import { sxArrayUtil } from "@util/sx-helpers";
import { StaticImageData } from "next/image";
import AnimatedButton from "@cc/animated-button";
import { H5_1 } from "@theme/components/typography.fontvariant";
import SectionWrapper, {
  basePx,
  basePy,
  SectionWrapperProps,
} from "@cc/section-wrapper";
import { LocationOnRounded } from "@mui/icons-material";
import { MaterialImage } from "@cc/material-components";

export interface StorySlideProps extends Omit<SectionWrapperProps, "children"> {
  bgImage: string | StaticImageData;
  company: string;
  title: string;
  location: string;
  description: string;
}

const StorySlide: EnhancedSwiperSlideComponent<StorySlideProps> = forwardRef(
  (props, ref) => {
    const {
      bgImage,
      company,
      title,
      location,
      description,
      isNext,
      isActive,
      isPrev,
      isVisible,
      index,
      ...restCardProps
    } = props;
    const { sx, ...rest } = restCardProps;
    return (
      <SectionWrapper
        ref={ref}
        sx={[
          {
            width: "100%",
            position: "relative",
            alignItems: "flex-start",
          },
          ...sxArrayUtil(sx),
        ]}
        SectionProps={{
          sx: {
            background: (theme) => ({
              xs: theme.palette.gradient.transparentToDark,
              md: "none",
            }),
          },
        }}
        pl={{
          ...basePx,
          xs: 0,
        }}
        pr={{
          ...basePx,
          xs: 0,
        }}
        pt={{
          ...basePy,
          xs: 0,
        }}
        {...rest}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "auto",
            minHeight: { xs: 366, md: "100%" },
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <MaterialImage src={bgImage} alt={company} fill objectFit="cover" />
        </Box>
        <MotionStack
          sx={{
            width: {
              xs: 1,
              md: 590,
            },
            height: {
              xs: "auto",
              md: 488,
            },
            px: { xs: 3, md: 0 },
            mt: {
              xs: "50%",
              md: 0,
            },
          }}
          variants={clipTransition}
          {...(index &&
            index > 0 && {
              initial: "initial",
              whileInView: "animate",
              viewport: {
                once: true,
                amount: 0.5,
              },
            })}
        >
          <Typography
            variant={"body2"}
            gutterBottom
            sx={{
              width: "fit-content",
              textTransform: "capitalize",
              px: 2,
              py: {
                xs: 1,
                md: 1.25,
                xxl: 1.5,
              },
              background: (theme) => alpha(theme.palette.secondary.main, 0.2),
            }}
          >
            {company}
          </Typography>
          <Typography
            fontSize={H5_1}
            fontWeight={"bold"}
            mb={3}
            lineHeight={"125%"}
            textTransform={"capitalize"}
          >
            {title}
          </Typography>
          <Typography
            variant={"body2"}
            mb={3}
            textTransform={"capitalize"}
            display={"flex"}
            alignItems={"center"}
            columnGap={1}
          >
            <LocationOnRounded fontSize={"inherit"} /> {location}
          </Typography>
          <Typography
            variant={"body1"}
            mb={{
              xs: 4,
              md: 4.5,
              xxl: 5,
            }}
            whiteSpace={"pre-wrap"}
            sx={{
              color: (theme) => alpha(theme.palette.secondary.main, 0.6),
            }}
          >
            {description}
          </Typography>
          <AnimatedButton
            href={"/bajaj-auto-initiatives"}
            variant={"outlined"}
            color={"secondary"}
            sx={{
              mt: "auto",
            }}
          >
            View More Initiatives
          </AnimatedButton>
        </MotionStack>
      </SectionWrapper>
    );
  },
);

export default StorySlide;

StorySlide.displayName = StorySlide.name;

const clipTransition: MotionVariantProps = {
  initial: {
    opacity: 0,
    x: "20%",
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
