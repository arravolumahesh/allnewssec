import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import { H3_2, H6_3 } from "@/styles/theme/components/typography.fontvariant";
import EnhancedSwiper from "./enhanced-swiper";
import AnimatedButton from "./animated-button";
import { StaticImageData } from "next/image";
import { CompanyCard } from "./cards/company";

interface ExpandableAccordionProps {
  data: {
    title: string;
    discrption: string;
    intitiatives: {
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
      <Stack
      // component={motion.div}
      // variants={StagAccordion}
      // initial={"intial"}
      // whileInView={"animate"}
      // viewport={{ once: true }}
      >
        {data.map((eachArea, index) => (
          <Accordion
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
            // component={motion.div}
            // variants={StagAccordion}
            // initial={{
            //   opacity: 0,
            //   y: `${index % 2 === 0 ? "-30%" : "30%"}`,
            // }}
            // whileInView={"animate"}
            // viewport={{ once: true }}
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
              <Typography variant='h3' fontSize={H3_2}>
                {eachArea.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              <Typography variant='body1' fontSize={H6_3} maxWidth={867}>
                {eachArea.discrption}
              </Typography>
              <Stack
                direction='row'
                alignItems={"center"}
                justifyContent={"space-around"}
                py={1.5}
                mt={3}
                borderTop={"1px solid rgba(234, 234, 234, 0.20)"}
                borderBottom={"1px solid rgba(234, 234, 234, 0.20)"}
              >
                <Stack textAlign={"center"} rowGap={{ xs: 1, md: 0.5 }}>
                  <Typography variant='h4' fontWeight={700}>
                    93K
                  </Typography>
                  <Typography variant='body2'>Students Educated</Typography>
                </Stack>
                <Divider
                  orientation='vertical'
                  sx={{
                    height: 75,
                    borderColor: "rgba(234, 234, 234, 0.20)",
                  }}
                />
                <Stack textAlign={"center"} rowGap={{ xs: 1, md: 0.5 }}>
                  <Typography variant='h4' fontWeight={700}>
                    100+
                  </Typography>
                  <Typography variant='body2'>Training Institutions</Typography>
                </Stack>
                <Divider
                  orientation='vertical'
                  sx={{
                    height: 75,
                    borderColor: "rgba(234, 234, 234, 0.20)",
                  }}
                />
                <Stack textAlign={"center"} rowGap={{ xs: 1, md: 0.5 }}>
                  <Typography variant='h4' fontWeight={700}>
                    300+
                  </Typography>
                  <Typography variant='body2'>Programs Conducted</Typography>
                </Stack>
              </Stack>
              <Stack direction='row' mt={{ xs: 4, md: 7 }} width={1}>
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
                  data={eachArea.intitiatives}
                />
              </Stack>
              <Stack
                display={"flex"}
                alignItems={"center"}
                mt={{ xs: 3, md: 6 }}
              >
                <AnimatedButton
                  href={"./"}
                  variant='outlined'
                  color='secondary'
                  // variants={staggerBtn}
                >
                  View More Initiatives
                </AnimatedButton>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
      {BottomDivider && <Divider />}
    </>
  );
};

export default ExpandableAccordion;
