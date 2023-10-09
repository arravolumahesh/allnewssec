"use client";
import { alpha, Box, Stack, Typography, TypographyProps } from "@mui/material";
import React, { forwardRef, ReactNode } from "react";
import { EnhancedSwiperSlideComponent } from "@cc/enhanced-swiper";
import {
  MotionStack,
  MotionStackProps,
  MotionVariantProps,
} from "@cc/motion-components";
import { sxArrayUtil } from "@util/sx-helpers";
import { StaticImageData } from "next/image";
import AnimatedButton, { AnimatedButtonProps } from "@cc/animated-button";
import { H5_1, H6_2 } from "@theme/components/typography.fontvariant";
import SectionWrapper, {
  basePx,
  basePy,
  SectionWrapperProps,
} from "@cc/section-wrapper";
import { LocationOnRounded } from "@mui/icons-material";
import { MaterialImage } from "@cc/material-components";

export interface StorySlideProps
  extends Omit<SectionWrapperProps, "children" | "title"> {
  bgImage: string | StaticImageData;
  company?: ReactNode;
  title?: ReactNode;
  location?: ReactNode;
  description?: ReactNode;
  person?: {
    name: ReactNode;
    NameTypographyProps?: Omit<TypographyProps, "children">;
    info: ReactNode;
    InfoTypographyProps?: Omit<TypographyProps, "children">;
  };
  PersonContainerProps?: Omit<MotionStackProps, "children">;
  button?: ReactNode;
  ButtonProps?: Omit<AnimatedButtonProps, "children">;
  CompanyTypographyProps?: Omit<TypographyProps, "children">;
  TitleTypographyProps?: Omit<TypographyProps, "children">;
  DescriptionTypographyProps?: Omit<TypographyProps, "children">;
  LocationTypographyProps?: Omit<TypographyProps, "children">;
  InfoContainerProps?: Omit<MotionStackProps, "children">;
}

const StorySlide: EnhancedSwiperSlideComponent<StorySlideProps> = forwardRef(
  (props, ref) => {
    const {
      bgImage,
      company,
      title,
      location,
      description,
      CompanyTypographyProps,
      TitleTypographyProps,
      DescriptionTypographyProps,
      person,
      PersonContainerProps,
      button,
      isNext,
      isActive,
      isPrev,
      isVisible,
      index,
      InfoContainerProps,
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
              md: theme.palette.gradient.darkToTransparentRight,
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
          <MaterialImage
            src={bgImage}
            alt={typeof company === "string" ? company : "company-image"}
            fill
            objectFit="cover"
          />
        </Box>
        <MotionStack
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
          {...InfoContainerProps}
          sx={[
            {
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
            },
            ...sxArrayUtil(InfoContainerProps?.sx),
          ]}
        >
          {company && typeof company === "string" ? (
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
              {...CompanyTypographyProps}
            >
              {company}
            </Typography>
          ) : (
            company
          )}
          {title && typeof title === "string" ? (
            <Typography
              fontSize={H5_1}
              fontWeight={"bold"}
              mb={3}
              lineHeight={"125%"}
              textTransform={"capitalize"}
              {...TitleTypographyProps}
            >
              {title}
            </Typography>
          ) : (
            title
          )}
          {location && typeof location === "string" ? (
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
          ) : (
            location
          )}
          {description && typeof description === "string" ? (
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
              {...DescriptionTypographyProps}
            >
              {description}
            </Typography>
          ) : (
            description
          )}
          {person && (person.name || person.info) && (
            <Stack
              rowGap={{ xs: 1, md: 2 }}
              mt={"auto"}
              {...PersonContainerProps}
            >
              {person.name && typeof person.name === "string" ? (
                <Typography fontSize={H6_2}>{person.name}</Typography>
              ) : (
                person.name
              )}
              {person.info && typeof person.info === "string" ? (
                <Typography variant={"subtitle1"}>{person.info}</Typography>
              ) : (
                person.info
              )}
            </Stack>
          )}
          {button && typeof button === "string" ? (
            <AnimatedButton
              href={"/bajaj-auto-initiatives"}
              variant={"outlined"}
              color={"secondary"}
              sx={{
                mt: "auto",
              }}
            >
              {button}
            </AnimatedButton>
          ) : (
            button
          )}
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
