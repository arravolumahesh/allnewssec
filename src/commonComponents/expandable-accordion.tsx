import {
  AccordionDetails,
  AccordionSummary,
  alpha,
  Divider,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { H3_2, H6_3 } from "@/styles/theme/components/typography.fontvariant";
import EnhancedSwiper from "./enhanced-swiper";
import AnimatedButton from "./animated-button";
import { StaticImageData } from "next/image";
import { CompanyCard } from "./cards/company";
import {
  MotionAccordion,
  MotionAccordionProps,
  MotionStack,
  MotionTypography,
} from "./motion-components";
import {
  bottomToToptextTransition,
  staggerArrowChildren,
  staggerDivArrow,
  staggerStackChildren,
  staggerTextChildren,
} from "./animations";
import { motion } from "framer-motion";

interface ExpandableAccordionProps {
  data: {
    title: string;
    description?: string;
    stats?: {
      header: string;
      subHeader?: string;
    }[];
    initiatives: {
      img: StaticImageData | string;
      title: string;
    }[];
  }[];
  TopDivider?: boolean;
  BottomDivider?: boolean;
}

const ExpandableAccordion = (props: ExpandableAccordionProps) => {
  const { data, TopDivider, BottomDivider } = props;
  const [expanded, setExpanded] = useState<string>("Area0");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : "");
    };
  return (
    <>
      {TopDivider && <Divider />}
      {data.map((eachArea, index) => {
        return (
          <MotionAccordion
            expanded={expanded === `Area${index}`}
            onChange={handleChange(`Area${index}`)}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderTop: `${
                !TopDivider && expanded === "Area0"
                  ? "none"
                  : expanded === `Area${index}`
                  ? "1px solid #EAEAEAB3"
                  : "none"
              }`,
              p: {
                xs: "24px 0",
                lg: "48px 0",
              },
            }}
            key={index}
            {...accordionTransition}
          >
            <AccordionSummary
              sx={{
                px: 0,
                color: alpha("#fff", expanded === `Area${index}` ? 1 : 0.9),
              }}
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#FFF",
                    width: {
                      xs: "40px",
                      xl: "56px",
                    },
                    height: {
                      xs: "40px",
                      xl: "56px",
                    },
                  }}
                />
              }
            >
              <MotionTypography
                variant="h3"
                fontSize={H3_2}
                variants={bottomToToptextTransition(0)}
                initial={"initial"}
                whileInView={"animate"}
                viewport={{ once: true }}
              >
                {eachArea.title}
              </MotionTypography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              {eachArea.description && (
                <MotionTypography
                  variant="body1"
                  fontSize={H6_3}
                  maxWidth={867}
                  variants={bottomToToptextTransition(0.2)}
                  initial={"initial"}
                  whileInView={"animate"}
                  viewport={{ once: true }}
                >
                  {eachArea.description}
                </MotionTypography>
              )}
              {eachArea.stats && (
                <MotionStack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={"space-around"}
                  py={1.5}
                  mt={3}
                  borderTop={"1px solid rgba(234, 234, 234, 0.20)"}
                  borderBottom={"1px solid rgba(234, 234, 234, 0.20)"}
                  variants={staggerDivArrow(0.5)}
                  initial={"initial"}
                  whileInView={"animate"}
                  viewport={{ once: true }}
                  divider={
                    <Divider
                      orientation="vertical"
                      component={motion.hr}
                      variants={staggerArrowChildren}
                      sx={{
                        height: 75,
                        borderColor: "rgba(234, 234, 234, 0.20)",
                      }}
                    />
                  }
                >
                  {eachArea.stats.map((item, idx) => (
                    <MotionStack
                      key={idx}
                      textAlign={"center"}
                      rowGap={{ xs: 1, md: 0.5 }}
                      variants={staggerStackChildren}
                    >
                      <MotionTypography
                        variant="h4"
                        fontWeight={700}
                        variants={staggerTextChildren}
                      >
                        {item.header}
                      </MotionTypography>
                      {item.subHeader && (
                        <MotionTypography
                          variant="body2"
                          variants={staggerTextChildren}
                        >
                          {item.subHeader}
                        </MotionTypography>
                      )}
                    </MotionStack>
                  ))}
                </MotionStack>
              )}
              <Stack direction="row" mt={{ xs: 4, md: 7 }} width={1}>
                <EnhancedSwiper
                  slidesPerView={"auto"}
                  SlideWrapperProps={{
                    sx: {
                      width: { xs: 301, lg: 310 },
                      mr: 3,
                    },
                  }}
                  sx={{
                    overflow: { xs: "visible", xxl: "hidden" },
                  }}
                  SlideComponent={CompanyCard}
                  data={eachArea.initiatives}
                />
              </Stack>
              <Stack
                display={"flex"}
                alignItems={"center"}
                mt={{ xs: 3, md: 6 }}
              >
                <AnimatedButton
                  href={"./"}
                  variant="outlined"
                  color="secondary"
                  // variants={staggerBtn}
                >
                  View More Initiatives
                </AnimatedButton>
              </Stack>
            </AccordionDetails>
          </MotionAccordion>
        );
      })}
      {BottomDivider && <Divider />}
    </>
  );
};

export default ExpandableAccordion;

const accordionTransition: Omit<MotionAccordionProps, "children"> = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
  viewport: {
    once: true,
  },
};
