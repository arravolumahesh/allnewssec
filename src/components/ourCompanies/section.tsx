import SectionWrapper from "@/commonComponents/section-wrapper";
import React from "react";
import Image from "next/image";
import BajajLogo from "./images/BajajLogo.png";
import { Box, Stack, Typography } from "@mui/material";
import { helvetica } from "@/app/font";
import { MotionStack } from "@/commonComponents/motion-components";

// Issue to fix is the scrolling x thing ... the width and height off scrolling bar

interface NameList {
  names: string[];
}

const namesData: NameList = {
  names: [
    "What's News",
    "Programs & Initiatives",
    "Stories",
    "Sustainability",
    "Case Studies",
    "Recognition",
    "Volunteering Opportunities",
    "Contact Us",
  ],
};
const Section = () => {
  return (
    <SectionWrapper
      sx={{
        backgroundColor: "#ffff",
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "thin",
        width: "100%",
        height: "96px",
        scrollBarWidth: "thin",
        "&::-webkit-scrollbar": {
          width: "2px",
          height: "0px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "blue",
          borderRadius: "2px",
        },
        "&::-webkit-scrollbar-button": {
          display: "none",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: { lg: "32px", xs: "24px" },
        }}
      >
        <Image src={BajajLogo} width={125.33} height={32} alt="section-logo" />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { lg: "32px", xs: "24px" },
          }}
        >
          {namesData.names.map((name, index) => (
            <Stack
              key={index}
              sx={{
                color: "var(--primary-grey, #575756)",
                fontFamily: helvetica,
                fontSize: { xs: "16px", lg: "18px" },
                fontWeight: "400",
                display: "flex",
                gap: { lg: "32px", xs: "24px" },
                lineHeight: " 128%",
                height: "22px",

                opacity: "0.6",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: "blue",
                  fontWeight: "bold",
                  borderBottom: "1px soild blue",
                },
                cursor: "pointer",
              }}
            >
              {name}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </SectionWrapper>
  );
};

export default Section;
