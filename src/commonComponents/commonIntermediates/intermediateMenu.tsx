"use client";
import SectionWrapper from "@/commonComponents/section-wrapper";
import { Box, SxProps, Theme, useScrollTrigger } from "@mui/material";
import { MotionButton } from "@cc/motion-components";
import { appbarHeight } from "@/layout/header/reactive-appbar";
import { useEffect, useState } from "react";
import Image from "next/image";

interface props{
  logoImg?: string,
  styles?: SxProps<Theme>,
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
            position: "sticky",
            transition:'all 0.5s',
            top: trigger ? 0 : appbarHeight,
            zIndex: 9999,
          },
        }}
        sx={{ 
          py: {xxl:0,xs:0,md:0},
          display:'flex',
          flexDirection:'row',
          alignItems:'center'
       }}
      >
        {logoImg &&
          <Box sx={{pr:1.25}}>
            <Image src={logoImg} width={124} height={32} alt="Company Name" />
          </Box>
        }
        <Box
          sx={{
            display: "flex",
            flex:1,
            justifyContent: { xs: "flex-start", lg: logoImg ? "center" :"space-around" },
            overflow: "auto",
            gap: { xs: 5, lg: logoImg ? 10 : 0  },
            ...(styles && styles)
          }}
        >
          
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