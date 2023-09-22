"use client";

import { useState } from "react";
import SectionWrapper from "@/commonComponents/section-wrapper";
import {
  Box,
  Stack,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { SwipeCard } from "@/commonComponents/cards/swipeCard";

import Image from "next/image";
import { helvetica } from "@/app/font";
import OFA1 from "./images/OFA1.png";
import OFA2 from "./images/OFA2.png";
import OFA3 from "./images/OFA3.png";

const data = [
  {
    title: "Skill Development",
    discrption:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    intitiatives: [
      {
        imageUrl: "/images/workForce.png",
        title: "Building a Skilled-Workforce",
      },
      {
        imageUrl: "/images/classRoom.png",
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        imageUrl: "/images/IPH1.png",
        title: "IPH-Triveni Program",
      },
      {
        imageUrl: "/images/IPH2.png",
        title: "IPH-Triveni Program",
      },
    ],
  },
  {
    title: "Education",
    discrption:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    intitiatives: [
      {
        imageUrl: "/workForce.png",
        title: "Building a Skilled-Workforce",
      },
      {
        imageUrl: "/classRoom.png",
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        imageUrl: "/IPH1.png",
        title: "IPH-Triveni Program",
      },
      {
        imageUrl: "/IPH2.png",
        title: "IPH-Triveni Program",
      },
    ],
  },
  {
    title: "Miscellaneous",
    discrption:
      "Changing the landscape of the skilling ecosystem through various initiatives and programs to bridge the gap between academia and industry.",
    intitiatives: [
      {
        imageUrl: "/images/workForce.png",
        title: "Building a Skilled-Workforce",
      },
      {
        imageUrl: "/images/classRoom.png",
        title: "Implementing Skill-Based Education in Schools",
      },
      {
        imageUrl: "/images/IPH1.png",
        title: "IPH-Triveni Program",
      },
      {
        imageUrl: "/images/IPH2.png",
        title: "IPH-Triveni Program",
      },
    ],
  },
];

const Areas = () => {
  const [expanded, setExpanded] = useState<string | false>(`question1`);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
      <Divider
        sx={{
          backgroundColor: "blue",
        }}
      />
      <Box>
        {data.map((eachArea, index) => (
          <Accordion
            expanded={expanded === `Area${index}`}
            onChange={handleChange(`Area${index}`)}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderBottom: `${
                expanded === `Area${index}` ? " " : "1px solid #EAEAEA"
              }`,
              padding: {
                xs: "24px 0",
                lg: "48px 0",
              },
              opacity: 0.7,
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: "#FFF",
                    width: {
                      sm: "24px",
                      md: "28px",
                      xl: "48px",
                    },
                    height: {
                      sm: "24px",
                      md: "28px",
                      xl: "48px",
                    },
                  }}
                />
              }
            >
              <Typography
                variant="h3"
                sx={{
                  fontFamily: helvetica,
                  fontSize: {
                    sm: "24px",
                    md: "28px",
                    xl: "48px",
                  },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "128%",
                  textTransform: "uppercase",
                  opacity: `${expanded === `Area${index}` ? 1 : 0.8}`,
                  color: "var(--White, #FFF)",

                  textOverflow: "ellipsis",
                }}
              >
                {eachArea.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: helvetica,
                  fontSize: {
                    sm: "16px",
                    md: "18px",
                    xl: "24px",
                  },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "128%",
                  textTransform: "uppercase",
                  opacity: 0.9,
                  color: "var(--White, #FFF)",
                }}
              >
                {eachArea.discrption}
              </Typography>
              <Box display={"flex"} gap={2} overflow={"scroll"} mt={10}>
                {eachArea.intitiatives.map((eachIntiative) => (
                  <Box display={"flex"} flexDirection={"column"} gap={2}>
                    <Image
                      src={eachIntiative.imageUrl}
                      alt={eachIntiative.title}
                      style={{
                        width: "301px",
                        height: "301px",
                      }}
                      width={50}
                      height={50}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: helvetica,
                        fontSize: {
                          sm: "16px",
                          md: "18px",
                          xl: "24px",
                        },
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "128%",
                        textTransform: "uppercase",
                        opacity: 0.9,
                        color: "var(--White, #FFF)",
                      }}
                    >
                      {eachIntiative.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Stack display={"flex"} alignItems={"center"}>
                <Button
                  variant="outlined"
                  sx={{
                    display: "flex",
                    height: "56px",
                    padding: "12px 24px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                    background: "transparent",
                    color: "#FFF",
                  }}
                  disableRipple
                  disableTouchRipple
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "Helvetica",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "128%",
                    }}
                  ></Typography>{" "}
                  View All Initiatives
                </Button>
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
};

const OurFocusAreas = () => {
  return (
    <SectionWrapper
      sx={{
        background:
          "var(--gradient-dark-light, linear-gradient(180deg, #0C1425 0%, #162B52 17.68%, #1F3F78 35.36%, #254F98 53.05%, #2B5CB0 70.73%, #2F65C1 89.77%, #316ACB 110.17%, #326CCF 136.02%))",
        margin: 0,
      }}
    >
      <Box
        sx={{
          display: {
            xs: "flex",
            gl: "inline-flex",
          },
          flexDirection: "column",
          alignItems: "flex-start",
          padding: {
            sm: "56px 24px",
            xs_sm: "56px 24px",
            sm_md: "56px 24px",
            lg: "96px 52px 176px 64px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <Stack
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              alignSelf: "stretch",
            }}
          >
            <Typography
              sx={{
                fontFamily: helvetica,
                fontSize: {
                  sm: "32px",
                  md: "32px",
                  xl: "64px",
                },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "128%",
                textTransform: "uppercase",
                opacity: 0.9,
                color: "var(--White, #FFF)",
                textAlign: "center",
                textOverflow: "ellipsis",
              }}
            >
              {" "}
              Our Focus Areas
            </Typography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",

                lg: "row",
              },
              gap: "20px",
            }}
          >
            <Box
              sx={{
                width: {
                  xs: "100%",
                  lg: "50%",
                },
                display: "flex",
              }}
            >
              <Image
                src={OFA1}
                alt="OFA1"
                width={0}
                height={0}
                style={{
                  width: "50%",
                  height: "100%",
                }}
              />
              <Stack
                sx={{
                  width: "50%",
                  gap: "8px",
                }}
              >
                <Image
                  src={OFA2}
                  alt=""
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "50%",
                  }}
                />
                <Image
                  src={OFA3}
                  alt=""
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "50%",
                  }}
                />
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: "40px",
                width: {
                  xs: "100%",
                  lg: "50%",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: helvetica,
                  fontSize: {
                    xs: "18px",
                    md: "10px",
                    xl: "24px",
                  },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: {
                    xs: "128%",
                    md: "128%",
                    xl: "140%",
                  },

                  color: "var(--White, #FFF)",
                }}
                variant="body1"
              >
                We are deeply committed to improving livelihoods, particularly
                for the marginalized youth of our country by skilling and
                empowering them. We also contribute to education, health,
                environment, animal welfare projects, and other relevant areas
                for the sustainable development of the community and the nation.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  height: "56px",
                  padding: "12px 24px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.30)",
                  background: "rgba(255, 255, 255, 0.10)",
                  color: "#FFF",
                }}
                disableRipple
                disableTouchRipple
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Helvetica",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "128%",
                  }}
                ></Typography>{" "}
                View All Initiatives
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {Areas()}
    </SectionWrapper>
  );
};

export default OurFocusAreas;
