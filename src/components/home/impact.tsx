"use client";
import {
  MotionImage,
  MotionStack,
  MotionTypography,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import React from "react";
import line from "./images/Line 1322.svg";
import { H6_2 } from "@/styles/theme/components/typography.fontvariant";
import {
  staggerArrowChildren,
  staggerDivArrow,
  staggerStackChildren,
  staggerTextChildren,
} from "@/commonComponents/animations";

const Impact = () => {
  return (
    <SectionWrapper
      SectionProps={{
        bgcolor: "primary.500",
      }}
      SectionHeaderProps={{
        title: "DRIVING A LASTING IMPACT",
        description:
          "These are not mere numbers. They’re a testament to our relentless dedication towards making a tangible impact in communities across the nation.",
        DescriptionTypographyProps: {
          fontSize: H6_2,
        },
        maxWidth: { xs: 1, md: 874 },
      }}
      color={"common.white"}
    >
      <MotionStack
        direction={"row"}
        width={1}
        maxWidth={1232}
        mx={"auto"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        rowGap={4}
        variants={staggerDivArrow(0.5)}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ once: true }}
        divider={
          <MotionImage
            variants={staggerArrowChildren}
            src={line}
            alt=''
            sx={{
              display: { xs: "none", md: "block" },
            }}
          />
        }
      >
        {data.map((item, idx) => {
          return (
            <MotionStack
              key={idx}
              alignItems={"center"}
              width={{ xs: "50%", md: "auto" }}
              rowGap={1}
              variants={staggerStackChildren}
              viewport={{ once: true }}
            >
              <MotionTypography
                variants={staggerTextChildren}
                variant='h2'
                component={"h3"}
                fontWeight={700}
              >
                {item.title}
              </MotionTypography>
              <MotionTypography variants={staggerTextChildren}>
                {item.subtitle}
              </MotionTypography>
            </MotionStack>
          );
        })}
      </MotionStack>
    </SectionWrapper>
  );
};

export default Impact;

const data = [
  {
    title: "12.4CR",
    subtitle: "People Reached",
  },
  {
    title: "57K",
    subtitle: "MSMEs Supported",
  },
  {
    title: "100.3K",
    subtitle: "Women Empowered",
  },
  {
    title: "93K",
    subtitle: "Students Educated",
  },
];
