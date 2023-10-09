import { CardContent } from "@mui/material";
import React, { forwardRef } from "react";
import { EnhancedSwiperSlideComponent } from "@cc/enhanced-swiper";
import {
  MotionCard,
  MotionCardProps,
  MotionImage,
  MotionTypography,
} from "@cc/motion-components";
import { H6_3 } from "@/styles/theme/components/typography.fontvariant";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import {
  bottomToToptextStagger,
  bottomToToptextStaggerChildren,
} from "../animations";

interface CompanyCardProps extends Omit<MotionCardProps, "children"> {
  img: StaticImageData | string;
  title: string;
}

export const CompanyCard: EnhancedSwiperSlideComponent<CompanyCardProps> =
  forwardRef((props, ref) => {
    const {
      img,
      title,
      sx,
      index,
      isPrev,
      isActive,
      isVisible,
      isNext,
      ...restProps
    } = props;
    return (
      <MotionCard
        elevation={0}
        ref={ref}
        sx={{
          width: { xs: 301, lg: 310 },
          borderRadius: 0,
          bgcolor: "transparent",
          ...sx,
        }}
        {...restProps}
      >
        <CardContent
          sx={{ p: 0, pb: "0 !important" }}
          component={motion.div}
          variants={bottomToToptextStagger(0.4)}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          <MotionImage
            src={img}
            alt={title}
            sx={{
              width: 1,
              height: { xs: 301, md: 310 },
            }}
            variants={bottomToToptextStaggerChildren}
          />
          <MotionTypography
            variant='body1'
            fontSize={H6_3}
            mt={2}
            variants={bottomToToptextStaggerChildren}
          >
            {title}
          </MotionTypography>
        </CardContent>
      </MotionCard>
    );
  });

CompanyCard.displayName = CompanyCard.name;
