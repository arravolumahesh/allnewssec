"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, useScrollTrigger } from "@mui/material";
import { MotionButton } from "@cc/motion-components";
import { appbarHeight } from "@/layout/header/reactive-appbar";
import { useEffect, useState } from "react";

const IntermediateMenu = () => {

const trigger = useScrollTrigger();


  return (
    <>
      <SectionWrapper
        SectionProps={{
          sx: {
            borderBottom: "1px solid var(--Stroke, #EAEAEA)",
            background: "#F8F8F8",
            position: !trigger ? "sticky" : "static",
            top: appbarHeight,
            zIndex: 9999,
          },
        }}
        sx={{ py: {xxl:0,xs:0,md:0} }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", lg: "space-around" },
            overflow: "auto",
            gap: { xs: 5, lg: 0 },
          }}
        >         
          {skillMenu.map((item, index) => {
            return (
              <MotionButton
                variant="menulink"
                color={index === 1 ? "secondary" : "primary"}
                href={item.url}
                key={index}
              >
                {item.title}
              </MotionButton>
            );
          })}
        </Box>
      </SectionWrapper>
    </>
  );
};

const skillMenu = [
  {
    title: "All",
    url: "",
  },
  {
    title: "Skill Development",
    url: "",
  },
  {
    title: "Education",
    url: "",
  },
  {
    title: "Women Empowerment",
    url: "",
  },
  {
    title: "Community",
    url: "",
  },
  {
    title: "Animal welfare",
    url: "",
  },
  {
    title: "Other Initiatives",
    url: "",
  },
];

export default IntermediateMenu;