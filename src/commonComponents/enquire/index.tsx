import SectionWrapper from "@cc/section-wrapper";
import React, { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ArrowImage from "@cc/arrow-image";
import { Stack, Typography } from "@mui/material";
import { MotionStack, MotionVariantProps } from "../motion-components";

export interface EnquireProps {
  data: {
    title: string;
    description: string;
    image: string | StaticImageData;
    btn: ReactNode;
  }[];
}

const Enquire = (props: EnquireProps) => {
  const { data } = props;
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "common.white",
        id: "contact-us",
      }}
      color={"primary.main"}
      direction={{ xs: "column", xl: "row" }}
      justifyContent={"center"}
      alignItems={"center"}
      columnGap={6}
      rowGap={10}
      variants={arrowStagger}
      initial={"initial"}
      whileInView={"whileInView"}
      viewport={{ once: true }}
    >
      {data.map((item, index) => {
        const { image, title, description, btn } = item;
        return (
          <MotionStack
            key={`${title}-${index}`}
            direction={{ xs: "column", md: "row" }}
            rowGap={{ xs: 2.5, xl: 0 }}
            columnGap={4}
            alignItems={"center"}
            width={1}
            maxWidth={{ xs: 400, md: 545 }}
            variants={arrowStaggerChildDiv}
            overflow={"hidden"}
          >
            <ArrowImage
              src={image}
              alt={title}
              width={196}
              height={228}
              sx={{ minWidth: 196, minHeight: 228, zIndex: 1 }}
              ContainerProps={{ variants: arrowImageTransition }}
            />
            <MotionStack rowGap={2} variants={arrowImageTransition}>
              <Typography
                variant={"h5"}
                textAlign={{ xs: "center", xl: "left" }}
              >
                {title}
              </Typography>
              <Typography
                fontSize={"18px"}
                textAlign={{ xs: "center", xl: "left" }}
              >
                {description}
              </Typography>
              {btn}
            </MotionStack>
          </MotionStack>
        );
      })}
    </SectionWrapper>
  );
};

export default Enquire;

const arrowStagger: MotionVariantProps = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.9,
    },
  },
};
const arrowStaggerChildDiv: MotionVariantProps = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const arrowImageTransition: MotionVariantProps = {
  initial: {
    x: "-102%",
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
