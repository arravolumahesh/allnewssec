"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, SxProps, useScrollTrigger } from "@mui/material";
import { MotionButton } from "@cc/motion-components";
import { appbarHeight } from "@/layout/header/reactive-appbar";
import { useEffect, useState } from "react";
import Image from "next/image";

interface props{
  logoImg?: string,
  styles?: SxProps,
  menus?:{
        title:string,
        url: string,
    }[]
}


const IntermediateMenu = (prop: props) => {

const {logoImg,menus:skillMenu,styles,...rest} = prop
const trigger = useScrollTrigger();


  return (
    <>
    {/* wrapper menu section */}
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
            ...(styles && styles)
          }}
        >
          {logoImg &&
            <Box sx={{mr:'auto'}}>
              <Image src={logoImg} width={124} height={32} alt="Company Name" />
            </Box>
          }
          {skillMenu && skillMenu.map((item, index) => {
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



export default IntermediateMenu;