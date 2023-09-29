import SectionWrapper from "@/commonComponents/section-wrapper";
import React from "react";
import Image from "next/image";
import SecondaryLog from "./images/SecondaryLog.png";
import { Box, Stack, Typography } from "@mui/material";
import { helvetica } from "@/app/font";
import { MotionStack } from "@/commonComponents/motion-components";
import {
  H3,
  Subtitle1,
} from "@/styles/theme/components/typography.fontvariant";

interface NameList {
  names: string[];
}

const namesData: NameList = {
  names: [
    "About us",
    "What’s new",
    "Awards",
    "Initiatives",
    "Stories",
    "Partners",
    "Contact Us",
    "Gallery",
  ],
};
const SectionPage = () => {
  return (
    <SectionWrapper
      sx={{
        backgroundColor: "#ffff",
        overflowX: "auto",
        overflowY: "hidden",
        scrollbarWidth: "thin",
        width: "100%",
        height: "64px",
        scrollBarWidth: "thin",
        padding: "0px 64px",
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
          gap: H3,
        }}
      >
        <Image src={SecondaryLog} width={124} height={48} alt="section-logo" />
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "15%",
          }}
        >
          {namesData.names.map((name, index) => (
            <Stack
              key={index}
              sx={{
                color: "var(--primary-grey, #575756)",
                fontFamily: helvetica,
                fontSize: Subtitle1,
                fontWeight: "400",
                display: "flex",
                lineHeight: " 128%",
                height: "23px",
                opacity: "0.6",
                transition: "color 0.2s ease",
                "&:hover": {
                  color: "blue",
                  fontWeight: "bold",
                  border: "2px soild blue",
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

export default SectionPage;
