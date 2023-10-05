"use client";
import {
  MotionTypography,
  MotionStack,
  MotionVariantProps,
} from "@/commonComponents/motion-components";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { H4 } from "@/styles/theme/components/typography.fontvariant";

import { Box, Grid, Stack } from "@mui/material";
import { motion } from "framer-motion";

const data = [
  {
    count: "12.4k",
    title: "Beneficiaries Reached",
  },
  {
    count: "23",
    title: "Districts Covered",
  },
  {
    count: "₹10.3cr",
    title: "Spent on Project",
  },
  {
    count: "205",
    title: "Trainings Held",
  },
];

type dataType = {
  count?: string;
  title?: string;
};

type countProps = dataType[];

const Counts: React.FC<{ countData?: countProps }> = ({ countData = data }) => {
  return (
    <SectionWrapper
      color={'primary.main'}
      sx={{
        py:{xs:6,xxl:6,md:6},
        px:{xs:3}
      }}
      SectionProps={{
        sx:{
          backgroundColor:'white'
        }
      }}
    >
    <Box
      // sx={{
      //   padding: {
      //     xs: "24px 48px",
      //     md: "40px",
      //   },
      //   background: "#FFF",
      // }}
      component={motion.div}
      initial={"initial"}
      whileInView={"animate"}
      viewport={{ once: true }}
      variants={staggerDiv}
    >
      <Grid container rowGap={3}>
        {countData.map((eachCount: dataType, index: number) => (
          <Grid item xs={6} md={3} key={index}>
            <MotionStack
              alignItems={"center"}
              spacing={1}
              variants={staggerStackChildren}
              initial={"initial"}
              whileInView={"animate"}
              viewport={{ once: true }}
            >
              <MotionTypography
                variant="h1"
                color={`#005DAC`}
                fontSize={H4}
                fontWeight={"700"}
                variants={staggerTextChildren}
              >
                {eachCount.count}
              </MotionTypography>

              <MotionTypography
                variant="body2"
                color={`#005DAC`}
                variants={staggerTextChildren}
              >
                {eachCount.title}
              </MotionTypography>
            </MotionStack>
          </Grid>
        ))}
      </Grid>
    </Box>
    </SectionWrapper>
  );
};

export default Counts;

const staggerDiv: MotionVariantProps = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const staggerStackChildren: MotionVariantProps = {
  initial: { opacity: 0.9 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 0.7,
    },
  },
};

const staggerTextChildren: MotionVariantProps = {
  initial: {
    opacity: 0,
    y: "100%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};
