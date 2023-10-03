"use client";
import { alpha, Box, Typography } from "@mui/material";
import React, { forwardRef } from "react";
import { EnhancedSwiperSlideComponent } from "@cc/enhanced-swiper";
import { MotionStack, MotionVariantProps } from "@cc/motion-components";
import { sxArrayUtil } from "@util/sx-helpers";
import { StaticImageData } from "next/image";
import AnimatedButton from "@cc/animated-button";
import { H5_1, H6_2, Subtitle1 } from "@theme/components/typography.fontvariant";
import SectionWrapper, {
  basePx,
  basePy,
  SectionWrapperProps,
} from "@cc/section-wrapper";
import { LocationOnRounded } from "@mui/icons-material";
import { MaterialImage } from "@cc/material-components";

export interface TestimonialCardProps extends Omit<SectionWrapperProps, "children"> {
  bgImage: string | StaticImageData;
  company: string;
  title: string;
  location: string;
  description: string;
}

const TestimonialCard: EnhancedSwiperSlideComponent<TestimonialCardProps> = forwardRef(
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
            background: 'linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%)',
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
              md: 450,
            },
            height: {
              xs: "auto",
              md: "auto",
            },
            px: { xs: 3, md: 0 },
            mt: {
              xs: "80%",
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
            variant={"body1"}
            mb={{
              xs: 4,
              md: 4.5,
              xxl: 10,
            }}
            whiteSpace={"pre-wrap"}
            sx={{
              color: (theme) => alpha(theme.palette.common.white, 1),
            }}
          >
            {description}
          </Typography> 

          <Typography
            fontSize={H6_2}            
            mb={1.25}
            lineHeight={"125%"}
            textTransform={"capitalize"}
          >
            {title}
          </Typography>

          <Typography
            variant={"subtitle1"}            
            fontSize={Subtitle1}
          >
            {company}
          </Typography>      
        </MotionStack>
      </SectionWrapper>
    );
  },
);

export default TestimonialCard;

TestimonialCard.displayName = TestimonialCard.name;

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
